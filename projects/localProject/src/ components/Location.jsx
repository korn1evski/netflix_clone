import React, {useEffect, useState} from 'react';
import {BsGeoAlt} from "react-icons/bs";

function Location({location}) {
    const [list, setList] = useState(new Set(["Edinet", "Balti", "Creuleni", "Cahul", "Creuleni", "Chisinau", "Breceni"]))
    const [selected, setSelected] = useState(location)
    const [shown, setShown] = useState(false)

    useEffect(() => {
        list.delete(location)
    },[])

    const handleClick = () => {
        setShown(!shown)
    }

    const handleChoice = (el) => {
        list.delete(el)
        list.add(selected)
        setSelected(el)
        setList(list)
    }


    function retElements() {
        const arr = [...list];
        return arr.map((city) => (
            <div onClick={() => handleChoice(city)} className={"w-full flex justify-center items-center h-[45px] bg-white border-b border-solid border-gray-300"}>
                <p className={"text-xl"}>{city}</p>
            </div>
        ));
    }
    return (
        <div className={"flex justify-center relative"} onClick={handleClick}>
            <div className={"flex items-center w-full h-[70px] bg-white justify-center mb-[50px]"}>
                <BsGeoAlt size={20}/>
                <p className={"pl-[5px] text-2xl"}>{selected}</p>
            </div>
            <div className={shown ? "w-full top-20 absolute transition-all duration-2000 max-h-[180px] overflow-y-auto" : "hidden"}>
                {retElements()}
            </div>
        </div>
    );
}

export default Location;