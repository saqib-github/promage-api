import { Types } from "mongoose";

export interface ProjectModel {
  name: string;
  details?: string;
  managerId: Types.ObjectId;
  startDate: Date;
  endDate: Date;
  isRunning: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
