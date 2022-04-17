import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import styles from './ExpenseItem.module.scss';
import { useState } from 'react';
interface IProps {
  title: string;
  amount: number;
  date: Date;
}

function ExpenseItem({ date, title, amount }: IProps) {
  const [caption, setCaption] = useState<string>(title);
  const clickHandler = () => {
    setCaption('Updated');
  };
  return (
    <Card className={styles.expenseItem}>
      <ExpenseDate date={date} />
      <div className={styles.expenseItem__description}>
        <h2>{caption}</h2>
        <div className={styles.expenseItem__price}>${amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
