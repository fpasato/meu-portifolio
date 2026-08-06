import styles from "./styles.module.css";

interface HeaderProps {
  logo?: React.ReactNode;
  title: string;
}


export function Header({ logo, title }: HeaderProps) {
  return (
    <div className={styles.header}>
      {logo && <div className={styles.logo}>{logo}</div>}
      <h1>{title}</h1>
    </div>
  )
}