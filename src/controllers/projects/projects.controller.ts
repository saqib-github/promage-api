import { Request, Response } from "express";
import wrapAsync from "express-async-handler";
import { ProjectModel } from "../../models/projects/projects.interface";
import ProjectServices from "../../services/projects/projects.services";

const createProject = async (req: Request, res: Response) => {
  const postData: ProjectModel = req.body;
  const resp = await ProjectServices.createProject(postData);
  res.status(200).send({
    data: resp,
    message: "Project created",
  });
};

const deleteProject = async (req: Request, res: Response) => {
  const { id } = req.params;
  await ProjectServices.deleteProject(id);
  res.status(200).send({
    message: "Project deleted",
  });
};

const updateProject = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedData: Partial<ProjectModel> = req.body;
  const resp = await ProjectServices.updateProject(id, updatedData);
  res.status(200).send({
    data: resp,
    message: "Project updated",
  });
};

const getProject = async (req: Request, res: Response) => {
  const { id } = req.params;
  const resp = await ProjectServices.getProject(id);
  res.status(200).send({
    data: resp,
    message: "Project fetched",
  });
};

const ProjectController = {
  createProject: wrapAsync(createProject),
  deleteProject: wrapAsync(deleteProject),
  updateProject: wrapAsync(updateProject),
  getProject: wrapAsync(getProject),
};

export default ProjectController;
