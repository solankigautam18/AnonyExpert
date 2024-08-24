import {z} from 'zod';

export const usernameValidation =
z.string()
.min(2, "Username must be atleast 2 characters")
.max(20, "Username must not be more than 20 characters")
.regex(/^[a-zA-z0-9]+$/, "Username must not contain special character")

export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message: 'Invalid email address'}),
    password: z.string().min(6, {message: "password must be atleast 6 characters"})
})