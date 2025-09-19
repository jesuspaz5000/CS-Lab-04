import { allowedUsers } from "../constant";

export function isAllowedUser(username: string, password: string): boolean {
  if (!username || !password) return false;
  return allowedUsers.some((u) => u.username === username && u.password === password);
}
