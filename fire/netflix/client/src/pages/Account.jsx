import React from 'react';
import SavedMovies from "../ components/SavedMovies";

function Account(props) {
    return (
        <>
            <div className='w-full text-white'>
                <img
                    className='w-full h-[400px] object-cover'
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/84526d58-475e-4e6f-9c81-d2d78ddce803/52d29996-8b23-49f7-ad16-250734dd0411/MD-en-20221228-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt=""/>
                <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'>
                    <div className='absolute top-[20%] p-4 md:p-8'>
                        <h1 className='text-3xl md:text-5xl font-bold'>My shows</h1>
                    </div>
                </div>
            </div>
            <SavedMovies/>
        </>
    );
}

export default Account;