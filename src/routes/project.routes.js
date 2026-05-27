import { Router } from "express";
import {
getAll,
getProjectById,
createProject,
updateProject,
deleteProject,
} from "../controllers/project.controller.js";
import {
validateProjectBody
} from "../validators/project.validator.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import { authorize } from "../middlewares/authorize.middleware.js";
import validate from "../middlewares/validate.middleware.js";
const router = Router();
router.get("/", getAll);
router.get("/:id", getProjectById)
router.post("/", validateProjectBody ,validate, createProject )
router.put("/:id", updateProject ) 
router.delete("/:id", deleteProject )
export default router;
