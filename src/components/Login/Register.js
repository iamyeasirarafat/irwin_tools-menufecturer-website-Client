import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';

import auth from '../../firebase/firebase.init';
import Loading from '../shared/Loading/Loading';
import useToken from '../../hooks/useToken';
import toast from 'react-hot-toast';

const Register = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, uError] = useUpdateProfile(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [token] = useToken(gUser || user)
    if( gLoading || loading || updating){
        return <Loading></Loading>
    }
    if(token){
        navigate(from, { replace: true });
        toast.success('successfully logged in',{id:'success'})
    }
    if(error || gError){
        {error && toast.error(error?.message,{id:'error'})}
        {gError && toast.error(gError?.message,{id:'gerror'})}
    }
    
    const handeRegister = async (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({displayName:name});
        alert('Account Successfully Created')
    }
    return (
        <div>
            <div style={{
                background: `url(${''})`,
                backgroundPosition: 'center'
            }} class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left">
                        <h1 class="text-5xl font-bold">Register now!</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div class="card flex-shrink-0 bg-gray-900 text-gray-100 w-full max-w-sm shadow-2xl">
                        <div class="card-body">
                            <h2 class="text-2xl font-semibold text-center">Register</h2>
                            <form onSubmit={handeRegister}>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text text-gray-100">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" class="input input-bordered bg-gray-600" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text text-gray-100">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" class="input input-bordered bg-gray-600" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text text-gray-100">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" class="input input-bordered bg-gray-600" />
                                
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn">Register</button>
                                <p class="text-sm mt-2">Already have account ? <Link class="text-secondary"to="/login">Please login here</Link></p>
                            </div>
                            </form>
                            <div class="divider">OR</div>
                        <button onClick={()=>signInWithGoogle()} class="btn bg-violet-400 text-gray-900">Continue with Google</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;