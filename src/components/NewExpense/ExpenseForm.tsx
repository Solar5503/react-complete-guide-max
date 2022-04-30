import { useState } from 'react';
import styles from './ExpenseForm.module.scss';

interface IInput {
  title: string;
  amount: number;
  date: Date;
}

interface IFunc {
  onSaveExpenseData: (expenseData: IInput) => void;
}

const ExpenseForm = ({ onSaveExpenseData }: IFunc) => {
  const [expenseData, setExpenseData] = useState<IInput>({
    title: '',
    amount: 0,
    date: new Date(),
  });

  const titleChangeHandler = (e: any) => {
    setExpenseData((prevState) => {
      return { ...prevState, title: e.target.value };
    });
  };
  const amountChangeHandler = (e: any) => {
    // setUserInput({ ...userInput, enteredAmount: e.target.value });
    setExpenseData((prevState) => {
      return { ...prevState, amount: +e.target.value };
    });
  };
  const dateEnteredHandler = (e: any) => {
    // setUserInput({ ...userInput, enteredDate: e.target.value });
    setExpenseData((prevState) => {
      return { ...prevState, date: new Date(e.target.value) };
    });
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    onSaveExpenseData(expenseData);
    setExpenseData({ title: '', amount: 0, date: new Date() });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles.newExpense__controls}>
        <div className={styles.newExpense__control}>
          <label>Title</label>
          <input
            type="text"
            value={expenseData.title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className={styles.newExpense__control}>
          <label>Amount</label>
          <input
            type="number"
            value={expenseData.amount}
            min={0.01}
            step={0.01}
            onChange={amountChangeHandler}
          />
        </div>
        <div className={styles.newExpense__control}>
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={expenseData.date.toLocaleDateString('en-CA')}
            onChange={dateEnteredHandler}
          />
        </div>
      </div>
      <div className={styles.newExpense__actions}>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
