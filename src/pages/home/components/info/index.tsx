import styles from "./styles.module.css";

import htmlIcon from "../../../../assets/icons/html.png";
import cssIcon from "../../../../assets/icons/css.png";
import jsIcon from "../../../../assets/icons/js.png";
import tsIcon from "../../../../assets/icons/ts.png";
import reactIcon from "../../../../assets/icons/react.png";
import electronIcon from "../../../../assets/waves/techs/electron.png";
import nodeIcon from "../../../../assets/icons/node.png";
import pythonIcon from "../../../../assets/icons/python.png";
import sqliteIcon from "../../../../assets/waves/techs/sqlite.png";
import postgresIcon from "../../../../assets/icons/postgreesql.png";
import supabaseIcon from "../../../../assets/icons/supabase.png";
import gitIcon from "../../../../assets/icons/git.png";

const technologies = [
  { icon: htmlIcon, label: "HTML" },
  { icon: cssIcon, label: "CSS" },
  { icon: jsIcon, label: "JavaScript" },
  { icon: tsIcon, label: "TypeScript" },
  { icon: reactIcon, label: "React" },
  { icon: electronIcon, label: "Electron" },
  { icon: nodeIcon, label: "Node.js" },
  { icon: pythonIcon, label: "Python" },
  { icon: sqliteIcon, label: "SQLite" },
  { icon: postgresIcon, label: "PostgreSQL" },
  { icon: supabaseIcon, label: "Supabase" },
  { icon: gitIcon, label: "Git" },
];

export function Info() {
  return (
    <div className={styles.infoContainer}>
      <div className={styles.leftPanel}>
        <h2>Sobre mim</h2>
        <p>
          Estudante de Técnico em Informática pelo SENAC, com foco no
          desenvolvimento de aplicações web, desktop e mobile. Tenho
          experiência na criação de projetos utilizando React, Electron,
          Node.js e bancos de dados SQL, buscando desenvolver soluções
          completas, desde a interface até a integração com APIs e serviços.
        </p>

        <h3 className={styles.techTitle}>Tecnologias</h3>
        <div className={styles.techRow}>
          {technologies.map((tech) => (
            <img key={tech.label} src={tech.icon} alt={tech.label} title={tech.label} />
          ))}
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.rightPanel}>
        <div className={styles.block}>
          <h3>Formação</h3>
          <ul>
            <li>Técnico em Informática – SENAC (2025–2026)</li>
            <li>Ensino Médio Completo</li>
          </ul>
        </div>

        <div className={styles.block}>
          <h3>Habilidades</h3>
          <ul>
            <li>Desenvolvimento de aplicações Web com React</li>
            <li>Desenvolvimento de aplicações Desktop com Electron</li>
            <li>Desenvolvimento de aplicações Mobile com Capacitor</li>
            <li>Integração com APIs e serviços</li>
            <li>Modelagem e gerenciamento de bancos de dados SQLite e PostgreSQL</li>
            <li>Versionamento de código com Git</li>
          </ul>
        </div>
      </div>
    </div>
  );
}