import { useRef } from "react";
import styles from "./styles.module.css";
import { Background } from "./components/background/index.tsx";
import { Info } from "./components/info";
import { Summary } from "./components/summary";

export function Home() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref} className={styles.homeContainer}>
      <Background targetRef={ref} />
      <div className={styles.content}>
        <Info />
        <Summary />
      </div>
    </div>
  );
}