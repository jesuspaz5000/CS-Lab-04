//import { PassThrough } from "stream";
// src/constant/index.ts

export type AllowedUser = { username: string; password: string };

export const allowedUsers = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" },
    { username: "gquispe", password: "admin123" },
]satisfies ReadonlyArray<AllowedUser>;