import styles from "./styles.module.css";

import { BsInfoCircleFill } from "react-icons/bs";
import { Resources } from "../resources";
import { Techs } from "../techs";
import { Album } from "../album";
import { RiLightbulbAiLine } from "react-icons/ri";

const cards = [
  {
    icon: BsInfoCircleFill,
    title: "Sobre o Projeto",
    description:
      "O Lumo Digital é uma aplicação web que simula o funcionamento de um banco digital, oferecendo funcionalidades como gerenciamento de contas, transferências, PIX, empréstimos e investimentos. O projeto foi desenvolvido para colocar em prática conceitos de desenvolvimento web, autenticação de usuários, banco de dados e regras de negócio.",
    style: "infoAbout",
  },
];

export function About() {
  return (
    <div className={styles.about}>
      <section className={styles.infoSection}>
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div key={card.title} className={styles[card.style]}>
              <div className={styles.infoTitle}>
                <Icon />
                <h2>{card.title}</h2>
              </div>
              <p>{card.description}</p>
            </div>
          );
        })}
        <Resources />
      </section>

      <Techs />

      <div className={styles.disclaimerSection}>
        <div className={styles.disclaimerTitle}>
          <RiLightbulbAiLine />
          <h2>Disclaimer</h2>
        </div>
        <p>
          Este foi meu primeiro projeto desenvolvido com Flask. O objetivo era
          aprender o framework e criar uma aplicação completa.
          <br />
          O projeto está totalmente funcional, mas boa parte da lógica ficou
          concentrada nas rotas.
          <br />
          Optei por manter dessa forma para mostrar minha evolução e o processo
          de aprendizado ao longo do desenvolvimento.
        </p>
      </div>

      <Album />
    </div>
  );
}
