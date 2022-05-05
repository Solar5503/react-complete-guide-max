import styles from './ExpensesList.module.scss';
import ExpenseItem from './ExpenseItem';

interface IExpenses {
  id: string;
  title: string;
  amount: number;
  date: Date;
}

const ExpensesList = ({ expenses }: any) => {
  if (expenses.length === 0)
    return <h2 className={styles.expensesList__fallback}>No expenses found</h2>;

  return (
    <ul className={styles.expensesList}>
      {expenses.map((item: IExpenses) => (
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
