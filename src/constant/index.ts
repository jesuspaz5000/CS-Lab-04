import { PassThrough } from "stream";


export const allowedUsers = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" },
    { username: "", Password: "password3" }, "El username vacío no deberia ser invalido",
    { username: "gquispe", password: "admin123" },
];