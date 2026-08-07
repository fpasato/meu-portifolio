import styles from "./styles.module.css";
import pythonIcon from "../../../../assets/icons/python.png";
import flaskIcon from "../../../../assets/icons/flask.png";
import apschedulerIcon from "../../../../assets/icons/apscheduler.png";
import werkzeugIcon from "../../../../assets/icons/werkzeug.png";
import sqliteIcon from "../../../../assets/waves/techs/sqlite.png";

import htmlIcon from "../../../../assets/icons/html.png";
import cssIcon from "../../../../assets/icons/css.png";
import jsIcon from "../../../../assets/icons/js.png";
import jinja2Icon from "../../../../assets/icons/jinja2.png";
import githubIcon from "../../../../assets/icons/git.png";

interface TechsProps {
  icon: string;
  title: string;
  href?: string;
}

const backEndTechs: TechsProps[] = [
  {
    icon: pythonIcon,
    title: "Python",
    href: "https://www.python.org/",
  },
  {
    icon: flaskIcon,
    title: "Flask",
    href: "https://flask.palletsprojects.com/",
  },
  {
    icon: sqliteIcon,
    title: "SQLite",
    href: "https://www.sqlite.org/index.html",
  },
  {
    icon: apschedulerIcon,
    title: "APScheduler",
    href: "https://apscheduler.readthedocs.io/",
  },
  {
    icon: werkzeugIcon,
    title: "Werkzeug",
    href: "https://werkzeug.palletsprojects.com/",
  },
];

const frontEndTechs: TechsProps[] = [
  {
    icon: htmlIcon,
    title: "HTML",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    icon: cssIcon,
    title: "CSS",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    icon: jsIcon,
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    icon: jinja2Icon,
    title: "Jinja2",
    href: "https://jinja.palletsprojects.com/",
  },
];

const otherTechs: TechsProps[] = [
  {
    icon: githubIcon,
    title: "Git",
    href: "https://git-scm.com/",
  },
];

export function Techs() {
  return (
    <div className={styles.techs}>
      <div className={styles.header}>
        <h2>Tecnologias utilizadas</h2>
      </div>
      <div className={styles.techsContainer}>
        <div className={styles.techGroup}>
          <h4>Back-end</h4>
          <div className={styles.techList}>
            {backEndTechs.map((tech, index) => (
              <a key={index} href={tech.href || "#"} target="_blank" rel="noopener noreferrer" className={styles.techItem}>
                <img src={tech.icon} alt={tech.title} />
                <h3>{tech.title}</h3>
              </a>
            ))}
          </div>
        </div>

        <div className={styles.techGroup}>
          <h4>Front-end</h4>
          <div className={styles.techList}>
            {frontEndTechs.map((tech, index) => (
              <a key={index} href={tech.href || "#"} target="_blank" rel="noopener noreferrer" className={styles.techItem}>
                <img src={tech.icon} alt={tech.title} />
                <h3>{tech.title}</h3>
              </a>
            ))}
          </div>
        </div>

        <div className={styles.techGroup}>
          <h4>Outros</h4>
          <div className={styles.techList}>
            {otherTechs.map((tech, index) => (
              <a key={index} href={tech.href || "#"} target="_blank" rel="noopener noreferrer" className={styles.techItem}>
                <img src={tech.icon} alt={tech.title} />
                <h3>{tech.title}</h3>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
