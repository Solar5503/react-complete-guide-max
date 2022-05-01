import React from 'react';
import styles from './ExpensesFilter.module.scss';
interface IFunc {
  (year: number): void;
}

interface IProps {
  onChangeYear: IFunc;
  selected: number;
}

const ExpensesFilter = ({ onChangeYear, selected }: IProps) => {
  const changeYearHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const year: number = +e.target.value;
    onChangeYear(year);
  };
  return (
    <div className={styles.expensesFilter}>
      <div className={styles.expensesFilter__control}>
        <label>Filter by year</label>
        <select value={selected} onChange={changeYearHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
