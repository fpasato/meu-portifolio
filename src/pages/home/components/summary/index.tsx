import { useRef } from "react";
import styles from "./styles.module.css";
import sosImage from "../../../../assets/sos/sos-logo.png";
import wavesImage from "../../../../assets/waves/waves-logo.webp";
import { Link } from "react-router-dom";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  shadow_color?: string;
}

const projects: Project[] = [
  {
    title: "SOS — Atendimento a Emergências",
    description:
      "Aplicativo mobile para envio de alertas SOS e plataforma desktop para o gerenciamento em tempo real das ocorrências.",
    image: sosImage,
    link: "/sos",
    shadow_color: "#dc3545",
  },
  {
    title: "Waves — Player de Música",
    description:
      "Ecossistema completo (Desktop e Mobile) para reprodução local de músicas, rádios e downloads de mídia com alta performance.",
    image: wavesImage,
    link: "/waves",
    shadow_color: "#007bff",
  },
  {
    title: "Em Breve",
    description: "Novos projetos serão adicionados em breve ao portfólio.",
    image: "",
    link: "#",
    shadow_color: "#888888",
  },
];

export function Summary() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 300;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.infoContainer}>
      <div className={styles.headerRow}>
        <h2>Projetos</h2>
        <div className={styles.arrowButtons}>
          <button
            className={styles.arrowButton}
            onClick={() => scroll("left")}
            aria-label="Anterior"
          >
            ←
          </button>
          <button
            className={styles.arrowButton}
            onClick={() => scroll("right")}
            aria-label="Próximo"
          >
            →
          </button>
        </div>
      </div>

      <div className={styles.projectsContainer} ref={carouselRef}>
        {projects.map((project, index) => (
          <Link
            key={index}
            to={project.link}
            className={styles.projectCard}
            style={
              {
                "--hover-color": project.shadow_color || "var(--primary)",
              } as React.CSSProperties
            }
          >
            <div className={styles.projectImageWrapper}>
              {project.image ? (
                <img src={project.image} alt={project.title} />
              ) : (
                <span className={styles.projectImagePlaceholder}>Em breve</span>
              )}
            </div>
            <div className={styles.projectContent}>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
