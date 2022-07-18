import { createContext, useEffect, useState } from "react";
import { getUser } from "../services/users";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [user, setUser] = useState({email: null});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const retrieveUser=  async () => {
      const currentUser = await getUser();
      setUser(currentUser);
      setLoading(false);
    }
  retrieveUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, errorMessage, setErrorMessage , loading, setLoading}}>
      {children}
    </UserContext.Provider>
  );
}