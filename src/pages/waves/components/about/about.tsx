

import { Resources } from "../resources";
import { Techs } from "../techs";
import { Apis } from "../apis";

import styles from "./styles.module.css";

export function About() {
  return (
    <section className={styles.aboutContainer}>
      <div className={styles.aboutContent}>
        <div className={styles.aboutLeft}>
          <h2>Sobre o projeto</h2>
          <p>
            O Waves foi desenvolvido com o objetivo de reunir, em um único
            aplicativo, recursos que normalmente exigem vários programas
            diferentes. Além de reproduzir músicas e vídeos locais, o sistema
            oferece rádios online, downloads de mídia, gerenciamento de
            bibliotecas e uma experiência visual moderna, priorizando
            desempenho, organização e facilidade de uso.
          </p>
        </div>

        <div className={styles.aboutRight}>
          <h2>Principais Recursos</h2>
          <Resources />
        </div>
      </div>

      <div className={styles.techsContainer}>
        <h3>Tecnologias</h3>
        <Techs />
        <h3>APIs</h3>
        <Apis />
      </div>
    </section>
  );
}
