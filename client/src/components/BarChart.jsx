import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js'

import { Bar } from 'react-chartjs-2'


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

const BarChart = (props) => {
    // return <Bar data={myData} options={myOptions}/>
    return <Bar data={props.data} options={props.option}/>
}

export default BarChart