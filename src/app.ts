import express, { Application, Request, Response } from "express";
import cors from "cors";
import { config } from "dotenv";
import { router } from "./routes";
import { errorHandler } from "./middlewares/error.middleware";


config();
const app: Application = express();

// CORS configuration
app.use(cors({
  origin: [
    'http://localhost:3000',    // React/Next.js development
    'http://localhost:3001',    // Alternative frontend port
    'http://localhost:5173',    // Vite development
    'http://127.0.0.1:3000',
    'http://127.0.0.1:5173',
    'https://ieeewebapp.vercel.app',  // Production frontend
    'https://ieee-event-app.vercel.app',
    'https://ieeepusb.org',
    'https://www.ieeepusb.org'
  ],
  credentials: true,              // Allow cookies and auth headers
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());
app.use("/api/",router)

app.get('/',(req: Request,res:Response)=>{
    res.send('Welcome to PUC IEEE Event App')
})

app.use(errorHandler);
export default app;