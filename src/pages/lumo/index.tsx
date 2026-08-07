import { Link } from "react-router-dom";
import styles from "./styles.module.css";

import lumoLogo from "../../assets/lumo/logo.png";
import lumoImage from "../../assets/lumo/lumoImage.png";
import { About } from "./components/about";
export function LumoProject() {
  return (
    <div className={styles.lumoProject}>
      <section className={styles.lumoProjectSection}>
        <div className={styles.lumoProjectInfo}>
          <Link to="/" className={styles.backButton}>
            ← Voltar para Projetos
          </Link>

          <img src={lumoLogo} alt="Logo SOS" className={styles.sosLogo} />
          <h2>
            <span style={{ color: "#9472FF" }}>Lumo</span> Digital
          </h2>
          <h4>Simulador de Banco Digital</h4>
          <p>
            Aplicação web desenvolvida em Python e Flask que simula o
            funcionamento de um banco digital. Realize transferências, pague com
            PIX, solicite empréstimos, invista em ativos simulados e acompanhe
            seu patrimônio com uma interface moderna e intuitiva.
          </p>

          <div className={styles.actions}>
            <a
              className={styles.githubButton}
              href="https://github.com/fpasato/teste-electron"
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
        <div className={styles.lumoProjectImage}>
          <img src={lumoImage} alt="Sistema SOS" />
        </div>
      </section>

      <About />
    </div>
  );
}
