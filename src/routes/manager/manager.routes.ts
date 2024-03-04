import express, { Router } from "express";
import { body, param, validationResult } from "express-validator";
import ManagerController from "../../controllers/manager/manager.controller";

export const ManagerRoutes: Router = express.Router();

// Create Manager
ManagerRoutes.post(
  "/create",
  body("name").notEmpty().isString().trim(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  ManagerController.createManager
);

// Delete Manager
ManagerRoutes.delete(
  "/delete/:id",
  param("id").isString().trim(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  ManagerController.deleteManager
);

// Update Manager
ManagerRoutes.put(
  "/update/:id",
  param("id").isString().trim(),
  body("name").notEmpty().isString().trim(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  ManagerController.updateManager
);

// Get Manager by ID
ManagerRoutes.get(
  "/get/:id",
  param("id").isString().trim(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  ManagerController.getManagerById
);
