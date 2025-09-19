"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAllowedUser = isAllowedUser;
const constant_1 = require("../constant");
function isAllowedUser(username, password) {
    if (!username || !password)
        return false;
    return constant_1.allowedUsers.some((u) => u.username === username && u.password === password);
}
