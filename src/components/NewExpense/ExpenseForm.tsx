import { useState } from 'react';
import styles from './ExpenseForm.module.scss';

const ExpenseForm = () => {
  const [userInput, setUserInput] = useState({
    title: '',
    amount: '',
    date: new Date(),
  });

  const titleChangeHandler = (e: any) => {
    setUserInput((prevState) => {
      return { ...prevState, title: e.target.value };
    });
  };
  const amountChangeHandler = (e: any) => {
    // setUserInput({ ...userInput, enteredAmount: e.target.value });
    setUserInput((prevState) => {
      return { ...prevState, amount: e.target.value };
    });
  };
  const dateEnteredHandler = (e: any) => {
    // setUserInput({ ...userInput, enteredDate: e.target.value });
    setUserInput((prevState) => {
      return { ...prevState, date: new Date(e.target.value) };
    });
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    console.log(userInput);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles.newExpense__controls}>
        <div className={styles.newExpense__control}>
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className={styles.newExpense__control}>
          <label>Amount</label>
          <input
            type="number"
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
