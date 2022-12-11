/**
 * Stores chart component used for rendering graphs.
 */

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

// declaring chart attributes that will be used
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

/**
 * Component that renders chart based on passed-in information.
 * 
 * @param dataObj is the data to be represented
 * @param chartSpecs are the styles/labels of teh chart 
 * @returns Graph if dataObj info is defined, fragment otherwise
 */
export const DataChart = ({dataObj, chartSpecs}) => {

    // ensure that data exists and is not undefined
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