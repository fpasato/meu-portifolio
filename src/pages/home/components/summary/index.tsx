import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import {
  FaChevronLeft,
  FaChevronRight,
  FaChevronDown,
  FaArrowRight,
  FaPlus,
} from "react-icons/fa";
import sosImage from "../../../../assets/sos/sos-bg.png";
import wavesImage from "../../../../assets/waves/waves-bg.png";
import lumoImage from "../../../../assets/lumo/lumo-bg.png";

import { Link } from "react-router-dom";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  shadow_color?: string;
  status?: string;
}

const projects: Project[] = [
  {
    title: "SOS — Atendimento a Emergências",
    description:
      "Aplicativo mobile para envio de alertas SOS e plataforma desktop para o gerenciamento em tempo real das ocorrências.",
    image: sosImage,
    link: "/sos",
    shadow_color: "#dc3545",
    status: "Concluído",
  },
  {
    title: "Waves — Player de Música",
    description:
      "Ecossistema completo (Desktop e Mobile) para reprodução local de músicas, rádios e downloads de mídia com alta performance.",
    image: wavesImage,
    link: "/waves",
    shadow_color: "#8be9fd",
    status: "Concluído",
  },
  {
    title: "Lumo Digital",
    description: "Simulador de Banco Digital",
    image: lumoImage,
    link: "/lumo",
    shadow_color: "#9472FF",
    status: "Concluído",
  },
  {
    title: "Em Breve",
    description: "Novos projetos serão adicionados em breve ao portfólio.",
    image: "",
    link: "#",
    shadow_color: "var(--info)",
  },
];

export function Summary() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [listOpen, setListOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);

  const active = projects[activeIndex];
  const isComingSoon = active.link === "#";

  function goPrev() {
    setActiveIndex((i) => (i - 1 + projects.length) % projects.length);
  }

  function goNext() {
    setActiveIndex((i) => (i + 1) % projects.length);
  }

  function selectProject(index: number) {
    setActiveIndex(index);
    setListOpen(false);
  }

  // fecha o dropdown ao clicar fora ou pressionar Esc
  useEffect(() => {
    if (!listOpen) return;

    function handleClick(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        !toggleBtnRef.current?.contains(e.target as Node)
      ) {
        setListOpen(false);
      }
    }

    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setListOpen(false);
    }

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [listOpen]);

  return (
    <div className={styles.infoContainer}>
      <div className={styles.headerRow}>
        <h2>Projetos</h2>
        <button
          ref={toggleBtnRef}
          className={styles.toggleListBtn}
          aria-expanded={listOpen}
          onClick={() => setListOpen((v) => !v)}
        >
          Ver todos <FaChevronDown />
        </button>
      </div>

      <div
        className={styles.featuredStage}
        style={
          { "--accent": active.shadow_color || "var(--primary)" } as React.CSSProperties
        }
      >
        <button
          className={`${styles.navArrow} ${styles.navArrowLeft}`}
          onClick={goPrev}
          aria-label="Projeto anterior"
        >
          <FaChevronLeft />
        </button>

        {isComingSoon ? (
          <div className={styles.featuredCard}>
            <div className={styles.featuredImage}>
              <div className={styles.featuredImagePlaceholder}>
                <FaPlus />
              </div>
            </div>
            <div className={styles.featuredScrim} />
            <div className={styles.featuredContent} key={activeIndex}>
              <span className={styles.featuredIndex}>
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(projects.length).padStart(2, "0")}
              </span>
              <h3>{active.title}</h3>
              <p>{active.description}</p>
            </div>
          </div>
        ) : (
          <Link to={active.link} className={styles.featuredCard}>
            <div className={styles.featuredImage}>
              <img src={active.image} alt={active.title} key={activeIndex} />
            </div>
            <div className={styles.featuredScrim} />
            <div className={styles.featuredContent} key={activeIndex}>
              <span className={styles.featuredIndex}>
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(projects.length).padStart(2, "0")}
              </span>
              <h3>{active.title}</h3>
              <p>{active.description}</p>
              <span className={styles.featuredCta}>
                Ver projeto <FaArrowRight />
              </span>
            </div>
          </Link>
        )}

        <button
          className={`${styles.navArrow} ${styles.navArrowRight}`}
          onClick={goNext}
          aria-label="Próximo projeto"
        >
          <FaChevronRight />
        </button>

        {listOpen && (
          <div className={styles.listDropdown} ref={dropdownRef}>
            {projects.map((project, index) => (
              <button
                key={index}
                className={`${styles.listRow} ${
                  index === activeIndex ? styles.listRowActive : ""
                }`}
                style={
                  {
                    "--accent": project.shadow_color || "var(--primary)",
                  } as React.CSSProperties
                }
                onClick={() => selectProject(index)}
              >
                <span className={styles.listDot} />
                <span className={styles.listTitle}>{project.title}</span>
                {project.status && (
                  <span className={styles.listStatus}>{project.status}</span>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className={styles.dots}>
        {projects.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${
              index === activeIndex ? styles.dotActive : ""
            }`}
            style={
              {
                "--accent": projects[index].shadow_color || "var(--primary)",
              } as React.CSSProperties
            }
            onClick={() => setActiveIndex(index)}
            aria-label={`Ir para ${projects[index].title}`}
          />
        ))}
      </div>
    </div>
  );
}