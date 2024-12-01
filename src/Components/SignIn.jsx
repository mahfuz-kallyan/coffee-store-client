import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider';

const SignIn = () => {
    const { signInUser } = useContext(AuthContext)
    const handleSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInUser(email, password)
            .then(result => {
                console.log(result.user);

                // update last login time
                const lastSignInTime = result?.user?.metadata?.lastSignInTime;
                const loginInfo = {
                    email, lastSignInTime
                };

                fetch(`http://localhost:5000/users`,{
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(loginInfo)
                })
                .then(res => res.json())
                .then(data=> {
                    console.log(data);
                })
            })
            .catch(err => {
                console.log(err.message);

            })

    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="flex flex-col justify-center items-center">
                    <div className="text-center flex flex-col justify-center items-center">
                        <h1 className="text-5xl font-bold text-center">Sign In now!</h1>
                        <p className="py-6 text-center w-1/2">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign In</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;