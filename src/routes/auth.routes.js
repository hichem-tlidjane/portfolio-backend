import express from 'express';
import {validateAuth} from '../validators/auth.validator.js'; 
import validate from '../middlewares/validate.middleware.js';
import {login} from '../controllers/auth.controller.js'

const router = express.Router();
router.post(
  '/login', 
  validateAuth, 
  validate, 
  login,
);
export default router;