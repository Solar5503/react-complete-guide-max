import styles from './Card.module.scss';

function Card({ children, className }: any) {
  const classes = `${styles.card} ` + className;
  return <div className={classes}>{children}</div>;
}
export default Card;
