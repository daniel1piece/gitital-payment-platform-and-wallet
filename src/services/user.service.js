import pool from '../config/database.js';

export const userExists = async ( email ) => {
    const rows = await pool.query(`
        SELECT id 
        FROM users
        WHERE email = "${email}";
    `);
    
    // console.log(rows, ' user.service.js');
    

    return rows[0];
}