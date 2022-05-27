import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase/firebase.init';
import Loading from '../Loading/Loading';


const ProtectedRoute = ({children}) => {
    const [user, loading, error] = useAuthState(auth);

let location = useLocation();
if (loading) {
    return <Loading/>
  }
if (!user) {

  return <Navigate to="/login" state={{ from: location }} replace />;
}else{
    return children;
}
};

export default ProtectedRoute;
