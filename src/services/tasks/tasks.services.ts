import { TaskModel } from "../../models/tasks/tasks.interface";
import { TaskSchemaDB } from "../../models/tasks/tasks.model";

const createTask = async (postData: TaskModel) =>
  await new TaskSchemaDB(postData).save();

const deleteTask = async (taskId: string) =>
  await TaskSchemaDB.findByIdAndDelete(taskId);

const updateTask = async (taskId: string, updatedData: Partial<TaskModel>) =>
  await TaskSchemaDB.findByIdAndUpdate(taskId, updatedData, { new: true });

const getTask = async (taskId: string) => await TaskSchemaDB.findById(taskId);

const getTasksByProjectId = async (projectId: string) =>
  await TaskSchemaDB.find({ projectId });

const TaskServices = {
  createTask,
  deleteTask,
  updateTask,
  getTask,
  getTasksByProjectId,
};

export default TaskServices;
