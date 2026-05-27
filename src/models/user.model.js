import db from '../config/db.js'; 

async function findByEmail(email) {
  const query = `
    SELECT * 
    FROM users 
    WHERE email = ?
  `;
  const values = [email];

  try {
    const [rows] = await db.query(query, values); 

    if (rows && rows.length > 0) {
      return rows[0];
    } else {
      return null;
    }
  } catch (error) {
    console.error(`Erreur lors de la recherche de l'utilisateur avec l'email ${email} :`, error);
    // En cas d'erreur de base de données, propagez l'erreur.
    throw new Error("Échec de l'interrogation de la base de données MySQL.");
  }
}

export default findByEmail;