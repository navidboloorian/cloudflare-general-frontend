import {
    Chart,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import styles from "../css/DataChart.module.css";

Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

Chart.defaults.color = "white";
Chart.defaults.borderColor = "white";

export const DataChart = ({dataObj, chartSpecs}) => {
    if(dataObj.data) {
        const options = {
            color: "white",
            maintainAspectRatio: false,
            responsive: true,
            plugins: {
                legend: {
                    position: "top"
                },
                title: {
                    display: true,
                    text: chartSpecs.title,
                    color: "white",
                }
            }
        }
    
        const labels = chartSpecs.xAxisLabels;
        const data = {
            labels,
            datasets: chartSpecs.datasets,
        }
    
        return <Line className={styles.chart} options={options} data={data} />;
    }
    
    return <></>
}