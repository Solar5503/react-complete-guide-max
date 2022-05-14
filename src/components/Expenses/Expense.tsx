import React, { useState } from 'react';
import { IExpense } from '../../App';
import Card from '../UI/Card';
import styles from './Expense.module.scss';
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

export interface IExpenses {
  expenses: IExpense[];
}

const Expense = ({ expenses }: IExpenses) => {
  const [choseYear, setСhoseYear] = useState<number>(0);

  const filterYearHandler = (selectedYear: number) => {
    setСhoseYear(selectedYear);
  };

  const filteredExpenses = expenses.filter(
    (item) => item.date.getFullYear() === choseYear
  );

  const isShowAll = choseYear !== 0 ? filteredExpenses : expenses;

  return (
    <Card className={styles.expenses}>
      <ExpensesFilter selected={choseYear} onChangeYear={filterYearHandler} />
      <ExpensesChart expenses={isShowAll} />
      <ExpensesList expenses={isShowAll} />
    </Card>
  );
};

export default Expense;
