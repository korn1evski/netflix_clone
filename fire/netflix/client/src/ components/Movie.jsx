import React, {useEffect, useState} from 'react';
import {FaHeart, FaRegHeart} from "react-icons/fa";
import {arrayUnion, doc, updateDoc} from 'firebase/firestore'
import {UserAuth} from "../context/AuthContext";
import {db} from "../firebase";

function Movie({item}) {
    const {user,} = UserAuth()
    const [like, setLike] = useState(false)
    const [saved, setSaved] = useState(false)
    const userReference = doc(db, 'users', `${user?.email}`)

    const saveMovie = async () => {
            setLike(!like)
            setLike(true)
            await updateDoc(userReference, {
                favourites: arrayUnion(
                    {
                        id: item.id,
                        title: item.title,
                        image: item.backdrop_path
                    }
                )
            })
    }

    return (
        <div className='w-[160px] sm:w-[200px md: w-[200px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
            <img className='w-full h-auto block ' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                 alt={item.title}/>
            <div
                className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                <p className='whitespace-normal text-xs md: text-sm font-bold flex justify-center items-center h-full text-center'>{item?.title}</p>
                {user != null ?
                    <p onClick={saveMovie}>{like ? <FaHeart className='absolute top-4 left-4 text-gray-300'/> :
                        <FaRegHeart className='absolute top-4 left-4 text-gray-300'/>}</p> : null}
            </div>
        </div>
    );
}

export default Movie;