import pool from '../config/database.js';

export const getTransactions = async () => {
    const [rows] = await pool.query(`
        SELECT * FROM transactions;    
    `);
    return rows;
};

export const getTransaction = async ( id ) => {

    const [rows] = await pool.query(`
        SELECT * FROM transactions
        WHERE id = ?;    
    `, [id]);

    return rows[0];
};

export const createTransaction = async ( transaccionInfo ) => {

    const {tipo, monto, referencia, estado, descripcion} = transaccionInfo;

    const result = await pool.query(`
        INSERT INTO  transactions (tipo, monto, referencia, estado, description)
        VALUES (?, ?, ?, ?, ?);    
    `, [tipo, monto, referencia, estado, descripcion]);

    return result;
};

export const updateTransaction = async (id, transaccionInfo ) => {
    // console.log(id, transaccionInfo, "mo");
    const {field, value} = transaccionInfo;
    
    
    const result = await pool.query(`
        UPDATE transactions
        SET ${field} = "${value}"
        WHERE id = ${id};    
    `);
};

export const deleteTransaction = async ( id ) => {
    const result = await pool.query(`
        DELETE FROM transactions
        WHERE id = "${id}";    
    `);
};