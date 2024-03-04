import mongoose, { Schema } from "mongoose";
import { ManagerModel } from "./managers.interface";

const ManagerSchema = new Schema<ManagerModel>(
  {
    name: {
      type: String,
      unique: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export const ManagerSchemaDB = mongoose.model<ManagerModel>(
  "managers",
  ManagerSchema
);
