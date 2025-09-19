import assert from "node:assert/strict";
import { isAllowedUser } from "../src/utils/auth";

function run() {
  // Caso correcto
  assert.equal(isAllowedUser("user1", "password1"), true, "user1/password1 deberia ser valido");
  assert.equal(isAllowedUser("user2", "password2"), true, "user2/password2 deberia ser valido");

  // Credenciales incorrectas
  assert.equal(isAllowedUser("user1", "wrong"), false, "password incorrecto deberia ser invalido");
  assert.equal(isAllowedUser("unknown", "password1"), false, "usuario inexistente deberia ser invalido");

  // Entradas vacias
  assert.equal(isAllowedUser("", ""), false, "entradas vacias deberian ser invalidas");
  assert.equal(isAllowedUser("user1", ""), false, "password vacio deberia ser invalido");
  assert.equal(isAllowedUser("", "password1"), false, "username vacio deberia ser invalido");

  console.log("✓ auth.test: todos los casos pasaron\n");
}

run();
