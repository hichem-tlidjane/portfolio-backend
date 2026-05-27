import { body } from 'express-validator';
 
export const validateAuth = [
  body('email').notEmpty().withMessage('email manquant').isEmail().withMessage('Email invalide'),
  body('password').notEmpty().withMessage('Mot de passe requis'),
];
