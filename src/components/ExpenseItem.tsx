import styles from './ExpenseItem.module.scss';
interface IProps {
  title: string;
  amount: number;
  date: Date;
}

function ExpenseItem({ date, title, amount }: IProps) {
  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = date.toLocaleString('en-US', { year: '2-digit' });
  const year = date.getFullYear();
  return (
    <div className={styles.expenseItem}>
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className={styles.expenseItem__description}>
        <h2>{title}</h2>
        <div className={styles.expenseItem__price}>${amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
