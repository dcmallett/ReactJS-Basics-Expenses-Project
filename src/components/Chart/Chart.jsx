import './Chart.css';

import ChartBar from './ChartBar';

const Chart = (props) => {

    //we transform a datapoint obj to a number
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    //... pulling out all the array elements and add them as standalone arguments
    const totalMaximum = Math.max(...dataPointValues)

    return (
        <div className="chart">
        {props.dataPoints.map(dataPoint => (
            <ChartBar 
                key={dataPoint.label}
                value={dataPoint.value} 
                maxValue={totalMaximum} 
                label={dataPoint.label} />
        ))}
        </div>
    );
}


export default Chart;