import { Types } from "mongoose";

export interface TaskModel {
  description: string;
  status: string;
  startDate: Date;
  endDate: Date;
  projectId: Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
}
