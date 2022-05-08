import { getRedirectResult, GoogleAuthProvider, signInWithPopup, signInWithRedirect } from 'firebase/auth';
import { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Signin.css';
import axios from 'axios';

const Signin = () => {

    // google authentication///////////////////////////////////////

    const provider = new GoogleAuthProvider();

    const handleGoogle = () => {

        signInWithPopup(auth, provider)
            .then((result) => {

                const credential = GoogleAuthProvider.credentialFromResult(result);
                const user = result.user;
                if (user) {
                    navigate(from, { replace: true });
                }

            }).catch((error) => {
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

    // email authentication ////////////////////////////////////////////////
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const navigate = useNavigate();

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;
    if (user) {
        // navigate(from, { replace: true });
    }
    if (error) {
        errorElement = <p className='text-danger fw-bold'>Error: {error?.message}</p>;
    }

    // const handleSignin = event => {
    //     event.preventDefault();
    //     const email = emailRef.current.value;
    //     const password = passwordRef.current.value;

    //     signInWithEmailAndPassword(email, password);

    // }
    const handleSignin = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        event.target.reset();

        await signInWithEmailAndPassword(email, password);
        const { data } = await axios.post('http://localhost:5000/login', { email });
        localStorage.setItem('accessToken', data.accessToken);
        navigate(from, { replace: true });
    }


    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        toast('Sent email');
    }
    /////////////////////////////////////////////////////////////////////////

    return (
        <div>
            <div className='auth-form-container '>
                <div className='auth-form'>
                    <h1 className='py-2'>Sign in Here</h1>
                    <form onSubmit={handleSignin}>
                        <div className='input-field'>
                            <div className='input-wrapper'>
                                <input ref={emailRef} type='email' name='email' id='email' placeholder='Enter your email' required />
                            </div>
                        </div>
                        <div className='input-field'>
                            <div className='input-wrapper'>
                                <input ref={passwordRef} type='password' name='password' id='password' placeholder='Enter your password' required />
                            </div>
                        </div>
                        <button type='submit' className='auth-form-submit'>
                            Login
                        </button>
                    </form>
                    <p className='redirect'>
                        New to this website ?
                        <Link to="/register" className='account-link'> Create New Account</Link>
                    </p>
                    <div className='d-flex align-items-center justify-content-center'>
                        <p className="redirect ">Forget password?</p>
                        <p onClick={resetPassword} className="reset text-primary mt-2 ps-2">Reset password</p>
                    </div>
                    <div className='horizontal-divider'>
                        <div className='line-left' />
                        <p>OR</p>
                        <div className='line-right' />
                    </div>
                    {errorElement}
                    <div className='input-wrapper'>
                        <button className='google-auth' onClick={handleGoogle}>
                            <p>Continue with Google</p>
                        </button>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Signin;