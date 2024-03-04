import mongoose, { Schema } from "mongoose";
import { TaskModel } from "./tasks.interface";

const TaskSchema = new Schema<TaskModel>(
  {
    description: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      trim: true,
    },
    projectId: {
      type: Schema.Types.ObjectId,
      ref: "projects",
    },
    startDate: {
      type: Date,
    },
    endDate: {
      type: Date,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export const TaskSchemaDB = mongoose.model<TaskModel>("tasks", TaskSchema);
