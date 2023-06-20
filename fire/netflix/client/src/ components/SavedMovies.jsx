import React, {useEffect, useState} from 'react';
import {MdChevronLeft, MdChevronRight} from "react-icons/md";
import {onSnapshot, doc, updateDoc} from 'firebase/firestore'
import {UserAuth} from "../context/AuthContext";
import {db} from "../firebase";
import {AiOutlineClose} from "react-icons/ai";

function SavedMovies(props) {
    const {user} = UserAuth()
    const [movies, setMovies] = useState([])


    const slider = document.getElementById('slider')
    const slideLeft = () => {
        slider.scrollLeft = slider.scrollLeft - 500
    }

    const slideRight = () => {
        slider.scrollLeft = slider.scrollLeft + 500
    }

    const movieReference = doc(db, 'users', `${user?.email}`)

    useEffect(()=> {
        onSnapshot(movieReference, (doc) => {
            setMovies(doc.data()?.favourites)
        })
    }, [user?.email])

    const deleteShow = async (deleteID) => {
        try{
            const res = movies.filter((item) => item.id !== deleteID)
            await updateDoc(movieReference, {
                favourites: res
            })
        } catch(error){
            console.log(error)
        }
    }

    return (
        <>
            <h2 className='text-white font-bold md:text-xl p-4'>My shows</h2>
            <div className='relative flex items-center group'>
                <MdChevronLeft onClick={slideLeft} size={40} className='left-2 bg-white rounded-full opacity-50 hover:opacity-100 cursor-pointer absolute z-10 hidden group-hover:block'/>
                <div id={`slider`} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                    {movies.map((item, id) => (
                        <div className='w-[160px] sm:w-[200px md: w-[200px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
                            <img className='w-full h-auto block ' src={`https://image.tmdb.org/t/p/w500/${item?.image}`}
                                 alt={item?.title}/>
                            <div
                                className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                                <p className='whitespace-normal text-xs md: text-sm font-bold flex justify-center items-center h-full text-center'>{item?.title}</p>
                                <p onClick={() => deleteShow(item?.id)} className='absolute text-gray-300 top-4 right-4'><AiOutlineClose size={20}/></p>
                            </div>
                        </div>
                    ))}
                </div>
                <MdChevronRight onClick={slideRight} size={40} className='bg-white rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 absolute right-2 hidden group-hover:block'/>
            </div>
        </>
    );
}

export default SavedMovies;