import styles from './Card.module.scss';

const Card = ({ children, className }: any) => {
  const classes = `${styles.card} ` + className;
  return <div className={classes}>{children}</div>;
};
export default Card;
