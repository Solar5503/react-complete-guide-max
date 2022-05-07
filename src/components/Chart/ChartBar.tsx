import styles from './ChartBar.module.scss';

interface IProps {
  value: number;
  maxValue: number;
  label: string;
}

const ChartBar = ({ value, maxValue, label }: IProps) => {
  let barFillHeight: string = '0%';
  if (maxValue > 0) barFillHeight = Math.round((value / maxValue) * 100) + '%';
  return (
    <div className={styles.chartBar}>
      <div className={styles.chartBar__inner}>
        <div
          className={styles.chartBar__fill}
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className={styles.chartBar__label}>{label}</div>
    </div>
  );
};

export default ChartBar;
