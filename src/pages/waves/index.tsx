import { Link } from "react-router-dom";
import styles from "./styles.module.css";
// import { Header } from "../../components/Header";
import { About } from "./components/about/about";
import { Album } from "./components/album";

import { FaExternalLinkAlt } from "react-icons/fa";

import logo from "../../assets/waves/waves-logo.webp";
import waves1 from "../../assets/waves/waves-1.png";
import githubIcon from "../../assets/waves/git.png";

export function WavesProject() {
  return (
    <div className={styles.wavesProject}>
      <section className={styles.section}>
        <div className={styles.resumeContainer}>
          <Link to="/" className={styles.backButton}>
            ← Voltar para Projetos
          </Link>

          <img src={logo} alt="Logo Waves Desktop" />
          <h1>
            <span style={{ color: "var(--primary)" }}>Waves</span> Desktop
          </h1>
          <h3>Player de mídia completo para Windows</h3>
          <p>
            Waves Desktop é um player de mídia all-in-one desenvolvido com
            Electron e React. Reproduza suas músicas locais, ouça rádios do
            mundo inteiro e faça downloads de áudio e video diretamente para sua
            biblioteca. Tudo isso com uma experiência visual imersiva através de
            visualizações 3D que reagem à música.
          </p>

          <div className={styles.actions}>
            <a
              className={styles.githubButton}
              href="https://github.com/fpasato/Waves-App-Electron"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver no GitHub
            </a>
            <a
              className={styles.downloadButton}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.preventDefault()}
            >
              Download (Windows)
            </a>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <img src={waves1} alt="Screenshot do Waves Desktop" />
        </div>
      </section>
      <About />
      <Album />

      <div className={styles.githubContainer}>
        <img src={githubIcon} alt="" className={styles.githubIcon} />
        <div className={styles.githubInfo}>
          <h4> Gostou do projeto?</h4>
          <p>Veja o código fonte no GitHub</p>
        </div>
        <a
          href="https://github.com/fpasato/Waves-App-Electron"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.githubLink}
        >
          Ver projeto no github <FaExternalLinkAlt />
        </a>
      </div>
    </div>
  );
}
