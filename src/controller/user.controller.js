import * as User from '../model/user.model.js';

export const getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.getUsers();
        res.status(200).json({
            message:"Usuarios obtenidos exitosamente",
            data: allUsers
        });
    } catch (error) {
        res.status(500).json({
            message:"Ocurrio un error al intentar obtener los usuarios",
            error:error
        });
    }
};

export const getSingleUser = async (req, res) => {
    try {
        const user = await User.getUser(req.params.id);

        if ( !user ) return res.status(200).json({message: "No se encotro el usuario"})

        res.status(200).json({
            message:"Usuario obtenido exitosamente",
            data: user
        });
    } catch (error) {
        res.status(500).json({
            message:"Usuario obtenido exitosamente",
            error:error
        });
    }
};

export const createNewUser = async (req, res) => {
    try {
        const user = User.createUser(req.body);

        res.status(201).json({
            message:"Usuario creado exitosamente",
            data:user
        });
    } catch (error) {
        res.status(500).json({
            message:"Ocurrio un error al intentar crear el usuario",
            error:error
        });
    }
}

export const updateUser = async (req, res) => {
    try {
        const result = User.updateUser(req.params.id, req.body);
        res.status(200).json({
            message:"Usuario actualizado exsitosamente",
            data:result
        });
    } catch (error) {
        res.status(500).json({
            message:"Ocurrio un error al intentar actualizar el usuario",
            error:error
        });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const result = User.deleteUser(req.params.id);
        res.status(200).json({
            message:"Usuario eliminado exitosamente",
            data: result
        });
    } catch (error) {
        res.status(500).json({
            message:"Ocurrio un error al intentar eliminar el usuario",
            error:error
        });
    }
};