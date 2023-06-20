import React from 'react';
import bgImage from "../assets/bg_main.png";
import Location from '../ components/Location'
import Candidate from "../ components/Candidate";
import {Link, useNavigate} from "react-router-dom";

function Candidates(props) {

    const bgImage = require('../assets/bg_main.png')
    return (
        <div className={'bg-[#ccc] w-full bg-repeat-y pt-[100px] min-h-screen'} style={{backgroundImage: `url(${bgImage})`}}>
            <Location location={"Chisinau"}/>
            <Link to={`/candidate/ion`}><Candidate name={"Ion Calagureanu"} points={943} location={"Chisinau"} image={"https://ialoveni.md/wp-content/uploads/2016/03/primar-3.jpg"} pos={1}/></Link>
            <Link to={`/candidate/vlad`}><Candidate name={"Ion Calagureanu"} points={943} location={"Chisinau"} image={"https://ialoveni.md/wp-content/uploads/2016/03/primar-3.jpg"} pos={1}/></Link>
            <Link to={`/candidate/igoras`}><Candidate name={"Ion Calagureanu"} points={943} location={"Chisinau"} image={"https://ialoveni.md/wp-content/uploads/2016/03/primar-3.jpg"} pos={1}/></Link>
        </div>
    );
}

export default Candidates;