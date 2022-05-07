import React, { useState } from 'react';
import Card from '../UI/Card';
import styles from './Expense.module.scss';
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

interface IExpense {
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
    (item: IExpense) => item.date.getFullYear() === choseYear
  );

  const isShowAll = choseYear !== 0 ? filteredExpenses : expenses;

  return (
    <Card className={styles.expenses}>
      <ExpensesFilter selected={choseYear} onChangeYear={filterYearHandler} />
      <ExpensesChart expenses={isShowAll} />
      <ExpensesList expenses={isShowAll} />
    </Card>
  );
}

export default Expense;
