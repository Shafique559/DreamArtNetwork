import express from "express";
import { Admission } from "../Controler/DataControler.js"; // Ensure the path and file name is correct

// Create a router
export const dataRouter = express.Router();

// Define the POST route for admissions
dataRouter.post("/Admission", Admission);

// Export the router
export default dataRouter;
