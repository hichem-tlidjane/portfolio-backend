import { body, param } from "express-validator";
export const validateProjectBody = [
  body("name")
    .notEmpty()
    .withMessage("le titre est obligatoire")
    .isLength({ min: 2 })
    .withMessage("Le nom doit faire au moins 2 caractères")
    .isLength({ max: 100 })
    .withMessage("Le nom ne peut pas dépasser 150 caractères"),
  body("email")
    .notEmpty()
    .withMessage("l'email est obligatoire")
    .isEmail()
    .withMessage("l'email n'est pas valide"),
  body("message")
    .notEmpty()
    .withMessage("le message est obligatoire")
    .isLength({ min: 10 })
    .withMessage("le message doit faire minimum 10 caractéres")
    .isLength({ max: 2000 })
    .withMessage("le message doit faire maximum 2000 caractéres"),
];
