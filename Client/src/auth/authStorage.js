const TOKEN_KEY = 'auth_token';
const USER_KEY = 'auth_user';

export function getStoredAuth() {
  const token = localStorage.getItem(TOKEN_KEY);
  const userRaw = localStorage.getItem(USER_KEY);
  const user = userRaw ? JSON.parse(userRaw) : null;
  return { token, user };
}

export function storeAuth({ token, user }) {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export function clearAuth() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}
