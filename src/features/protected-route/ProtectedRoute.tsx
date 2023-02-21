import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';

const ProtectedRoute = ({isAuthenticated}: {isAuthenticated: boolean}) => {
    return (
        <>
            {isAuthenticated ? <Outlet /> : <Navigate to="/sign-in" />}
        </>
    );
};

export default ProtectedRoute;