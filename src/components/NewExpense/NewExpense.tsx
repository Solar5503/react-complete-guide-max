import ExpenseForm from './ExpenseForm';
import styles from './NewExpense.module.scss';

const NewExpense = () => {
  return (
    <div className={styles.newExpense}>
      <ExpenseForm />
    </div>
  );
};

export default NewExpense;
