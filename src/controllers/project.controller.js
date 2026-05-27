import * as projectService from "../services/project.service.js"
import AppError from "../errors/AppError.js";

export const getAll = async (req, res, next) => {
  const projects = await projectService.getAllProjects();
  res.json(projects);
};
export const getProjectById = async (req, res, next) => {
      const project = await projectService.getProjectById(req.params.id);
    res.json(project);
};
export const createProject = async (req, res, next) => {
  const id = await projectService.createOne(
    req.body
  );
  return res.status(201).json({ id, ...req.body });
};
export const updateProject = async (req, res, next) => {
  await projectService.updateOne(req.params.id, req.body);
  res.json({ message: "Projet mise à jour" });
};
export const deleteProject = async (req, res, next) => {
  await projectService.deleteOne(req.params.id);
  res.status(204).send();
};