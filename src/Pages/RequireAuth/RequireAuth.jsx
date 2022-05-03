import React from 'react';
import auth from '../../Firebase/firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const RequireAuth = ({ children }) => {
    const [user, looding] = useAuthState(auth);
    const location = useLocation();
    if (looding) {
        return<div className='text-center fs-1'>
            <Spinner animation="grow" />
        </div>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;

};

export default RequireAuth;