import { z } from 'zod';
import * as UserService from '../services/user.service.js';

export const createUserSchema = z.object({
    id_rol: z
        .coerce
        .bigint('El rol del usuario debe ser un numero entero')
        .min(1, 'El rol de usuario debe ser un numero mayor a 0')
        .max(2147483644, 'El numero ingresad debe ser menor a 2,000,000,000'),
    nombre: z
        .string('Ingrese un nombre')
        .regex(/^[a-zA-Z ]+$/, "El nombre solo puede contener letras del abecedario.")
        .max(200, 'Ingrese un nombre con menos de 200 caracteres')
        .min(4, "El nombre debe incluir al menos 4 caracteres"),
    email: z
            .string("El correo el obligatorio")
            .email('Ingrese un email')
            .min(5, 'El correo debe tener al menos 5 caracteres.'),
    password: z
               .string('Ingrese una contraseña')
               .min(9, "Cotraseña debe tener al menos 9 caracteres")
               .max(20,'La contrasena debe tener como max 20 caracteres')
               .regex(/[a-z]/, 'La contraseña debe tener al menos una letra minuscula')
               .regex(/[A-Z]/, 'La contraseña debe tener al menos una letra mayuscula')
               .regex(/[0-9]/, 'La contraseña debe tener al menos una letra numero')
               .regex(/[$%+*-/!#,<>()&@!~.,{}?]/, 'La contraseña debe tener al menos un caracter especial ($,%,+,*,-,/,!,#,<,>,(,),&,@,!,~,.,{,},?,)'),
   confirmPassword: z
                .string('La confirmacion de la contraseña es obligatoria'),
   saldo_actual: z
                .coerce
                .number("Debe ingresar el saldo actual"),
   estado: z
            .coerce
            .bigint("Ingrese 1 para usuario activo o 0 para usuario inactivo.")
            .min(0, "No se puede ingresar valores menores a 0")
            .max(1, "No se puede ingresar valores mayores a 1")    
})
.superRefine(async (data, ctx) => {
    console.log("Test user schema js");
    
    const passwordExists = data.password.toLowerCase().includes(data.nombre.toLocaleLowerCase());
    if (passwordExists) {
        ctx.addIssue({
            code:'custom',
            message:"La contraseña no debe contener su nombre",
            path:['password']
        });
     }

    if (data.password !== data.confirmPassword){
        ctx.addIssue({
            code:"custom",
            path:["confirmPassword", "password"],
            message:"Las contrseñas no coinciden"
        });
    }

    const doesUserExist = await UserService.userExists(data.email);
    console.log(doesUserExist.length, 'user.schema.js');
    if (doesUserExist.length !== 0) {
        ctx.addIssue ({
            code: 'custom',
            path: ['email'],
            message:"El usuario ya esta registrado"
        });
    }    
});

export const userReadAccessSchema = z.object({
    rol: z
    .string('Rol no propocionado')
    .min(4, 'El rol de usuario no debe tener menos de 4 caracteres')
    .max(20, 'El rol de usuario no debe tener mas de 20 caracteres'),
    id: z
    .coerce
    .bigint('El id de usuario debe ser un numero entero positivo')
    .min(1, 'Id de usuario demasiado corto')
    .max(200000000, 'Id de usuario demasiado largo.')
})
.superRefine((data, ctx) => {
    const user = UserService.verifyUserExistsById(data.id);
    if (!user) {
        ctx.addIssue({
            code:'custom',
            message:'El usuario no existe',
            path: [id]
        });
    }
    const rol = UserService.verifyRolExistById(data.rol);
    if (!rol) {
        ctx.addIssue({
            code: 'custom',
            message: 'El rol no existe o no pertenece a este usuario',
            path: [id]
        });
    }
})