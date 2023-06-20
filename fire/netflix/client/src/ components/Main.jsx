import React, {useEffect, useState} from 'react';
import requests from "../requests";
import axios from "axios";
import {UserAuth} from "../context/AuthContext";
import {doc, getDoc} from "firebase/firestore";
import {db} from "../firebase";

function Main(props) {
    const [movies, setMovies] = useState([])

    const movie = movies[Math.floor(Math.random() * movies.length)]

    const {user} = UserAuth()

    useEffect(() => {
        axios.get(requests.requestPopular).then((response) => {
            setMovies(response.data.results)
        })
    }, [])

    const truncateString = (string, num) => {
        if(string !== undefined)
            return string.slice(0, num) + '...'
        return string
    }

    return (
        <div className='w-full h-[550px] text-white'>
            <div className='absolute w-full h-[550px] bg-gradient-to-r from-black '></div>
            <img className='w-full h-full object-cover'
                 src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title}/>
            <div className='absolute w-full top-[20%] p-4 md:p-8'>
                <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
                <div className='my-4'>
                    <button className='border bg-gray-300 text-black py-2 px-5'>Play</button>
                    <button className='border text-white py-2 px-5 ml-4'>Watch later</button>
                </div>
                <p className='text-gray-400 text-sm'>Released: {movie?.release_date}</p>
                <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{truncateString(movie?.overview, 150)}</p>
            </div>
        </div>
    );
}

export default Main;