import express, { Router } from "express";
import { body, param, validationResult } from "express-validator";
import TaskController from "../../controllers/tasks/tasks.controller";
import mongoose from "mongoose";

export const TaskRoutes: Router = express.Router();

// Custom validator for projectId field
const validateProjectId = (value: any) => {
  if (!mongoose.Types.ObjectId.isValid(value)) {
    throw new Error("Invalid projectId");
  }
  return true;
};

// Create Task
TaskRoutes.post(
  "/create",
  body("description").notEmpty().isString().trim(),
  body("status").notEmpty().isString().trim(),
  body("startDate").notEmpty().isISO8601(),
  body("endDate").notEmpty().isISO8601(),
  body("projectId").notEmpty().custom(validateProjectId),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  TaskController.createTask
);

// Delete Task
TaskRoutes.delete(
  "/delete/:id",
  param("id").isString().trim(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  TaskController.deleteTask
);

// Update Task
TaskRoutes.put(
  "/update/:id",
  param("id").isString().trim(),
  body("description").optional().isString().trim(),
  body("status").optional().isString().trim(),
  body("startDate").optional().isISO8601(),
  body("endDate").optional().isISO8601(),
  body("projectId").optional().custom(validateProjectId),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  TaskController.updateTask
);

// Get Task by ID
TaskRoutes.get(
  "/get/:id",
  param("id").isString().trim(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  TaskController.getTask
);

// Get Tasks by ProjectId
TaskRoutes.get(
  "/get/:projectId",
  param("projectId").isString().trim(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  TaskController.getTasksByProjectId
);
