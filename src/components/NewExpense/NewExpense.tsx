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
  const saveExpenseDataHandler = (enteredExpenseData: IProps) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };
  return (
    <div className={styles.newExpense}>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
