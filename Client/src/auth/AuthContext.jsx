import React, { createContext, useCallback, useMemo, useState } from 'react';
import { apiRequest } from '../api/http';
import { clearAuth, getStoredAuth, storeAuth } from './authStorage';

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const initial = getStoredAuth();
  const [token, setToken] = useState(initial.token);
  const [user, setUser] = useState(initial.user);

  const isAuthenticated = Boolean(token && user);

  const login = useCallback(async ({ email, password }) => {
    const data = await apiRequest('/api/auth/login', {
      method: 'POST',
      body: { email, password }
    });

    storeAuth({ token: data.token, user: data.user });
    setToken(data.token);
    setUser(data.user);
    return data.user;
  }, []);

  const signup = useCallback(async ({ fullName, email, phone, password }) => {
    const data = await apiRequest('/api/auth/signup', {
      method: 'POST',
      body: { fullName, email, phone, password }
    });

    storeAuth({ token: data.token, user: data.user });
    setToken(data.token);
    setUser(data.user);
    return data.user;
  }, []);

  const logout = useCallback(() => {
    clearAuth();
    setToken(null);
    setUser(null);
  }, []);

  const value = useMemo(
    () => ({ token, user, isAuthenticated, login, signup, logout }),
    [token, user, isAuthenticated, login, signup, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
