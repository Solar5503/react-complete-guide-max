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
  const [choseYear, setСhoseYear] = useState<number>(0);

  const filterYearHandler = (selectedYear: number) => {
    setСhoseYear(selectedYear);
  };

  const filteredExpenses = expenses.filter(
    (item: IExpenses) => item.date.getFullYear() === choseYear
  );

  const isShowAll = choseYear !== 0 ? filteredExpenses : expenses;

  let expensesContent: JSX.Element = (
    <p style={{ color: 'white', textAlign: 'center' }}>No expenses found</p>
  );
  if (isShowAll.length > 0) {
    expensesContent = isShowAll.map((item: IExpenses) => (
      <ExpenseItem
        key={item.id}
        title={item.title}
        date={item.date}
        amount={item.amount}
      />
    ));
  }

  return (
    <Card className={styles.expenses}>
      <ExpensesFilter selected={choseYear} onChangeYear={filterYearHandler} />
      {expensesContent}
    </Card>
  );
}

export default Expense;
