import express, { Router } from "express";
import { body, param, validationResult } from "express-validator";
import ProjectController from "../../controllers/projects/projects.controller";
import mongoose from "mongoose";

export const ProjectRoutes: Router = express.Router();

// Custom validator for managerId field
const validateManagerId = (value: any) => {
  if (!mongoose.Types.ObjectId.isValid(value)) {
    throw new Error("Invalid managerId");
  }
  return true;
};

// Create Project
ProjectRoutes.post(
  "/create",
  body("name").notEmpty().isString().trim(),
  body("details").optional().isString().trim(),
  body("startDate").notEmpty().isISO8601(),
  body("endDate").notEmpty().isISO8601(),
  body("managerId").custom(validateManagerId),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  ProjectController.createProject
);

// Delete Project
ProjectRoutes.delete(
  "/delete/:id",
  param("id").isString().trim(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  ProjectController.deleteProject
);

// Update Project
ProjectRoutes.put(
  "/update/:id",
  param("id").isString().trim(),
  body("name").notEmpty().isString().trim(),
  body("details").optional().isString().trim(),
  body("startDate").notEmpty().isISO8601(),
  body("endDate").notEmpty().isISO8601(),
  body("managerId").custom(validateManagerId),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  ProjectController.updateProject
);

// Get Project by ID
ProjectRoutes.get(
  "/get/:id",
  param("id").isString().trim(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  ProjectController.getProject
);
