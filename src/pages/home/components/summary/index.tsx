import { useRef, useState } from "react";
import type { CSSProperties, KeyboardEvent, MouseEvent, PointerEvent, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaGlobe,
  FaPlus,
  FaRocket,
} from "react-icons/fa";

import styles from "./styles.module.css";

import sosImage from "../../../../assets/sos/sos-bg.png";
import wavesImage from "../../../../assets/waves/waves-bg.png";
import lumoImage from "../../../../assets/lumo/lumo-bg.png";

type Category = "exe" | "landing";

interface Project {
  title: string;
  description: string;
  href: string; // rota interna ("/sos") ou URL externa ("https://...")
  category: Category;
  image?: string;
  color?: string;
  status?: string;
  tags?: string[];
}

/* Para adicionar uma landing page: novo item com category: "landing" */
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
];

const TABS: { key: Category; label: string; icon: ReactNode; soon: string }[] = [
  { key: "exe", label: "Programas", icon: <FaRocket />, soon: "Novos programas em breve" },
  { key: "landing", label: "Landing Pages", icon: <FaGlobe />, soon: "Landing pages em breve" },
];

const pad = (n: number) => String(n).padStart(2, "0");

export function Summary() {
  const navigate = useNavigate();
  const [category, setCategory] = useState<Category>("exe");
  const [index, setIndex] = useState(0);

  const drag = useRef({ x: 0, down: false, moved: false });
  const wheelLock = useRef(0);

  const tab = TABS.find((t) => t.key === category)!;
  const items = projects.filter((p) => p.category === category);

  // último slide = "em breve" (null)
  const slides: (Project | null)[] = [...items, null];
  const last = slides.length - 1;
  const current = slides[index];

  const go = (i: number) => setIndex(Math.max(0, Math.min(i, last)));

  function changeCategory(c: Category) {
    setCategory(c);
    setIndex(0);
  }

  function open(p: Project) {
    if (/^https?:\/\//.test(p.href)) window.open(p.href, "_blank", "noopener,noreferrer");
    else navigate(p.href);
  }

  /* ---------- arrastar / swipe ---------- */
  function onPointerDown(e: PointerEvent) {
    drag.current = { x: e.clientX, down: true, moved: false };
  }
  function onPointerMove(e: PointerEvent) {
    if (drag.current.down && Math.abs(e.clientX - drag.current.x) > 6) {
      drag.current.moved = true;
    }
  }
  function onPointerUp(e: PointerEvent) {
    if (!drag.current.down) return;
    const dx = e.clientX - drag.current.x;
    drag.current.down = false;
    if (Math.abs(dx) > 50) go(index + (dx < 0 ? 1 : -1));
  }

  /* ---------- roda do mouse (só horizontal / trackpad) ---------- */
  function onWheel(e: React.WheelEvent) {
    if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
    const now = performance.now();
    if (now - wheelLock.current < 380) return;
    wheelLock.current = now;
    go(index + (e.deltaX > 0 ? 1 : -1));
  }

  /* ---------- teclado ---------- */
  function onKeyDown(e: KeyboardEvent) {
    if (e.key === "ArrowRight") go(index + 1);
    else if (e.key === "ArrowLeft") go(index - 1);
    else if (e.key === "Enter" && current) open(current);
  }

  /* ---------- tilt 3D no card ativo ---------- */
  function onTilt(e: MouseEvent<HTMLElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const el = e.currentTarget;
    el.style.setProperty("--ry", `${(px - 0.5) * 16}deg`);
    el.style.setProperty("--rx", `${(0.5 - py) * 12}deg`);
    el.style.setProperty("--gx", `${px * 100}%`);
    el.style.setProperty("--gy", `${py * 100}%`);
  }
  function resetTilt(e: MouseEvent<HTMLElement>) {
    const el = e.currentTarget;
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--rx", "0deg");
  }

  const glow = current?.color || "var(--primary)";

  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <div className={styles.titleGroup}>
          <span className={styles.kicker}>Trabalhos</span>
          <h2 className={styles.title}>Projetos selecionados</h2>
        </div>

        <div className={styles.tabs} role="tablist">
          {TABS.map((t) => {
            const count = projects.filter((p) => p.category === t.key).length;
            const on = category === t.key;
            return (
              <button
                key={t.key}
                role="tab"
                aria-selected={on}
                className={`${styles.tab} ${on ? styles.tabOn : ""}`}
                onClick={() => changeCategory(t.key)}
              >
                {t.icon}
                <span>{t.label}</span>
                <sup>{pad(count)}</sup>
              </button>
            );
          })}
        </div>
      </header>

      {/* ================= PALCO 3D ================= */}
      <div
        className={styles.stage}
        style={{ "--glow": glow } as CSSProperties}
        tabIndex={0}
        role="group"
        aria-roledescription="carrossel"
        aria-label="Projetos"
        onKeyDown={onKeyDown}
        onWheel={onWheel}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        <div className={styles.floor} />

        {slides.map((p, i) => {
          const o = i - index;
          const a = Math.abs(o);
          const isActive = o === 0;

          const style = {
            "--o": o,
            "--a": a,
            "--c": p?.color || "var(--primary)",
            zIndex: 20 - a,
          } as CSSProperties;

          return (
            <div
              key={p ? p.href : "soon"}
              className={styles.slide}
              style={style}
              data-a={Math.min(a, 4)}
              data-active={isActive}
              aria-hidden={a > 1}
            >
              <div
                className={`${styles.face} ${p ? "" : styles.faceSoon}`}
                role="button"
                aria-label={p ? p.title : tab.soon}
                onMouseMove={isActive && p ? onTilt : undefined}
                onMouseLeave={isActive && p ? resetTilt : undefined}
                onClick={() => {
                  if (drag.current.moved) return;
                  if (!isActive) go(i);
                  else if (p) open(p);
                }}
              >
                {p ? (
                  <>
                    {p.image ? (
                      <img src={p.image} alt="" draggable={false} />
                    ) : (
                      <div className={styles.fallback} />
                    )}
                    <span className={styles.num}>{pad(i + 1)}</span>
                    <span className={styles.glare} />
                  </>
                ) : (
                  <div className={styles.soonInner}>
                    <span className={styles.soonIcon}>
                      <FaPlus />
                    </span>
                    <span>Em breve</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* ================= INFO DO ATIVO ================= */}
      <div
        className={styles.info}
        key={`${category}-${index}`}
        style={{ "--c": current?.color || "var(--primary)" } as CSSProperties}
      >
        {current ? (
          <>
            <div className={styles.meta}>
              {current.status && (
                <span className={styles.status}>
                  <i /> {current.status}
                </span>
              )}
              {current.tags?.map((t) => (
                <span key={t} className={styles.tag}>
                  {t}
                </span>
              ))}
            </div>
            <h3 className={styles.name}>{current.title}</h3>
            <p className={styles.desc}>{current.description}</p>
            <button className={styles.cta} onClick={() => open(current)}>
              Ver projeto <FaArrowRight />
            </button>
          </>
        ) : (
          <>
            <h3 className={styles.name}>{tab.soon}</h3>
            <p className={styles.desc}>Novos trabalhos serão adicionados aqui.</p>
          </>
        )}
      </div>

      {/* ================= CONTROLES ================= */}
      <div className={styles.controls}>
        <button
          className={styles.arrow}
          onClick={() => go(index - 1)}
          disabled={index === 0}
          aria-label="Anterior"
        >
          <FaChevronLeft />
        </button>

        <div className={styles.dots}>
          {slides.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === index ? styles.dotOn : ""}`}
              onClick={() => go(i)}
              aria-label={`Ir para ${i + 1}`}
            />
          ))}
        </div>

        <button
          className={styles.arrow}
          onClick={() => go(index + 1)}
          disabled={index === last}
          aria-label="Próximo"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}