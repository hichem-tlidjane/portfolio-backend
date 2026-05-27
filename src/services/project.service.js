import * as projectModel from "../models/project.model.js";
import db from "../config/db.js";
import AppError from "../errors/AppError.js";

export const getAllProjects = async () => {
    return projectModel.findAll();
}
export const getProjectById = async (id) => {
      const project = await projectModel.findById(id);
     if (!project) {
        throw new AppError('Projet introuvable', 404);
    }
    return project;
};
export const createOne = async (data) => {
    const newProjectId = await projectModel.create(data);
    return newProjectId;
};
export const updateOne = async (id, data) => {
  const affected = await projectModel.update(id, data);

  if (affected === 0) {
    throw new AppError("Projet introuvable", 404);
  }
};
export const deleteOne = async (id) => {
  const affected = await projectModel.remove(id);

  if (affected === 0) {
    throw new AppError("Projet introuvable", 404);
  }
};