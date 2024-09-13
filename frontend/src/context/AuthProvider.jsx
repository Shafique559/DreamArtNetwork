import React, { createContext, useContext, useState } from 'react';

// Create the AuthContext
export const AuthContext = createContext();

// Define the AuthProvider component
export default function AuthProvider({ children }) {
  // Retrieve the initial user data from localStorage
  const initialAuth = localStorage.getItem("User");

  // Set up state for authUser
  const [authUser, setAuthUser] = useState(
    initialAuth ? JSON.parse(initialAuth) : undefined
  );

  // Return the AuthContext provider with authUser and setAuthUser
  return (
    <AuthContext.Provider value={[ authUser, setAuthUser ]}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);
