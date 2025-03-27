import { users, type User, type InsertUser, waitlistEntries, type WaitlistEntry, type InsertWaitlistEntry } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Waitlist storage methods
  getWaitlistEntry(id: number): Promise<WaitlistEntry | undefined>;
  getWaitlistEntryByEmail(email: string): Promise<WaitlistEntry | undefined>;
  getAllWaitlistEntries(): Promise<WaitlistEntry[]>;
  createWaitlistEntry(entry: InsertWaitlistEntry): Promise<WaitlistEntry>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private waitlistEntries: Map<number, WaitlistEntry>;
  private currentUserId: number;
  private currentWaitlistId: number;

  constructor() {
    this.users = new Map();
    this.waitlistEntries = new Map();
    this.currentUserId = 1;
    this.currentWaitlistId = 1;
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
}

export const storage = new MemStorage();
