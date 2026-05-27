import { Router } from "express";
import validate from '../middlewares/validate.middleware.js';
import {sendContact} from '../controllers/contact.controller.js'

const router = Router();
router.post("/", sendContact)



export default router;
