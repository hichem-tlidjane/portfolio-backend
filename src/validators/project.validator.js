import { body, param } from "express-validator";

export const validateProjectBody = [
body("title")
.notEmpty().withMessage("Le titre est requis")
.isLength({ min: 2 }).withMessage("Le titre doit faire au moins 2 caractères")
.isLength({ max: 150 }).withMessage("Le titre ne peut pas dépasser 150 caractères"),
body("description")
.isLength({max: 2000}).withMessage("La description ne peut pas depasser 2000 caractéres"),
body("tech_stack")
.isLength({max: 255 })
.withMessage("La tech stack ne peut pas depasser 255 caractéres"),
body("github_url")
.isURL()
.withMessage("l'URL de votre github n'est pas valide"),
body("demo_url")
.isURL()
.withMessage("l'URL de votre demo n'est pas valide"),
body("image_url")
.isURL().withMessage("l'URL de votre image n'est pas valide")
];
