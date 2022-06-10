import React, { useContext, useState } from "react";

const AuthContext = createContext();
export function AuthProvider ({ children }) {

    const [authToken, setAuthToken] = useState("");

    return (
        <AuthContext.Provider value={authToken}>
            { children }
        </AuthContext.Provider>
    )

}