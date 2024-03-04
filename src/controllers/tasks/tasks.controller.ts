import { Request, Response } from "express";
import wrapAsync from "express-async-handler";
import { TaskModel } from "../../models/tasks/tasks.interface";
import TaskServices from "../../services/tasks/tasks.services";

const createTask = async (req: Request, res: Response) => {
  const postData: TaskModel = req.body;
  const resp = await TaskServices.createTask(postData);
  res.status(200).send({
    data: resp,
    message: "Task created",
  });
};

const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  await TaskServices.deleteTask(id);
  res.status(200).send({
    message: "Task deleted",
  });
};

const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedData: Partial<TaskModel> = req.body;
  const resp = await TaskServices.updateTask(id, updatedData);
  res.status(200).send({
    data: resp,
    message: "Task updated",
  });
};

const getTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const resp = await TaskServices.getTask(id);
  res.status(200).send({
    data: resp,
    message: "Task fetched",
  });
};
const getTasksByProjectId = async (req: Request, res: Response) => {
  const { projectId } = req.params;
  const resp = await TaskServices.getTasksByProjectId(projectId);
  res.status(200).send({
    data: resp,
    message: "Task fetched",
  });
};

const TaskController = {
  createTask: wrapAsync(createTask),
  deleteTask: wrapAsync(deleteTask),
  updateTask: wrapAsync(updateTask),
  getTask: wrapAsync(getTask),
  getTasksByProjectId: wrapAsync(getTasksByProjectId),
};

export default TaskController;
