import pool from '../config/database.js';

export const getAudits = async () => {
    const [rows] = await pool.query(`
        SELECT * FROM audits;
    `);

    return rows;
};

export const getAudit = async (id) => {
    const [rows] = await  pool.query(`
        SELECT * FROM audits
        WHERE id = "${id}";
    `);

    return rows[0];
};

export const createAudit = async (auditInfo) => {
    const {id_user, actions, ip, navegador} = auditInfo;
    
    const result = await pool.query(`
        INSERT INTO audits (id_user, actions, ip, navegador)
        VALUES ("${id_user}", "${actions}", "${ip}", "${navegador}");   
    `);

    return result;
}

export const updateAudit = async (id, auditInfo) => {
     console.log(auditInfo);
    const {field, value} = auditInfo;
   
    
    const result = await pool.query(`
        UPDATE audits
        SET 
        ${field} = "${value}"
        WHERE id = "${id}";
    `);

    return result;
}