import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

import { signOut } from 'firebase/auth';

const RequireUser = ({children}) => {
    const [user, loading] = useAuthState(auth);
    // const [user, userLoading] = useAdmin(user);
    const location = useLocation();

    if(loading || loading){
        return <Loading></Loading>
    }

    if(!user ){
        signOut(auth);
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequireUser;