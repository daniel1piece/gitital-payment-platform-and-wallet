import { z } from 'zod';
import { userExists, verifyPassword } from '../services/user.service.js';

export const loginSchema = z.object({
    email: z
    .string('El correo electrónico es obligatorio')
    .email({ message: "Correo electrónico inválido" }),
    password: z
    .string('La contraseña es obligatoria')
})
.superRefine( async (data, ctx) => {
    const user =  await userExists(data.email);
    if (!user) {
        ctx.addIssue({
            code: "custom",
            path: ['email', "password"],
            message: 'Correo electrónico o contraseña incorrectos'
        });
    }

    const validPassword = await verifyPassword(data.email, data.password);
    console.log(validPassword);
    if (!validPassword) {
        ctx.addIssue({
            code: "custom",
            path: ['email', "password"],
            message: 'Correo electrónico o contraseña incorrectos_'
        });
    }
});