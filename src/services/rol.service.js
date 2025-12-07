import pool from "../config/database.js";

export const doesRolDescriptionAlreadyExist = async (descripcion) => {
    const [rolDescription] = await pool.query(`
            SELECT * FROM rols WHERE descripcion = "${descripcion}";
    `);

    console.log('rol service js', rolDescription[0]);

    return rolDescription[0];
};