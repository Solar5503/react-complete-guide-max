import Chart from '../Chart/Chart';
import { IExpenses } from './Expense';

export interface IChart {
  label: string;
  value: number;
}

const ExpensesChart = ({ expenses }: IExpenses) => {
  const chartDataPoints: IChart[] = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  for (const expense of expenses) {
    const expenseMonth: number = expense.date.getMonth(); // start at 0 (Jan = 0)
    chartDataPoints[expenseMonth].value += expense.amount;
  }
  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
