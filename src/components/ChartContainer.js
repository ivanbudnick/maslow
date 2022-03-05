import React from 'react'
import {Pie} from "react-chartjs-2"
import { faMoneyBill, faMoneyBillWave, faChartLine, faRecordVinyl } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Chart,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';


Chart.register(
  CategoryScale,
  ArcElement,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function ChartContainer({sliders}) {
  let data = {
    labels:[],
    datasets: [{
      data: [],
      backgroundColor: ["#5AD0A2", "#327C62", "#4BB089", "#755AD0"],
      hoverOffset: 2,      
    }]
  }
  let options = {
    tooltips: {
      mode: 'index',
      intersect: false
   },
   plugins: {
     legend: {
       display: false,
     }
   }
  }

  for(let slider of sliders){
    if(slider.activeValue === null)
      data.datasets[0].data[slider.id-1] = slider.initialValue
    else
      data.datasets[0].data[slider.id-1] = slider.activeValue
    data.labels[slider.id-1] = slider.title;
  }

  return (
    <div className='card flex-initial w-[40rem] self-baseline'>
        <h1 className='text-4xl'>Your compensation</h1>
        <p>A graphical representation of your upcoming benefits</p>
      <div className='mx-auto my-4 w-96 tablet:w-64'>
        <Pie data={data} options={options}/>
      </div>
      <div className='text-sm text-text-labels flex justify-around my-6'>
        <span><FontAwesomeIcon className='mx-2' icon={faMoneyBill} />Cash</span>
        <span><FontAwesomeIcon className='mx-2' icon={faMoneyBillWave} />Bonus</span>
        <span><FontAwesomeIcon className='mx-2' icon={faChartLine} />Stack Options</span>
        <span><FontAwesomeIcon className='mx-2' icon={faRecordVinyl} />Maslow Points</span>
      </div>
    </div>
    
  )
}
