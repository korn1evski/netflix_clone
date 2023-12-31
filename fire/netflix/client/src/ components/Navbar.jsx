import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {UserAuth} from "../context/AuthContext";

function Navbar(props) {
    const {user, logOut} = UserAuth()
    const navigate = useNavigate()

    const handleLogout = async () => {
        try{
            await logOut()
            navigate('/')
        } catch (e){
            console.log(e)
        }
    }

    return (
        <div className='flex items-center justify-between p-4 z-[100] absolute w-full'>
            <Link to='/'>
                <h1 className='text-red-400 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
            </Link>
            {
                user?.email ?  <div>
                    <Link to='/account'>
                        <button className='text-white pr-4'>Account</button>
                    </Link>
                    <Link to='signUp'>
                        <button onClick={handleLogout} className='bg-red-600 px-6 py-4 rounded cursor-pointer text-white'>Sign Out</button>
                    </Link>
                </div>
                    :
                    <div>
                        <Link to='/signIn'>
                            <button className='text-white pr-4'>Sign In</button>
                        </Link>
                        <Link to='signUp'>
                            <button className='bg-red-600 px-6 py-4 rounded cursor-pointer text-white'>Sign Up</button>
                        </Link>
                    </div>
            }
        </div>
    );
}

export default Navbar;