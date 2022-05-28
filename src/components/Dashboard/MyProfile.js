import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import auth from '../../firebase/firebase.init';
import useDuser from '../../hooks/useDuser';
import Loading from '../shared/Loading/Loading';

const MyProfile = () => {
    const [user, loading,] = useAuthState(auth);
   const [dUser] = useDuser()
    const handleSubmit = (e) => { 
        e.preventDefault()
        const name = e.target.name.value;
        const email = user?.email;
        const img = e.target.img.value;
        const location = e.target.location.value;
        const number = e.target.number.value;
        const education = e.target.education.value;
        const facebook = e.target.facebook.value;
        const linkdin = e.target.linkdin.value;
        const profile = {name, email, img,location, education, number, linkdin, facebook};
        fetch('https://blooming-woodland-85127.herokuapp.com/profile',{
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('jwtToken')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(profile)
        }).then(response => response.json())
        .then(data=>{
            if(data.acknowledged){
                toast.success('Your profile has been updated Successfully')
            }else{
                toast.error('Something went wrong! Please try again later')
            }
        })
    }
    if(loading){
        return <Loading/>
    }
    return (
        <div>
            <section className="py-6 bg-gray-800 mt-20 text-gray-100">
                <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                    <div className="py-6 grid items-center md:py-0 md:px-6">
                        <div className="">
                        <h3 className="text-4xl mb-10 font-semibold">You'r  <span className="text-violet-400">Profile</span></h3>
                        <div className="max-w-md p-8 sm:flex sm:space-x-6 bg-gray-900 text-gray-100">
                            <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                                <img src={dUser.img ? dUser.img : "https://source.unsplash.com/100x100/?portrait?1"} alt="" className="object-cover object-center w-full h-full rounded bg-gray-500" />
                            </div>
                            <div className="flex flex-col space-y-4">
                                <div>
                                    <h2 className="text-2xl font-semibold">{user?.displayName}</h2>
                                    <span className="text-sm text-gray-400">{dUser?.role}</span>
                                </div>
                                <div className="space-y-1">
                                    <span className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Email address" className="w-4 h-4">
                                            <path fill="currentColor" d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
                                        </svg>
                                        <span className="text-gray-400">{user?.email}</span>
                                    </span>
                                    <span className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Phonenumber" className="w-4 h-4">
                                            <path fill="currentColor" d="M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z"></path>
                                        </svg>
                                        <span className="text-gray-400">{dUser?.number ? dUser.number : 'please add'}</span>
                                    </span>
                                    <span className="text-gray-400 block">location : {dUser?.location ? dUser.location : 'please add'}</span>
                                    <span className="text-gray-400 block">Education : {dUser?.education ? dUser.education : 'please add'}</span>
                                    
                                </div>
                            </div>
                        </div>

                        </div>

                    </div>
                    <form novalidate="" onSubmit={handleSubmit} className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid">
                    <h3 className="text-4xl font-semibold">Update You'r  <span className="text-violet-400">Profile</span></h3>
                        <label className="block">
                            <span className="mb-1">Full name</span>
                            <input name='name' type="text" value={user?.displayName} className="block w-full rounded-md p-2 border-gray-400 bg-gray-700 mt-2" />
                        </label>
                        <label className="block">
                            <span className="mb-1">img URL</span>
                            <input required name='img' type="url" placeholder="https://demo.com/yourProfile" className="block w-full rounded-md p-2 border-gray-400 bg-gray-700 mt-2" />
                        </label>
                        <label className="block">
                            <span className="mb-1">Phone Number</span>
                            <input required={true} name='number' type="number" placeholder="4.5" className="block w-full rounded-md p-2 border-gray-400 bg-gray-700 mt-2" />
                        </label>
                        <label className="block">
                            <span className="mb-1">Education</span>
                            <input required name='education' type="tex" placeholder="ex: school degrees" className="block w-full rounded-md p-2 border-gray-400 bg-gray-700 mt-2" />
                        </label>
                        <label className="block">
                            <span className="mb-1">Location</span>
                            <input required name='location' type="tex" placeholder="ex: Dhaka, Bangladesh" className="block w-full rounded-md p-2 border-gray-400 bg-gray-700 mt-2" />
                        </label>
                        <label className="block">
                            <span className="mb-1">Facebook URL</span>
                            <input required name='facebook' type="url" placeholder="https://facebook.com/yourProfile" className="block w-full rounded-md p-2 border-gray-400 bg-gray-700 mt-2" />
                        </label>
                        <label className="block">
                            <span className="mb-1">Linkdin URL</span>
                            <input required name='linkdin' type="url" placeholder="https://linkdin.com/yourProfile" className="block w-full rounded-md p-2 border-gray-400 bg-gray-700 mt-2" />
                        </label>
                        
                        <input type="submit" value='Update Profile' className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-violet-400 text-gray-900 focus:ring-violet-400 hover:ring-violet-400" />
                    </form>
                </div>
            </section>
        </div>
    );
};

export default MyProfile;