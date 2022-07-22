import { useContext } from 'react';
import { signUp, signIn, signOut } from '../services/users';
import { UserContext } from '../context/UserContext';
import toast from 'react-hot-toast';
import { useHistory } from 'react-router-dom';

export const useAuth = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within a userProvider');
  }

  const { user, setUser, errorMessage, setErrorMessage, loading, setLoading } =
    context;

  const history = useHistory();

  const isLoggedIn = user?.email;

  const login = async (email, password) => {
    try {
      const authenticatedUser = await signIn(email, password);
      console.log(authenticatedUser, 'auth user');
      setUser(authenticatedUser);
      toast.success('Welcome back!');
    } catch (e) {
      toast.error(e.message);
      history.replace('/auth');
    }
  };

  const signUpUser = async (user) => {
    try {
      const newUser = await signUp(user);
      console.log('newUser', newUser);
      setUser(newUser);
      toast.success(`Successfully created account for ${newUser.email}`);
    } catch (e) {
      toast.error(e.message);
    }
  };

  const logout = async () => {
    setUser(null);
    try {
      await signOut();
      toast.success('Successfully signed out');
    } catch (e) {
      toast.error(e.message);
    }
  };

  return {
    user,
    isLoggedIn,
    login,
    errorMessage,
    setErrorMessage,
    signUpUser,
    logout,
    loading,
    setLoading,
  };
};
