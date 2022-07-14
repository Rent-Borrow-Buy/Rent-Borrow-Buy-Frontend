import { createContext, useState } from "react";
import { getUser } from "../services/users";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const currentUser = getUser();

    const [errorMessage, setErrorMessage] = useState('');
    const [user, setUser] = useState(currentUser || {email: null});

    return (
        <UserContext.Provider value={{ user, setUser, errorMessage, setErrorMessage }}>
            {children}
        </UserContext.Provider>
    );
}