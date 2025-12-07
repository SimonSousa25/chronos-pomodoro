import styles from './Heading.module.css';

type HeadingProps = {
  children: React.ReactNode;
};

export function Heading({ children }: HeadingProps) {
  /** const classes = `${styles.heading} ${styles.cyan}`;
   * dá pra desestruturar classes css dessa forma tbm, ou utilizar tudo dentro de className */
  return <h1 className={styles.heading}>{children}</h1>;
}
