import { Navigate, Outlet } from "react-router-dom";
import React from "react";

const ProtectedRoute = ({children}) => {
    
    const token = localStorage.getItem("access_token");
    console.log("masuk protected route");
    if(!token){
        return <Navigate to="/" />
    }
    return <>
    {children || <Outlet />}
    </>
}

export default ProtectedRoute;