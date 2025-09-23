import { useState } from "react";
import { AuthContext } from "../context/authContext";

const AuthProvider = ({Children}) => {
    const [auth, setAuth] = useState({})
    return(
        <AuthContext.Provider value={{auth, setAuth}}>
            {Children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;