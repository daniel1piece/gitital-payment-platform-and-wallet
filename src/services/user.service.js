import pool from '../config/database.js';
import bcrypt from 'bcrypt';

export const userExists = async ( email ) => {
    const rows = await pool.query(`
        SELECT id 
        FROM users
        WHERE email = "${email}";
    `);
    
    // console.log(rows, ' user.service.js');
    

    return rows[0];
}

export const verifyPassword = async (email, password) => {
  const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
//   console.log("rows users service js", rows);
//   console.log(password);
  
//   const isMatch2 = await bcrypt.compare(password, rows[0].password);
//   console.log(isMatch2);
  if(rows[0]){
    const isMatch = await bcrypt.compare(password, rows[0].password);   
    
    if(isMatch){
      const userInfo = 
      {
        id: rows[0].id,
        email: rows[0].email,
        name: rows[0].nombre
      };
      console.log(userInfo, " INFO use service");
      return userInfo;
    }
    return null;
  }
  return null;
}

export const verifyUserExistsById = async ( id ) => {
  const user = await pool.query(`
    SELECT * FROM users WHERE id = "${id};"  
  `)
  console.log('verify user exist by id - user services js', user);
  return user;
}

export const verifyRolExistById = async ( id ) => {
  const [colums] = await pool.query(`
    SELECT * FROM users WHERE id = "${id}";  
  `);

  console.log('verify rol exist by rol - user services js', rol);
  return rol;
}