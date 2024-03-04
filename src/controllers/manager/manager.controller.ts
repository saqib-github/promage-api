import { Request, Response } from "express";
import wrapAsync from "express-async-handler";
import { ManagerModel } from "../../models/managers/managers.interface";
import ManagerServices from "../../services/managers/managers.services";

const createManager = async (req: Request, res: Response) => {
  const postData: ManagerModel = req.body;
  const resp = await ManagerServices.createManager(postData);
  res.status(200).send({
    data: resp,
    message: "Record created",
  });
};

const deleteManager = async (req: Request, res: Response) => {
  const managerId: string = req.params.id;
  await ManagerServices.deleteManager(managerId);
  res.status(200).send({
    message: "Record deleted",
  });
};

const updateManager = async (req: Request, res: Response) => {
  const managerId: string = req.params.id;
  const updatedData: Partial<ManagerModel> = req.body;
  const resp = await ManagerServices.updateManager(managerId, updatedData);
  res.status(200).send({
    data: resp,
    message: "Record updated",
  });
};

const getManagerById = async (req: Request, res: Response) => {
  const managerId: string = req.params.id;
  const resp = await ManagerServices.getManagerById(managerId);
  res.status(200).send({
    data: resp,
    message: "Record found",
  });
};

const ManagerController = {
  createManager: wrapAsync(createManager),
  deleteManager: wrapAsync(deleteManager),
  updateManager: wrapAsync(updateManager),
  getManagerById: wrapAsync(getManagerById),
};

export default ManagerController;
