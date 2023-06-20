import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {UserAuth} from "../context/AuthContext";

function SignUp(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {user, signUp} = UserAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await signUp(email, password)
            navigate('/')
        } catch (e) {
            console.log(e)
        }
    }
    const style = {
        "input": 'p-3 my-2 bg-gray-700 rounded decoration outline-0'
    }

    return (
        <>
            <div className='w-full screen'>
                <img
                    className='hidden sm:block absolute w-full h-full object-cover'
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/84526d58-475e-4e6f-9c81-d2d78ddce803/52d29996-8b23-49f7-ad16-250734dd0411/MD-en-20221228-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt=""/>
                <div className='absolute bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
                <div className='fixed w-full px-4 py-24 z-50 h-screen'>
                    <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                        <div className='max-w-[320px] mx-auto py-16'>
                            <h1 className='text-3xl font-bold'>Sign Up</h1>
                            <form className='flex w-full py-4 flex-col ' onSubmit={handleSubmit}>
                                <input onChange={(e) => setEmail(e.target.value)} type="email" className={style.input}
                                       placeholder='Email' autoComplete='email'/>
                                <input onChange={(e) => setPassword(e.target.value)} type="password"
                                       className={style.input} placeholder='Password' autoComplete='current-password'/>
                                <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sing Up</button>
                                <div className='flex items-center justify-between text-sm'>
                                    <p>
                                        <input className='mr-2' type="checkbox"/>
                                        Remember me
                                    </p>
                                    <p>Need Help?</p>
                                </div>
                                <p className='py-8'><span
                                    className='text-gray-400 pr-2'>Already subscribed to Netflix? </span><Link
                                    to='signIn'>Sign in</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignUp;