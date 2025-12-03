import { z } from 'zod';
export const validateSchema = (schema) => async (req, res, next) => {
    try {
        if(!req.body) return res.status(400).json({ message: 'No se proporcionaron datos para validar', error: [] });
        console.log('request body validated:', req.body);
        const result = await schema.parseAsync(req.body);
        console.log('Validation result:', result);
        req.body = result;
        next();
    } catch (error) {
        // console.error('Validation error:', error);
        if (error instanceof z.ZodError) {
            error.issues;
            // console.log('Zod validation issues:', error.issues);
            return res
                .status(400)
                .json({
                    message: 'Verifique los datos proporcionados', 
                    error: error.issues
                });
        }
        return res
            .status(500)
            .json({
                message: 'Ocurrió un error, por favor intenta de nuevo más tarde', 
                error: error
            });
    }
};