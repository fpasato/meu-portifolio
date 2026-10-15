import styles from "./styles.module.css";
import { Info } from "./components/info";
import { Summary } from "./components/summary";

export function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.content}>
        <Info />
        <Summary />
      </div>
    </div>
  );
}