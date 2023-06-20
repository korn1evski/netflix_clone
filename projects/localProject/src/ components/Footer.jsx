import React from 'react';
import {MdFeed} from 'react-icons/md'
import {CgProfile} from 'react-icons/cg'

function Footer(props) {
    return (
        <div className={"bg-white border-t border-solid border-gray-300 h-[55px] w-full fixed bottom-0 flex justify-around items-center"}>
            <MdFeed size={30}/>
            <div className={"w-[30px] h-[30px] rounded-full bg-black shadow-xl"}></div>
            <CgProfile size={30}/>
        </div>
    );
}

export default Footer;