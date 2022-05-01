import ExpenseItem from './ExpenseItem';
import styles from './Expense.module.scss';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

interface IExpenses {
  id: string;
  title: string;
  amount: number;
  date: Date;
}
function Expense({ expenses }: any) {
  const [choseYear, setСhoseYear] = useState<number>(2021);
  const filterYearHandler = (selectedYear: number) => {
    setСhoseYear(selectedYear);
  };
  return (
    <Card className={styles.expenses}>
      <ExpensesFilter selected={choseYear} onChangeYear={filterYearHandler} />
      {expenses.map((item: IExpenses) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          date={item.date}
          amount={item.amount}
        />
      ))}
    </Card>
  );
}

export default Expense;
