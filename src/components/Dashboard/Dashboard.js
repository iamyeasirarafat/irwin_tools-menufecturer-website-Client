import React from 'react';
import {  NavLink, Outlet } from 'react-router-dom';
import useDuser from '../../hooks/useDuser';
import Loading from '../shared/Loading/Loading';

const Dashboard = () => {
    const [dUser, loading] = useDuser();
    if(loading){
        return <Loading></Loading>
    }
    return (
        <div className="w-11/12 mx-auto">
            <div className="flex items-center -mx-4 space-x-2 mt-4 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap bg-gray-800 text-gray-100">
                <NavLink style={({isActive}) => { return {borderColor: isActive ? 'violet' : 'gray'}}}  to="/dashboard/profile" className="flex items-center flex-shrink-0 px-5 py-2 border-b-4 text-gray-400">My Profile</NavLink>
                {
                    dUser?.role==='admin' ? <>
                    <NavLink style={({isActive}) => { return {borderColor: isActive ? 'violet' : 'gray'}}}  to="/dashboard/manage" className="flex items-center flex-shrink-0 px-5 py-2 border-b-4 text-gray-400">Manage All Orders</NavLink>
                    <NavLink style={({isActive}) => { return {borderColor: isActive ? 'violet' : 'gray'}}}  to="/dashboard/addProduct" className="flex items-center flex-shrink-0 px-5 py-2 border-b-4 text-gray-400">Add A Product</NavLink>
                    <NavLink style={({isActive}) => { return {borderColor: isActive ? 'violet' : 'gray'}}}  to="/dashboard/makeAdmin" className="flex items-center flex-shrink-0 px-5 py-2 border-b-4 text-gray-400">Make Admin</NavLink>
                    <NavLink style={({isActive}) => { return {borderColor: isActive ? 'violet' : 'gray'}}}  to="/dashboard/profile" className="flex items-center flex-shrink-0 px-5 py-2 border-b-4 text-gray-400">Manage Products</NavLink>
                    </> : <><NavLink style={({isActive}) => { return {borderColor: isActive ? 'violet' : 'gray'}}}  to="/dashboard" className="flex items-center flex-shrink-0 px-5 py-2 border-b-4 text-gray-400">My Orders</NavLink>
                    <NavLink style={({isActive}) => { return {borderColor: isActive ? 'violet' : 'gray'}}}  to="/dashboard/review" className="flex items-center flex-shrink-0 px-5 py-2 border-b-4 text-gray-50">Add a Review</NavLink></>
                }
               
            </div>
            <Outlet/>
        </div>
    );
};

export default Dashboard;