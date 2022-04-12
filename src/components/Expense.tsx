import ExpenseItem from './ExpenseItem';
import styles from './Expense.module.scss';
import Card from './Card';

interface IExpenses {
  id: string;
  title: string;
  amount: number;
  date: Date;
}
function Expense({ expenses }: any) {
  return (
    <Card className={styles.expenses}>
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
