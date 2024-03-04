import mongoose, { Schema, Types } from "mongoose";
import { ProjectModel } from "./projects.interface";

const ProjectSchema = new Schema<ProjectModel>(
  {
    name: {
      type: String,
      trim: true,
    },
    details: {
      type: String,
      trim: true,
    },
    managerId: {
      type: Schema.Types.ObjectId,
      ref: "managers",
    },
    startDate: {
      type: Date,
    },
    endDate: {
      type: Date,
      trim: true,
    },
    isRunning: {
      type: Boolean,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export const ProjectSchemaDB = mongoose.model<ProjectModel>(
  "projects",
  ProjectSchema
);
