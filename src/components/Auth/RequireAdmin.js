import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin'
import auth from '../../firebase.init';
import Spinner from '../Shared/Spinner';


const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation()
    const [admin, adminLoading] = useAdmin(user)

    if (adminLoading || loading) {
        return <Spinner />
    }

    if (!admin || !user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children
};

export default RequireAdmin;