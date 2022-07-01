import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {

    const auth = localStorage.getItem("Token");
    return auth ? <Outlet/> : <Navigate to = '/Registration' />
    

}

export default ProtectedRoute