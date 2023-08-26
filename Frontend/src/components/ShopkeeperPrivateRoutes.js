import { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom'

const useAuth = () => {
    const user = JSON.parse(localStorage.getItem('user-token'))

    if (user.isadmin) {
        return true
    } else {
        return false
    }
}

const ShopkeeperProtectedRoutes = () => {


    const auth = useAuth()


    return auth ? <Outlet /> : <Navigate to="/" />
}


export default ShopkeeperProtectedRoutes;