import styles from "./styles.module.css";

import avatar from "../../../../assets/perfil/image.png";

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
    <section className={styles.section}>
      <div className={styles.hero}>
        <div className={styles.avatarWrap}>
          <img src={avatar} alt="Meu avatar" className={styles.avatar} />
        </div>

        <div className={styles.text}>
          <span className={styles.eyebrow}>Portfólio</span>

          <h1 className={styles.name}>
            Olá, eu me chamo <span>Fernando</span>
          </h1>

          <p className={styles.role}>
            Full Stack <span className={styles.sep}>·</span> Web{" "}
            <span className={styles.sep}>·</span> Desktop{" "}
            <span className={styles.sep}>·</span> Mobile
          </p>

          <p className={styles.bio}>
            Estudante de Técnico em Informática pelo SENAC, apaixonado por
            construir aplicações completas — da interface ao banco de dados.
            Trabalho com <strong>React</strong>, <strong>Electron</strong>,{" "}
            <strong>Node.js</strong> e bancos relacionais, sempre buscando
            soluções práticas e bem estruturadas.
          </p>
        </div>
      </div>

      <div className={styles.stack}>
        <span className={styles.stackLabel}>Stack</span>

        <div className={styles.techRow}>
          {technologies.map((tech, i) => (
            <div
              key={tech.label}
              className={styles.techItem}
              style={{ animationDelay: `${0.3 + i * 0.04}s` }}
            >
              <div className={styles.techIcon}>
                <img src={tech.icon} alt={tech.label} />
              </div>
              <span className={styles.techName}>{tech.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}