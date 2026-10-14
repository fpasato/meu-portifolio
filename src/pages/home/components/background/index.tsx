import { useEffect, useRef } from "react";
import styles from "./styles.module.css";

type Props = { targetRef: React.RefObject<HTMLElement | null> };

const COLORS = ["--primary", "--secondary", "--accent"];

export function Background({ targetRef }: Props) {
  const bgRef = useRef<HTMLDivElement>(null);
  const gasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = targetRef.current;
    const bg = bgRef.current;
    const gas = gasRef.current;
    if (!target || !bg || !gas) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let last = { x: 0, y: 0, t: 0 };
    let colorIdx = 0;
    const MAX_PUFFS = 60;

    const spawn = (x: number, y: number, speed: number) => {
      if (gas.childElementCount >= MAX_PUFFS) gas.firstElementChild?.remove();

      const puff = document.createElement("span");
      puff.className = styles.puff;

      // mais rápido o mouse = puff maior
      const size = 120 + Math.min(speed * 18, 160) + Math.random() * 80;
      const color = COLORS[colorIdx++ % COLORS.length];
      const life = 2600 + Math.random() * 1800;

      puff.style.width = puff.style.height = `${size}px`;
      puff.style.left = `${x}px`;
      puff.style.top = `${y}px`;
      puff.style.setProperty("--c", `var(${color})`);
      puff.style.setProperty("--dx", `${(Math.random() - 0.5) * 220}px`);
      puff.style.setProperty("--dy", `${(Math.random() - 0.5) * 220 - 60}px`);
      puff.style.setProperty("--rot", `${(Math.random() - 0.5) * 120}deg`);
      puff.style.animationDuration = `${life}ms`;

      gas.appendChild(puff);
      puff.addEventListener("animationend", () => puff.remove(), { once: true });
    };

    const onMove = (e: MouseEvent) => {
      bg.setAttribute("data-active", "true");
      const now = performance.now();
      const dx = e.clientX - last.x;
      const dy = e.clientY - last.y;
      const dist = Math.hypot(dx, dy);

      // solta puff a cada ~28px percorridos (rastro contínuo)
      if (dist > 28 && now - last.t > 16) {
        spawn(e.clientX, e.clientY, dist / Math.max(now - last.t, 1) * 4);
        last = { x: e.clientX, y: e.clientY, t: now };
      }
    };

    const onLeave = () => bg.setAttribute("data-active", "false");

    target.addEventListener("mousemove", onMove, { passive: true });
    target.addEventListener("mouseleave", onLeave);
    return () => {
      target.removeEventListener("mousemove", onMove);
      target.removeEventListener("mouseleave", onLeave);
    };
  }, [targetRef]);

  return (
    <div ref={bgRef} className={styles.bg} aria-hidden data-active="false">
      {/* filtro de turbulência: deforma os puffs em fumaça */}
      <svg className={styles.svgDefs} width="0" height="0">
        <defs>
          <filter id="gas-warp" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.012 0.018"
              numOctaves="3"
              seed="4"
              result="noise"
            >
              <animate
                attributeName="baseFrequency"
                dur="14s"
                values="0.012 0.018;0.02 0.012;0.012 0.018"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="110" />
            <feGaussianBlur stdDeviation="14" />
          </filter>
        </defs>
      </svg>

      <div className={styles.ambient}>
        <span className={`${styles.aura} ${styles.auraPrimary}`} />
        <span className={`${styles.aura} ${styles.auraSecondary}`} />
        <span className={`${styles.aura} ${styles.auraAccent}`} />
      </div>

      <div ref={gasRef} className={styles.gasLayer} />

      <div className={styles.grid} />
      <div className={styles.noise} />
      <div className={styles.vignette} />
    </div>
  );
}