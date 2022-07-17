import { UserContext } from '../context/UserContext';
import { useContext } from 'react';
import { signUp, signIn, signOut } from '../services/users';

export const useAuth = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within a userProvider');
  }

  const { user, setUser, errorMessage, setErrorMessage, loading} = context;

  const isLoggedIn = user?.email;

  const login = async (email, password) => {
    const authenticatedUser = await signIn(email, password);
    setUser(authenticatedUser);
  };

  const signUpUser = async (user) => {
    const newUser = await signUp(user);
    setUser(newUser);
  };

  const logout = () => {
    setUser({ email: null });
    signOut();
  };

  return {
    user,
    isLoggedIn,
    login,
    errorMessage,
    setErrorMessage,
    signUpUser,
    logout,
    loading
  };
};
