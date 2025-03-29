import { 
  users, 
  type User, 
  type InsertUser, 
  waitlistEntries, 
  type WaitlistEntry, 
  type InsertWaitlistEntry,
  projects,
  type Project,
  type InsertProject
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Waitlist storage methods
  getWaitlistEntry(id: number): Promise<WaitlistEntry | undefined>;
  getWaitlistEntryByEmail(email: string): Promise<WaitlistEntry | undefined>;
  getAllWaitlistEntries(): Promise<WaitlistEntry[]>;
  createWaitlistEntry(entry: InsertWaitlistEntry): Promise<WaitlistEntry>;
  
  // Project storage methods
  getProject(id: number): Promise<Project | undefined>;
  getAllProjects(): Promise<Project[]>;
  getPublishedProjects(): Promise<Project[]>;
  createProject(project: InsertProject): Promise<Project>;
  updateProject(id: number, project: Partial<InsertProject>): Promise<Project | undefined>;
  deleteProject(id: number): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private waitlistEntries: Map<number, WaitlistEntry>;
  private projectEntries: Map<number, Project>;
  private currentUserId: number;
  private currentWaitlistId: number;
  private currentProjectId: number;

  constructor() {
    this.users = new Map();
    this.waitlistEntries = new Map();
    this.projectEntries = new Map();
    this.currentUserId = 1;
    this.currentWaitlistId = 1;
    this.currentProjectId = 1;
    
    // Initialize with default projects
    this.initializeDefaultProjects();
  }
  
  private initializeDefaultProjects() {
    const defaultProjects: InsertProject[] = [
      {
        title: "CIBIL Score Predictor",
        description: "An AI/ML-based model to predict CIBIL scores for unregistered small businesses, providing financial institutions with valuable insights for evaluating creditworthiness.",
        image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        altText: "CIBIL Score Predictor for Small Businesses",
        tag: "Machine Learning",
        technologies: [
          "Python", "scikit-learn", "Pandas", "React.js", "MongoDB"
        ],
        features: [
          "AI/ML algorithms to predict creditworthiness for unregistered businesses",
          "Data preprocessing and feature engineering for accurate prediction",
          "User-friendly React.js interface for inputting business financials",
          "Secure data storage and management with MongoDB",
          "Linear regression and random forest algorithms implementation"
        ],
        demoLink: "https://cibilpredictor.app",
        codeLink: "https://github.com/yashnk104/Credit_score",
        published: true
      },
      {
        title: "Stock Price Predictor",
        description: "A stock price prediction application leveraging LSTM neural networks and historical financial data to forecast market trends with impressive 85% accuracy.",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        altText: "Stock Price Predictor Application",
        tag: "Data Science",
        technologies: [
          "Python", "Streamlit", "LSTM Neural Networks", "Matplotlib", "Seaborn"
        ],
        features: [
          "85% accuracy in forecasting short-term stock price trends",
          "Real-time financial data integration from market APIs",
          "Interactive data visualization with Matplotlib and Seaborn",
          "Enhanced user engagement through intuitive interface design",
          "Historical data analysis for pattern recognition"
        ],
        demoLink: "https://stockpredictor.app",
        codeLink: "https://github.com/yashnk104/stock-predictor",
        published: true
      },
      {
        title: "Graph Visualizer",
        description: "An interactive graph algorithm visualization tool combining advanced data structures with a modern React.js frontend to deliver both educational value and powerful computational capabilities.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        altText: "Graph Algorithm Visualizer",
        tag: "Web Application",
        technologies: [
          "React.js", "Data Structures", "JavaScript", "CSS", "Dijkstra's Algorithm"
        ],
        features: [
          "Optimized Dijkstra's algorithm with 1000+ nodes processing in under 100ms",
          "Intuitive drag-and-drop interface for node placement and manipulation",
          "Real-time graph updates and algorithm visualization",
          "Responsive design compatible with various devices",
          "Educational tool for understanding graph-based algorithms"
        ],
        demoLink: "https://graphvisualizer.app",
        codeLink: "https://github.com/yashnk104/graph-visualizer",
        published: true
      }
    ];
    
    defaultProjects.forEach(project => {
      this.createProject(project);
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  async getWaitlistEntry(id: number): Promise<WaitlistEntry | undefined> {
    return this.waitlistEntries.get(id);
  }
  
  async getWaitlistEntryByEmail(email: string): Promise<WaitlistEntry | undefined> {
    return Array.from(this.waitlistEntries.values()).find(
      (entry) => entry.email.toLowerCase() === email.toLowerCase(),
    );
  }
  
  async getAllWaitlistEntries(): Promise<WaitlistEntry[]> {
    return Array.from(this.waitlistEntries.values());
  }
  
  async createWaitlistEntry(insertEntry: InsertWaitlistEntry): Promise<WaitlistEntry> {
    const id = this.currentWaitlistId++;
    const now = new Date();
    const entry: WaitlistEntry = { 
      ...insertEntry, 
      id, 
      createdAt: now 
    };
    this.waitlistEntries.set(id, entry);
    return entry;
  }
  
  // Project storage methods
  async getProject(id: number): Promise<Project | undefined> {
    return this.projectEntries.get(id);
  }
  
  async getAllProjects(): Promise<Project[]> {
    return Array.from(this.projectEntries.values());
  }
  
  async getPublishedProjects(): Promise<Project[]> {
    return Array.from(this.projectEntries.values()).filter(
      project => project.published
    );
  }
  
  async createProject(insertProject: InsertProject): Promise<Project> {
    const id = this.currentProjectId++;
    const now = new Date();
    const project: Project = {
      ...insertProject,
      id,
      createdAt: now,
      updatedAt: now,
      published: insertProject.published ?? true // Ensure published has a default value
    };
    this.projectEntries.set(id, project);
    return project;
  }
  
  async updateProject(id: number, updates: Partial<InsertProject>): Promise<Project | undefined> {
    const existingProject = this.projectEntries.get(id);
    
    if (!existingProject) {
      return undefined;
    }
    
    const updatedProject: Project = {
      ...existingProject,
      ...updates,
      id,
      updatedAt: new Date()
    };
    
    this.projectEntries.set(id, updatedProject);
    return updatedProject;
  }
  
  async deleteProject(id: number): Promise<boolean> {
    return this.projectEntries.delete(id);
  }
}

export const storage = new MemStorage();
