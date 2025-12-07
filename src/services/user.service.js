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
  const [rows] = await pool.query(`
    SELECT * FROM users WHERE id = "${id}";  
  `);

  console.log('verify rol exist by rol - user services js', rol);
  return rows[0].id_rol;
}

export const doesTheUserHaveSubmittedRol = async ( rol, user_id ) => {
  const [userRows] = await pool.query(`
    SELECT * FROM users WHERE id = "${user_id}";  
  `);

  const [rolRows] =  await pool.query (`
    SELECT * FROM rols WHERE descripcion = "${rol}";  
  `);


  // if the user exists and the rol exists then we make the comparison
  // otherwise, we throw an error
  
  return (rolRows[0] && userRows[0]) ? (rolRows[0].id === userRows[0].id_rol) : false;
  
}