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
        borderColor: '#FFFFFF',
        fill: false,
        lineTension: 0.5,
        borderWidth:2,
      },
    ],
  };

  return (
    <Line
      type="line"
      width={160}
      height={60}
      data={lineChartData}
    />
  );
}


