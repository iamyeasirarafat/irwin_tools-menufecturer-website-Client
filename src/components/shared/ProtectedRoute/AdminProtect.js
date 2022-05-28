import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useDuser from '../../../hooks/useDuser';
import Loading from '../Loading/Loading';



const AdminProtect = ({children}) => {
   const [dUser, loading] = useDuser()
let location = useLocation();
if(loading){
    return <Loading></Loading>
}
if (dUser?.role !== 'admin') {

  return <Navigate to="/login" state={{ from: location }} replace />;
}else{
    return children;
}
};

export default AdminProtect;
