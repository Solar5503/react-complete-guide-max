import styles from './ExpensesList.module.scss';
import ExpenseItem from './ExpenseItem';
import { IExpenses } from './Expense';

const ExpensesList = ({ expenses }: IExpenses) => {
  if (expenses.length === 0)
    return <h2 className={styles.expensesList__fallback}>No expenses found</h2>;

  return (
    <ul className={styles.expensesList}>
      {expenses.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          date={item.date}
          amount={item.amount}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
