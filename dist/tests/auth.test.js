"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const strict_1 = __importDefault(require("node:assert/strict"));
const auth_1 = require("../src/utils/auth");
function run() {
    // Caso feliz
    strict_1.default.equal((0, auth_1.isAllowedUser)("user1", "password1"), true, "user1/password1 deberia ser valido");
    strict_1.default.equal((0, auth_1.isAllowedUser)("user2", "password2"), true, "user2/password2 deberia ser valido");
    // Credenciales incorrectas
    strict_1.default.equal((0, auth_1.isAllowedUser)("user1", "wrong"), false, "password incorrecto deberia ser invalido");
    strict_1.default.equal((0, auth_1.isAllowedUser)("unknown", "password1"), false, "usuario inexistente deberia ser invalido");
    // Entradas vacias
    strict_1.default.equal((0, auth_1.isAllowedUser)("", ""), false, "entradas vacias deberian ser invalidas");
    strict_1.default.equal((0, auth_1.isAllowedUser)("user1", ""), false, "password vacio deberia ser invalido");
    strict_1.default.equal((0, auth_1.isAllowedUser)("", "password1"), false, "username vacio deberia ser invalido");
    console.log("✓ auth.test: todos los casos pasaron\n");
}
run();
