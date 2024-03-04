import { ProjectModel } from "../../models/projects/projects.interface";
import { ProjectSchemaDB } from "../../models/projects/projects.model";
import { TaskSchemaDB } from "../../models/tasks/tasks.model";

const createProject = async (postData: ProjectModel) =>
  await new ProjectSchemaDB(postData).save();

const deleteProject = async (projectId: string) =>
  await ProjectSchemaDB.findByIdAndDelete(projectId);

const updateProject = async (projectId: string, updatedData: Partial<ProjectModel>) =>
  await ProjectSchemaDB.findByIdAndUpdate(projectId, updatedData, { new: true });

const getProject = async (projectId: string) => {
  const project = await ProjectSchemaDB.findById(projectId);
  if (!project) {
    throw new Error("Project not found");
  }
  const totalTasks = await TaskSchemaDB.countDocuments({ project: projectId });
  return { ...project.toJSON(), totalTasks };
};

const ProjectServices = {
  createProject,
  deleteProject,
  updateProject,
  getProject,
};

export default ProjectServices;
