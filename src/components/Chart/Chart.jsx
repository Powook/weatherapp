import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables, scales } from 'chart.js';
Chart.register(...registerables);


export const BarChart = (props) => {

  const arrOfTemp = props.temp.filter((item, index)=>index%3==0? item : null).map(item=>(item.main.temp/57).toFixed(2))
  const arrOfTLabel = props.temp.filter((item, index)=>index%3==0? item : null).map(item=>item.dt_txt.split(' ')[1].slice(0,5))

  const lineChartData = {
    labels: arrOfTLabel,
    datasets: [
      {
        label:'',
        data: arrOfTemp,
        borderColor: 'rgba(238, 255, 0, .8)',
        fill: false,
        lineTension: 0.5,
        borderWidth:2,

      },
    ],
  };

  const lineChartOptions ={
    responsive: true,
    plugins: {
      legend: {
        display:false
      },
    },
    scales: {
      x:{
        ticks: {
          color: 'rgb(223, 223, 223)',
          maxRotation:0
        },
        grid: {
          color: 'rgba(223, 223, 223, 0.3)',
        },
      },
      y: {
        ticks: {
          color: 'rgb(223, 223, 223)',
          callback: function(value, index, ticks) {
            return value + ' °C'
          }
        },
        grid: {
          color: 'rgba(223, 223, 223, 0.3)',
        }
      },
    }
  }

  return (
    <Line
      type="line"
      width={160}
      height={60}
      data={lineChartData}
      options = {lineChartOptions}
    />
  );
}


