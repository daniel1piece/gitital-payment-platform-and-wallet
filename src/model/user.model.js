import pool from '../config/database.js';

export const getUsers = async () => {
    const [rows] = await pool.query(`
        SELECT * FROM users;    
    `);

    return rows;
};

export const getUser = async (id) => {
    const [rows] = await pool.query(`
        SELECT * FROM users
        WHERE id = ?;    
    `, [id]);

    return rows[0];
};

export const createUser = async (user) => {
    const {id_rol, nombre, email, password, saldo_actual, estado} = user;
    const result = await pool.query(`
        INSERT INTO users(id_rol, nombre, email, password, saldo_actual, estado)
        VALUES (?, ?, ?, ?, ?, ?);    
    `, [id_rol, nombre, email, password, saldo_actual, estado]);
    return result;
}

export const updateUser = async (id, userInfo) => {
    const {field, value} = userInfo;
    const result = await pool.query(`UPDATE users SET ${field} = "${value}" WHERE id = ${id}`);
    return result;
}

export const deleteUser = async  (id) => {
    const result = await pool.query(`DELETE FROM users WHERE id = ${id};`)
    return result;
};