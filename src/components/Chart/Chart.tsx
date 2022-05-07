import styles from './Chart.module.scss';
import ChartBar from './ChartBar';
interface IChart {
  label: string;
  value: number;
}

const Chart = ({ dataPoints }: any) => {
  const dataPointValues: number[] = dataPoints.map(
    (dataPoint: IChart) => dataPoint.value
  );
  const totalMax: number = Math.max(...dataPointValues);
  return (
    <div className={styles.chart}>
      {dataPoints.map((dataPoint: IChart) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
