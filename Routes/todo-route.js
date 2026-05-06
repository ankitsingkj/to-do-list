import express from "express";
import { createTodo } from "../controller/todo.controller.js";

const router = express.Router();

// Create Todo
router.post("/add", createTodo);

// Test Route
router.get("/", (req, res) => {
  res.send("TODO API is running");
});

export default router;