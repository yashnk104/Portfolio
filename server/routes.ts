import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistSchema, projectSchema, insertProjectSchema } from "@shared/schema";
import { ZodError } from "zod";

// Simple authentication middleware
const authenticate = (req: Request, res: Response, next: NextFunction) => {
  // In a real application, this would use proper authentication with JWT or sessions
  // For this demo, we're using a simple API key approach
  
  const apiKey = req.headers["x-api-key"];
  const adminKey = process.env.ADMIN_API_KEY || "admin-secret-key"; // Set a secure key in production
  
  if (apiKey !== adminKey) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  
  next();
};

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint to handle waitlist submissions
  app.post("/api/waitlist", async (req: Request, res: Response) => {
    try {
      // Validate the request body
      const result = insertWaitlistSchema.safeParse(req.body);
      
      if (!result.success) {
        return res.status(400).json({ 
          message: "Invalid email address", 
          errors: result.error.format() 
        });
      }
      
      // Check if email already exists
      const existingEntry = await storage.getWaitlistEntryByEmail(result.data.email);
      
      if (existingEntry) {
        return res.status(409).json({ message: "Email already registered" });
      }
      
      // Store the waitlist entry
      const entry = await storage.createWaitlistEntry(result.data);
      
      return res.status(201).json({ 
        message: "Successfully added to waitlist",
        data: { id: entry.id } 
      });
    } catch (error) {
      console.error("Error adding to waitlist:", error);
      return res.status(500).json({ message: "Server error, please try again later" });
    }
  });

  // PROJECT MANAGEMENT API ROUTES

  // Get all published projects (public, no auth required)
  app.get("/api/projects", async (req: Request, res: Response) => {
    try {
      const projects = await storage.getPublishedProjects();
      return res.status(200).json({ projects });
    } catch (error) {
      console.error("Error fetching projects:", error);
      return res.status(500).json({ message: "Server error, please try again later" });
    }
  });

  // Get project by ID (public, no auth required)
  app.get("/api/projects/:id", async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid project ID" });
      }
      
      const project = await storage.getProject(id);
      
      if (!project) {
        return res.status(404).json({ message: "Project not found" });
      }
      
      // Only return published projects for public API
      if (!project.published) {
        return res.status(404).json({ message: "Project not found" });
      }
      
      return res.status(200).json({ project });
    } catch (error) {
      console.error("Error fetching project:", error);
      return res.status(500).json({ message: "Server error, please try again later" });
    }
  });

  // ADMIN API ROUTES (all require authentication)
  
  // Get all projects including unpublished (admin only)
  app.get("/api/admin/projects", authenticate, async (req: Request, res: Response) => {
    try {
      const projects = await storage.getAllProjects();
      return res.status(200).json({ projects });
    } catch (error) {
      console.error("Error fetching all projects:", error);
      return res.status(500).json({ message: "Server error, please try again later" });
    }
  });
  
  // Create a new project (admin only)
  app.post("/api/admin/projects", authenticate, async (req: Request, res: Response) => {
    try {
      // Validate the request body
      const result = projectSchema.safeParse(req.body);
      
      if (!result.success) {
        return res.status(400).json({ 
          message: "Invalid project data", 
          errors: result.error.format() 
        });
      }
      
      // Ensure published has a default value
      const projectData = {
        ...result.data,
        published: result.data.published ?? true
      };
      
      // Create the project
      const newProject = await storage.createProject(projectData);
      
      return res.status(201).json({ 
        message: "Project created successfully",
        project: newProject
      });
    } catch (error) {
      console.error("Error creating project:", error);
      if (error instanceof ZodError) {
        return res.status(400).json({ 
          message: "Invalid project data", 
          errors: error.format() 
        });
      }
      return res.status(500).json({ message: "Server error, please try again later" });
    }
  });
  
  // Update a project (admin only)
  app.put("/api/admin/projects/:id", authenticate, async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid project ID" });
      }
      
      // Check if project exists
      const existingProject = await storage.getProject(id);
      
      if (!existingProject) {
        return res.status(404).json({ message: "Project not found" });
      }
      
      // Validate the request body (partial updates allowed)
      const result = projectSchema.partial().safeParse(req.body);
      
      if (!result.success) {
        return res.status(400).json({ 
          message: "Invalid project data", 
          errors: result.error.format() 
        });
      }
      
      // Update the project
      const updatedProject = await storage.updateProject(id, result.data);
      
      return res.status(200).json({ 
        message: "Project updated successfully",
        project: updatedProject
      });
    } catch (error) {
      console.error("Error updating project:", error);
      if (error instanceof ZodError) {
        return res.status(400).json({ 
          message: "Invalid project data", 
          errors: error.format() 
        });
      }
      return res.status(500).json({ message: "Server error, please try again later" });
    }
  });
  
  // Delete a project (admin only)
  app.delete("/api/admin/projects/:id", authenticate, async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid project ID" });
      }
      
      // Check if project exists
      const existingProject = await storage.getProject(id);
      
      if (!existingProject) {
        return res.status(404).json({ message: "Project not found" });
      }
      
      // Delete the project
      const deleted = await storage.deleteProject(id);
      
      if (!deleted) {
        return res.status(500).json({ message: "Failed to delete project" });
      }
      
      return res.status(200).json({ 
        message: "Project deleted successfully",
        id
      });
    } catch (error) {
      console.error("Error deleting project:", error);
      return res.status(500).json({ message: "Server error, please try again later" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
