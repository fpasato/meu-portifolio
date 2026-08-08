import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import sosLogo from "../../assets/sos/sos-logo.png";
import sosImage from "../../assets/sos/sos-system.png";

import { About } from "./components/about";

export function SosProject() {
  return (
    <div className={styles.sosProject}>
      <section className={styles.sosProjectSection}>
        <div className={styles.sosProjectInfo}>
          <Link to="/" className={styles.backButton}>
            ← Voltar para Projetos
          </Link>

          <img src={sosLogo} alt="Logo SOS" className={styles.sosLogo} />
          <h2>
            <span style={{ color: "#ff2626" }}>SOS</span> Project
          </h2>
          <h4>Sistema completo de gerenciamento de emergências</h4>
          <p>
            O SOS Project é uma solução composta por uma central de atendimento
            para desktop e um aplicativo móvel para acionamento de emergências.
            O sistema permite registrar ocorrências, acompanhar a localização do
            solicitante em tempo real e gerenciar todo o atendimento em uma
            única plataforma.
          </p>

          <div className={styles.actions}>
            <a
              className={styles.githubButton}
              href="https://github.com/fpasato/Sos-project"
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
        <div className={styles.sosProjectImage}>
          <img src={sosImage} alt="Sistema SOS" />
        </div>
      </section>
      <About />
    </div>
  );
}
