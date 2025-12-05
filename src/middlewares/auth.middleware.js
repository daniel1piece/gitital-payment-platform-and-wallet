import jwt from "jsonwebtoken";
import { isTokenActive } from "../model/token.model.js";

export const verifyToken = async(req, res, next) => {
    try {
        const authHeader = req.headers["authorization"];

        if (!authHeader) return res.status(401).json({ message: "Necesita autorización" });

        const token = authHeader.split(" ")[1];
        if (!token) return res.status(401).json({ message: "Formato de autorización inválido" });

        try {
            console.log("token", token);
            const isActive = await isTokenActive(token);
            console.log("isActive", isActive);
            if(!isActive) return res.status(401).json({ message: "No está autorizado. Por favor inicie sesión nuevamente." });
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;
            next();
        } catch (error) {
            return res.status(401).json({ message: "Token inválido o expirado ☺" });
        }
    } catch (error) {
        return res
        .status(500)
        .json({ 
            message: "Ocurrió un error, por favor intenta de nuevo más tarde.",
            error: error 
        });
    }
};