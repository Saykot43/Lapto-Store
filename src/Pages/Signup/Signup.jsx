import { GoogleAuthProvider, sendEmailVerification, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import './Signup.css';

const Signup = () => {
    // google authentication///////////////////////////////////////

    const provider = new GoogleAuthProvider();
    const handleGoogle = () => {
        
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // ...
            if (user) {
                navigate(from, {replace: true});
            }
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });

    }
    /////////////////////////////////////////////////////////////////////////
    

    // email authentication  /////////////////////////////
    const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

    const navigate = useNavigate()
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, {replace: true});
    }

    const handleSignup = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        

        createUserWithEmailAndPassword(email, password);
        
    }
    ////////////////////////////////////////////////////////////////////

    return (
        <div>
           <div className='auth-form-container '>
            <div className='auth-form'>
                <h1 className='py-2'>Sign up Here</h1>
                <form onSubmit={handleSignup}>
                    <div className='input-field'>
                        <div className='input-wrapper'>
                        <input type='text' name='name' id='name' placeholder='Enter your Name' required/>
                        </div>
                    </div>
                    <div className='input-field'>
                        <div className='input-wrapper'>
                        <input type='email' name='email' id='email' placeholder='Enter your email' required/>
                        </div>
                    </div>
                    <div className='input-field'>
                        <div className='input-wrapper'>
                            <input type='password' name='password' id='password' placeholder='Enter your password' required/>
                        </div>
                    </div>
                    <button type='submit' className='auth-form-submit'>
                        Register
                    </button>
                </form>
                <p className='redirect'>
                    Already have an account ? 
                    <Link to="/login" className='account-link'> Sign in</Link>
                </p>
                <div className='horizontal-divider'>
                    <div className='line-left' />
                    <p>OR</p>
                    <div className='line-right' />
                </div>
                <div className='input-wrapper'>
                    <button className='google-auth' onClick={handleGoogle}>
                        <p>Continue with Google</p>
                    </button>
                </div>
            </div>
        </div> 
        </div>
    );
};

export default Signup;