'use client';

import { createContext, useContext, ReactNode } from 'react';

interface User {
  username: string;
}

interface AuthContextType {
  user: User;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Default guest user - authentication is disabled
const guestUser: User = { username: 'Guest' };

export function AuthProvider({ children }: { children: ReactNode }) {
  // Authentication is disabled - always use guest user
  const user = guestUser;

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 