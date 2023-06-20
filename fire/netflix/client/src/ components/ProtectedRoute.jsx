import React from 'react';
import {Navigate} from "react-router-dom";
import {UserAuth} from "../context/AuthContext";

function ProtectedRoute({children, showToLogged}) {
    const {user} = UserAuth()
    return showToLogged === (user != null) ? children : <Navigate to='/'/>
}

export default ProtectedRoute;