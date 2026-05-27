import db from "../config/db.js";
export const findAll = async () => {
    const [rows] = await db.query(
        "SELECT * FROM projects ORDER BY created_at DESC"
    );
    return rows;
};
export const findById = async (id) => {
  const [rows] = await db.query(
    'SELECT * FROM projects WHERE id = ?', [id]
  );
  return rows[0] || null;
};
export const create = async ({ title, description, tech_stack, github_url, demo_url, image_url }) => {
  const [result] = await db.query(
    "INSERT INTO projects (title, description, tech_stack, github_url, demo_url, image_url ) VALUES (?, ?, ?, ?, ?, ?)",
    [title, description, tech_stack, github_url, demo_url, image_url]
  );
  return result.insertId;
};
export const update = async (id, {title, description, tech_stack, github_url, demo_url, image_url}) => {
    const [result] = await db.query(
      "UPDATE projects SET title=?, description=?, tech_stack=?, github_url=?, demo_url=?, image_url=? WHERE id=?",
      [title, description, tech_stack, github_url, demo_url, image_url, id]
    );
      return result.affectedRows;
};
export const remove = async (id) => {
  const [result] = await db.query(
    "DELETE FROM projects WHERE id = ?",
    [id]
  );
  return result.affectedRows;
};