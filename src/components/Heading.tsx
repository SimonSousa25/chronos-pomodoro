import styles from './Heading.module.css';

export function Heading() {
  /** const classes = `${styles.heading} ${styles.cyan}`;
   * dá pra desestruturar classes css dessa forma tbm, ou utilizar tudo dentro de className */
  return <h1 className={styles.heading}>Olá mundo!</h1>;
}
