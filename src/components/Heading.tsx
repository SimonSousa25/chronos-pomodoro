import styles from './Heading.module.css';

export function Heading(props) {
  /** const classes = `${styles.heading} ${styles.cyan}`;
   * dá pra desestruturar classes css dessa forma tbm,
   * ou utilizar tudo dentro de className */
  console.log(props);
  return <h1 className={styles.heading}>{props.children}</h1>;
}
