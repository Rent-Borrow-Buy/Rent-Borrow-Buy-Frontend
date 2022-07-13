import { createContext, useState } from "react";
import { getUser } from "../services/users";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const currentUser = getUser();

    const [error, setError] = useState('');
    const [user, setUser] = useState(currentUser || {email: null});

    return (
        <UserContext.Provider value={{ error, setError, user, setUser}}>
            {children}
        </UserContext.Provider>
    );
}