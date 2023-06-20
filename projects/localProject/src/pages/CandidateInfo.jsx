import {React, useEffect, useState} from 'react';
import ReactApexChart from 'react-apexcharts'
import Post from "../ components/Post";
import { useParams } from "react-router-dom";

function CandidateInfo(props) {
    const backImage = "https://moldova.europalibera.org/Content/responsive/RFE/ro-MD/img/top_logo_news.png"
    const image = "https://ialoveni.md/wp-content/uploads/2016/03/primar-3.jpg"
    const [selected, setSelected] = useState(1);
    const {name} = useParams()

    const [chartOptions, setChartOptions] = useState({
        chart: {
            id: 'bar-chart',
            toolbar: {
                show: false
            }
        },
        xaxis: {
            categories: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar']
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        colors: ['#5A67D8']
    })

    const [chartData, setChartData] = useState({
        series: [{
            name: 'Activity',
            data: [20, 30, 25, 35, 45, 50]
        }]
    })


    return (
        <>
            <div className={"bg-[#ccc]"}></div>
            <div className={"bg-cover bg-center w-full h-[300px] relative"} style={{backgroundImage: `url(${backImage})`}}>
                <div className={"w-[90%] left-[5%] h-[170px] rounded-xl bg-white shadow-xl absolute pt-[100px] top-[200px] flex flex-col justify-center align-center"}>
                    <p className={"text-center font-bold text-xl"}>Ion Calagureanu</p>
                    <p className={"text-center"}>Chisinau</p>
                </div>
                <div className={"rounded-full absolute w-[150px] bg-cover bg-center h-[150px] left-[50%] translate-x-[-50%] top-[140px]"} style={{backgroundImage: `url(${image})`}}></div>
            </div>
           <div className={"w-full mt-[100px]"}>
               <p className={"text-2xl text-center font-bold"}>Election program</p>
               <p className={"px-2 text-base leading-7 text-gray-700 py-2"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop</p>
           </div>
            <p className={"text-2xl text-center font-bold"}>Activity in last 6 months</p>
            <div id="chart">
                <ReactApexChart options={chartOptions} series={chartData.series} type="bar" height={350} />
            </div>
            <div className={"px-2 flex justify-around py-4"}>
                <div onClick={() => {setSelected(0)}} className={selected == 0 ? "font-bold text-[#0046AE] text-2xl py-2 px-4 rounded-full bg-gray-100" : "font-bold text-gray-400 text-2xl py-2 px-4" }>In process</div>
                <div onClick={() => {setSelected(1)} } className={selected == 1 ? "font-bold text-[#0046AE] text-2xl py-2 px-4 rounded-full bg-gray-100" : "font-bold text-gray-400 text-2xl py-2 px-4" }>Done</div>
            </div>
            <Post/>
            <Post/>
            <Post/>
        </>
    );
}

export default CandidateInfo;