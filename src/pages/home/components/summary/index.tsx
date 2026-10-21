// Summary.tsx
import type { CSSProperties, MouseEvent as ReactMouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight, FaExternalLinkAlt, FaGlobe, FaRocket } from "react-icons/fa";

import styles from "./styles.module.css";

import sosImage from "../../../../assets/sos/sos-bg.png";
import wavesImage from "../../../../assets/waves/waves-bg.png";
import lumoImage from "../../../../assets/lumo/lumo-bg.png";
import auroraImage from "../../../../assets/aurora/1.png";
import pataAmigaImage from "../../../../assets/pata-amiga/1.png";
import novaImage from "../../../../assets/nova/1.png";

type Category = "exe" | "landing";

interface Project {
  title: string;
  description: string;
  href: string;
  category: Category;
  image: string; // sempre obrigatório: cada projeto mostra sua imagem
  color?: string;
  status?: string;
  tags?: string[];
}

/*
 * Adicione um item e a UI se adapta sozinha:
 *  • a grade se reorganiza
 *  • contadores e totais recalculam
 *  • grupo vazio simplesmente some
 */
const projects: Project[] = [
  {
    title: "SOS",
    description: "Alertas de emergência no celular e painel desktop em tempo real.",
    href: "/sos",
    image: sosImage,
    color: "#ff3b5c",
    status: "Concluído",
    tags: ["Mobile", "Desktop"],
    category: "exe",
  },
  {
    title: "Waves",
    description: "Player de músicas, rádios e downloads com alta performance.",
    href: "/waves",
    image: wavesImage,
    color: "#4dabf7",
    status: "Concluído",
    tags: ["Electron", "SQLite"],
    category: "exe",
  },
  {
    title: "Lumo Digital",
    description: "Simulador de banco digital com foco em UX e dados.",
    href: "/lumo",
    image: lumoImage,
    color: "#8b7fd4",
    status: "Concluído",
    tags: ["Desktop", "UX"],
    category: "exe",
  },
  {
    title: "Aurora",
    description: "Landing page para cafeteria com foco em identidade visual.",
    href: "https://fpasato.github.io/landing-page-aurora/",
    image: auroraImage,
    color: "#519922",
    status: "Concluído",
    tags: ["Web"],
    category: "landing",
  },
  {
    title: "Pata Amiga",
    description: "Landing page para petcare de animais com agendamento.",
    href: "https://fpasato.github.io/aula-pata-amiga/",
    image: pataAmigaImage,
    color: "#995d22",
    status: "Concluído",
    tags: ["Web"],
    category: "landing",
  },
  {
    title: "Nova",
    description: "Landing page para loja de roupa streetwear.",
    href: "https://fpasato.github.io/landing-page-nova/",
    image: novaImage,
    color: "#45f200",
    status: "Concluído",
    tags: ["Web"],
    category: "landing",
  },
];

const GROUPS: { key: Category; label: string; hint: string; icon: React.ReactNode }[] = [
  { key: "exe", label: "Programas", hint: "Apps desktop & mobile", icon: <FaRocket /> },
  { key: "landing", label: "Landing Pages", hint: "Sites & páginas", icon: <FaGlobe /> },
];

const pad = (n: number) => String(n).padStart(2, "0");
const isExternal = (href: string) => /^https?:\/\//.test(href);

export function Summary() {
  const navigate = useNavigate();

  function handleClick(e: ReactMouseEvent<HTMLAnchorElement>, p: Project) {
    if (isExternal(p.href)) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    navigate(p.href);
  }

  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <div className={styles.titleGroup}>
          <span className={styles.kicker}>Trabalhos</span>
          <h2 className={styles.title}>Projetos selecionados</h2>
        </div>
        <p className={styles.count}>
          <strong>{pad(projects.length)}</strong> projetos publicados
        </p>
      </header>

      {GROUPS.map((group) => {
        const items = projects.filter((p) => p.category === group.key);
        if (items.length === 0) return null;

        return (
          <div key={group.key} className={styles.group}>
            <div className={styles.groupHead}>
              <span className={styles.groupIcon}>{group.icon}</span>
              <h3 className={styles.groupLabel}>{group.label}</h3>
              <span className={styles.groupHint}>{group.hint}</span>
              <span className={styles.groupCount}>{pad(items.length)}</span>
            </div>

            <div className={styles.grid}>
              {items.map((p) => {
                const external = isExternal(p.href);

                return (
                  <a
                    key={p.href}
                    href={p.href}
                    className={styles.tile}
                    style={{ "--c": p.color ?? "var(--primary)" } as CSSProperties}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    onClick={(e) => handleClick(e, p)}
                  >
                    <img src={p.image} alt="" draggable={false} />

                    <span className={styles.tileShade} aria-hidden="true" />

                    <div className={styles.tileBody}>
                      <div className={styles.tileMeta}>
                        {p.status && (
                          <span className={styles.status}>
                            <i /> {p.status}
                          </span>
                        )}
                        {p.tags?.map((t) => (
                          <span key={t} className={styles.tag}>
                            {t}
                          </span>
                        ))}
                      </div>

                      <h4 className={styles.tileTitle}>
                        <span>{p.title}</span>
                        <span className={styles.tileArrow} aria-hidden="true">
                          {external ? <FaExternalLinkAlt /> : <FaArrowRight />}
                        </span>
                      </h4>

                      <p className={styles.tileDesc}>{p.description}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
}