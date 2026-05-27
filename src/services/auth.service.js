import findByEmail from '../models/user.model.js'; // Importation par défaut comme spécifié précédemment
import bcrypt from 'bcrypt';                   // Assurez-vous d'avoir installé 'bcrypt'
import jwt from 'jsonwebtoken';
import AppError from '../errors/AppError.js';

class HttpError extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
        this.name = 'HttpError';
    }
}

// Assurez-vous que cette clé est définie dans vos variables d'environnement (par exemple, dans un fichier .env)
const JWT_SECRET = process.env.JWT_SECRET || 'votre_cle_secrete_par_defaut'; 



export async function loginUser({ email, password }) {
    
    const user = await findByEmail(email);

    if (!user) {
        throw new AppError("Identifiants de connexion invalides.", 401); 
    }
    
    const hashedPassword = user.password; 
    
    const isPasswordValid = await bcrypt.compare(password, hashedPassword);

    if (!isPasswordValid) {
        throw new AppError("Identifiants de connexion invalides.", 401);
    }

    const payload = {
        id: user.id,
        email: user.email,
        role: user.role || 'user', 
    };
    
    const token = jwt.sign(payload, JWT_SECRET, { 
        expiresIn: '24h' 
    });

    return token;
}

export default { loginUser };

