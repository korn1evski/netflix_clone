import React from 'react';
import {IoIosArrowForward} from 'react-icons/io'

function Candidate({pos, name, location, image, points}) {
    return (
        <div className={"w-full bg-white rounded-2xl min-h-[90px] flex items-center justify-between px-4 mb-4"}>
            <p className={"text-2xl font-bold pr-2"}>#{pos}</p>
            <div className={"flex items-center justify-center"}>
            <div className={"rounded-full w-[50px] h-[50px] bg-cover bg-center mr-2"} style={{backgroundImage: `url(${image})`}}></div>
            <div className={"mr-8"}>
                <p className={"text-xl font-bold"}>{name}</p>
                <p className={"text-[14px] text-[#ccc]"}>{location}</p>
            </div>
            <p className={"font-bold text-xl mr-2"}>{points}</p>
            </div>
            <IoIosArrowForward size={30}/>
        </div>
    );
}

export default Candidate;