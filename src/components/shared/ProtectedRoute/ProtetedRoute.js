import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase/firebase.init';

const ProtectedRoute = ({children}) => {
    const [user, loading, error] = useAuthState(auth);

let location = useLocation();
if (loading) {
    return <div className="flex items-center justify-center"><progress className="progress mt-[20%] w-56"></progress></div>
  }
if (!user) {

  return <Navigate to="/login" state={{ from: location }} replace />;
}else{
    return children;
}
};

export default ProtectedRoute;
