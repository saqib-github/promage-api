import { ManagerSchemaDB } from "../../models/managers/managers.model";
import { ManagerModel } from "../../models/managers/managers.interface";

const createManager = async (postData: ManagerModel) =>
  await new ManagerSchemaDB(postData).save();

const deleteManager = async (managerId: string) =>
  await ManagerSchemaDB.findByIdAndDelete(managerId);

const updateManager = async (
  managerId: string,
  updatedData: Partial<ManagerModel>
) =>
  await ManagerSchemaDB.findByIdAndUpdate(managerId, updatedData, {
    new: true,
  });

const getManagerById = async (managerId: string) =>
  await ManagerSchemaDB.findById(managerId);

const ManagerServices = {
  createManager,
  deleteManager,
  updateManager,
  getManagerById,
};

export default ManagerServices;
