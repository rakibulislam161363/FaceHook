import { useContext, useDebugValue } from "react";

import { AuthContext } from "../context/authContext";

export const useAuth = () =>{
    const {Auth} = useContext(AuthContext);
    useDebugValue(Auth, Auth => Auth?.user ? "user logged in" : "user Logged out")
    return useContext(AuthContext);
}