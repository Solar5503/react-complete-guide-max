import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import styles from './NewExpense.module.scss';
interface IProps {
  title: string;
  amount: number;
  date: Date;
}

interface IExpense {
  id: string;
  title: string;
  amount: number;
  date: Date;
}
interface IFunc {
  onAddExpense: (expenseData: IExpense) => void;
}

const NewExpense = ({ onAddExpense }: IFunc) => {
  const [openForm, setOpenForm] = useState<boolean>(false);

  const saveExpenseDataHandler = (enteredExpenseData: IProps) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };

  return (
    <div className={styles.newExpense}>
      {openForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onShowForm={setOpenForm}
        />
      )}
      {!openForm && (
        <button onClick={() => setOpenForm(true)}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
