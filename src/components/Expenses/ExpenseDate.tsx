import styles from './ExpenseDate.module.scss';
interface IProps {
  date: Date;
}

function ExpenseDate({ date }: IProps) {
  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = date.toLocaleString('en-US', { day: '2-digit' });
  const year = date.getFullYear();

  return (
    <div className={styles.expenseDate}>
      <div className={styles.expenseDate__month}>{month}</div>
      <div className={styles.expenseDate__year}>{year}</div>
      <div className={styles.expenseDate__day}>{day}</div>
    </div>
  );
}

export default ExpenseDate;
