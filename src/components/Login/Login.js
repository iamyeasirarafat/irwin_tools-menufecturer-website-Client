import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import auth from '../../firebase/firebase.init';


const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, user, loading,error, ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    if( gLoading || loading){
        return <p>Loading...</p>;
    }
    if(gUser || user){
        navigate(from, { replace: true });
    }
    const handleLogin = async (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
       await signInWithEmailAndPassword(email, password);
       alert('Logged in successfully')
    }
    return (
        <div>
            <div class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left">
                        <h1 class="text-5xl font-bold">Login now!</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div class="card flex-shrink-0 bg-gray-900 text-gray-100 w-full max-w-sm shadow-2xl ">
                        <div class="card-body">
                            <h2 class="text-2xl font-semibold text-center">Login</h2>
                           <form onSubmit={handleLogin} >
                           <div class="form-control">
                                <label class="label">
                                    <span class="label-text text-gray-100">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" class="input input-bordered bg-gray-600" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text text-gray-100">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" class="input input-bordered bg-gray-600" />
                                <label class="label">
                                    <a href="#" class="text-secondary link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn">Login</button>
                                <p class="text-sm mt-2">New in Doctors Portal? <Link class="text-secondary"to="/register">Register a new one</Link></p>
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

export default Login;