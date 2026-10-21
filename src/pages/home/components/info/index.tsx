// Info.tsx
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

interface Tech {
  icon: string;
  label: string;
  group: string;
}

/*
 * Escalável: adicione/remova itens livremente.
 * • grupos novos aparecem automaticamente no fim
 * • grupos vazios desaparecem
 * • o contador ("X tecnologias") recalcula sozinho
 */
const technologies: Tech[] = [
  { icon: htmlIcon, label: "HTML", group: "Frontend" },
  { icon: cssIcon, label: "CSS", group: "Frontend" },
  { icon: jsIcon, label: "JavaScript", group: "Frontend" },
  { icon: tsIcon, label: "TypeScript", group: "Frontend" },
  { icon: reactIcon, label: "React", group: "Frontend" },
  { icon: nodeIcon, label: "Node.js", group: "Backend" },
  { icon: pythonIcon, label: "Python", group: "Backend" },
  { icon: sqliteIcon, label: "SQLite", group: "Data" },
  { icon: postgresIcon, label: "PostgreSQL", group: "Data" },
  { icon: supabaseIcon, label: "Supabase", group: "Data" },
  { icon: electronIcon, label: "Electron", group: "Desktop" },
  { icon: gitIcon, label: "Git", group: "Tools" },
];

/* ordem preferida; grupos desconhecidos entram no fim */
const GROUP_ORDER = ["Frontend", "Backend", "Data", "Desktop", "Tools"];

function groupTechnologies(techs: Tech[]) {
  const map = new Map<string, Tech[]>();
  for (const t of techs) {
    if (!map.has(t.group)) map.set(t.group, []);
    map.get(t.group)!.push(t);
  }
  const known = GROUP_ORDER.filter((g) => map.has(g));
  const rest = [...map.keys()].filter((g) => !GROUP_ORDER.includes(g));
  return [...known, ...rest].map((g) => ({ label: g, items: map.get(g)! }));
}

export function Info() {
  const groups = groupTechnologies(technologies);

  return (
    <section className={styles.section}>
      {/* ================ HERO ================ */}
      <div className={styles.hero}>
        <div className={styles.avatarCol}>
          <div className={styles.avatarWrap}>
            <img src={avatar} alt="Avatar de Fernando" className={styles.avatar} />
          </div>
        </div>

        <div className={styles.textCol}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            Perfil
          </span>

          <h1 className={styles.name}>
            Fernando<span className={styles.nameMark}>.</span>
          </h1>

          <p className={styles.role}>
          <span className={styles.sep}></span>Web
            <span className={styles.sep}>·</span>Desktop
            <span className={styles.sep}>·</span>Mobile
          </p>

          <p className={styles.bio}>
            Estudante de Técnico em Informática pelo SENAC. Desenvolvo aplicações web e desktop utilizando <strong>React</strong>, <strong>TypeScript</strong>, <strong>Node.js</strong> e bancos de dados relacionais, com foco em aplicações completas e funcionais.
          </p>
        </div>
      </div>

      {/* ================ STACK ================ */}
      <div className={styles.stack}>
        <header className={styles.stackHead}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            Stack
          </span>
          <span className={styles.stackCount}>{technologies.length} tecnologias</span>
        </header>

        <div className={styles.stackGroups}>
          {groups.map((g) => (
            <div key={g.label} className={styles.group}>
              <span className={styles.groupLabel}>{g.label}</span>
              <div className={styles.groupItems}>
                {g.items.map((tech) => (
                  <span key={tech.label} className={styles.tech}>
                    <img src={tech.icon} alt="" className={styles.techIcon} />
                    <span>{tech.label}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}