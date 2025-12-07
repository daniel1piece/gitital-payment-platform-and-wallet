import { AccessControl } from "accesscontrol";

const accesscontrol = new AccessControl();

// Basic Example
// Define roles and grants one by one

accesscontrol
.grant('admin')
    .createAny('user')
    .deleteAny('user')
    .readAny('user')
    .updateAny('user')
.grant('user')
    .readOwn('user');

let permission = accesscontrol.can('user').readOwn('user');
console.log(permission.granted);
console.log(permission.attributes);

permission = accesscontrol.can('admin').updateAny('user');
console.log(permission.granted);
console.log(permission.attributes);


export const readUsersPermissionAccess = (req, res, next) => {
    const permission = accesscontrol.can(req.body.rol).readAny('user');
    if (permission.granted) {
        next();
    } else {
        // resource is forbidden for the current user/roles
        res.status(403).json({
            message:"Accesso denegado, usted no tiene permiso para acceder a esta informacion, por favor contacte al administrador del sistema"
        }).end();
    }
};

export const readUserPermissionAccess = (req, res, next) => {
    const permission = accesscontrol.can(req.body.rol).readOwn('user');

    if (!permission.granted) {
         res.status(403).json({
            message:"Accesso denegado, usted no tiene permiso para acceder a esta informacion, por favor contacte al administrador del sistema"
        }).end();
    }

    next();
}
