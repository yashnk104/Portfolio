import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistSchema } from "@shared/schema";

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

  // You can add more API routes here as needed

  const httpServer = createServer(app);
  return httpServer;
}
