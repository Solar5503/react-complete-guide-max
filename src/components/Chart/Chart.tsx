import { IChart } from '../Expenses/ExpensesChart';
import styles from './Chart.module.scss';
import ChartBar from './ChartBar';

interface ICharts {
  dataPoints: IChart[];
}

const Chart = ({ dataPoints }: ICharts) => {
  const dataPointValues: number[] = dataPoints.map(
    (dataPoint) => dataPoint.value
  );
  const totalMax: number = Math.max(...dataPointValues);
  return (
    <div className={styles.chart}>
      {dataPoints.map((dataPoint) => (
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
