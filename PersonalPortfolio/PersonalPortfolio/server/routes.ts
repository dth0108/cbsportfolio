import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      
      const contact = await storage.createContact(validatedData);
      
      // In a real application, you might want to send an email notification here
      console.log("New contact submission:", contact);
      
      res.json({ 
        success: true, 
        message: "Contact form submitted successfully",
        id: contact.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          error: "Validation failed", 
          details: error.errors 
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ 
          error: "Internal server error" 
        });
      }
    }
  });

  // Get all contacts (for admin purposes - would need authentication in production)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      console.error("Get contacts error:", error);
      res.status(500).json({ 
        error: "Internal server error" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
