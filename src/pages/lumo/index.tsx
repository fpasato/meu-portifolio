import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import {
  FaRegUser, FaWallet, FaHistory,
  FaGithub, FaDownload, FaArrowLeft,
} from "react-icons/fa";
import { BiTransfer } from "react-icons/bi";
import { FaPix } from "react-icons/fa6";
import { IoCardSharp } from "react-icons/io5";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { BsGraphUpArrow, BsInfoCircleFill } from "react-icons/bs";
import { RiLightbulbAiLine } from "react-icons/ri";
import {
  SiPython, SiFlask, SiHtml5, SiCss, SiJavascript, SiSqlite,
} from "react-icons/si";

import { Album } from "../../components/album";
import { useEffect } from "react";
import styles from "./styles.module.css";

import lumoLogo from "../../assets/lumo/logo.png";
import lumoImage from "../../assets/lumo/lumoImage.png";
import lumo1 from "../../assets/lumo/lumo-1.png";
import lumo2 from "../../assets/lumo/lumo-2.png";
import lumo4 from "../../assets/lumo/lumo-4.png";
import lumo5 from "../../assets/lumo/lumo-5.png";
import lumo6 from "../../assets/lumo/lumo-6.png";
import lumo7 from "../../assets/lumo/lumo-7.png";
import lumo8 from "../../assets/lumo/lumo-8.png";
import lumo9 from "../../assets/lumo/lumo-9.png";
import lumo10 from "../../assets/lumo/lumo-10.png";
import lumo11 from "../../assets/lumo/lumo-11.png";
import lumo12 from "../../assets/lumo/lumo-12.png";

const ALBUM_IMAGES = [
  lumo1, lumo2, lumo4, lumo5, lumo6,
  lumo7, lumo8, lumo9, lumo10, lumo11, lumo12,
];

interface Item { icon: ReactNode; label: string; }

const FEATURES: Item[] = [
  { icon: <FaRegUser />,           label: "Cadastro e autenticação" },
  { icon: <BiTransfer />,          label: "Transferências" },
  { icon: <FaPix />,               label: "Sistema PIX" },
  { icon: <IoCardSharp />,         label: "Cartões de crédito e débito" },
  { icon: <LiaFileInvoiceSolid />, label: "Simulação de empréstimos" },
  { icon: <BsGraphUpArrow />,      label: "Simulação de investimentos" },
  { icon: <FaWallet />,            label: "Carteira de investimentos" },
  { icon: <FaHistory />,           label: "Histórico de operações" },
];

const TECHS: Item[] = [
  { icon: <SiPython />,     label: "Python" },
  { icon: <SiFlask />,      label: "Flask" },
  { icon: <SiHtml5 />,      label: "HTML" },
  { icon: <SiCss />,       label: "CSS" },
  { icon: <SiJavascript />, label: "JavaScript" },
  { icon: <SiSqlite />,     label: "SQLite" },
];

export function LumoProject() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);
  
  return (
    <div className={styles.page}>
      {/* ================= HERO ================= */}
      <section className={styles.hero}>
        <div className={styles.heroInfo}>
          <Link to="/" className={styles.back}>
            <FaArrowLeft /> Voltar para projetos
          </Link>

          <div className={styles.brand}>
            <img src={lumoLogo} alt="" className={styles.logo} />
            <h2 className={styles.title}>
              <span className={styles.accent}>Lumo</span> Digital
            </h2>
          </div>

          <p className={styles.subtitle}>Simulador de Banco Digital</p>

          <p className={styles.lead}>
            Aplicação web em Python e Flask que simula um banco digital completo.
            Transferências, PIX, empréstimos, investimentos e patrimônio — tudo
            em uma interface moderna e intuitiva.
          </p>

          <div className={styles.actions}>
            <a
              href="https://github.com/fpasato/Simulador-Banco"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
            >
              <FaGithub /> Ver no GitHub
            </a>
            <button type="button" className={styles.btnGhost} disabled>
              <FaDownload /> Download (Windows)
            </button>
          </div>
        </div>

        <div className={styles.heroImage}>
          <img src={lumoImage} alt="Interface do Lumo Digital" />
        </div>
      </section>

      {/* ================= SOBRE ================= */}
      <section className={styles.block}>
        <header className={styles.blockHead}>
          <BsInfoCircleFill />
          <h3>Sobre o Projeto</h3>
        </header>
        <p className={styles.blockText}>
          O Lumo Digital é uma aplicação web que simula o funcionamento de um
          banco digital — gerenciamento de contas, transferências, PIX,
          empréstimos e investimentos. Desenvolvido para colocar em prática
          conceitos de autenticação, banco de dados e regras de negócio.
        </p>
      </section>

      {/* ================= FUNCIONALIDADES ================= */}
      <section className={styles.block}>
        <header className={styles.blockHead}>
          <BsGraphUpArrow />
          <h3>Principais funcionalidades</h3>
        </header>
        <ul className={styles.featureGrid}>
          {FEATURES.map((f) => (
            <li key={f.label} className={styles.feature}>
              <span className={styles.featureIcon}>{f.icon}</span>
              <span>{f.label}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ================= TECNOLOGIAS ================= */}
      <section className={styles.block}>
        <header className={styles.blockHead}>
          <SiFlask />
          <h3>Tecnologias</h3>
        </header>
        <ul className={styles.techGrid}>
          {TECHS.map((t) => (
            <li key={t.label} className={styles.tech}>
              <span className={styles.techIcon}>{t.icon}</span>
              <span>{t.label}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ================= DISCLAIMER ================= */}
      <section className={`${styles.block} ${styles.disclaimer}`}>
        <header className={styles.blockHead}>
          <RiLightbulbAiLine />
          <h3>Disclaimer</h3>
        </header>
        <div className={styles.blockText}>
          <p>
            Este foi meu primeiro projeto com Flask. O objetivo era aprender o
            framework e criar uma aplicação completa.
          </p>
          <p>
            Está totalmente funcional, mas boa parte da lógica ficou concentrada
            nas rotas — optei por manter assim para mostrar o processo de
            aprendizado ao longo do desenvolvimento.
          </p>
        </div>
      </section>

      {/* ================= GALERIA ================= */}
      <Album images={ALBUM_IMAGES} title="Galeria de screenshots" visibleCount={5} />
    </div>
  );
}