
import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import styles from "./styles.module.css";

interface AlbumProps {
  images: string[];
  title?: string;
  visibleCount?: number;
}

export function Album({ images, title = "Galeria", visibleCount = 5 }: AlbumProps) {
  const [index, setIndex] = useState<number | null>(null);
  const total = images.length;

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + total) % total)),
    [total]
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % total)),
    [total]
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [index, close, prev, next]);

  if (total === 0) return null;

  const visible = images.slice(0, visibleCount);
  const remaining = total - visibleCount;

  return (
    <div className={styles.container}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <div className={styles.grid}>
        {visible.map((src, i) => {
          const isLast = i === visible.length - 1;
          const showMore = isLast && remaining > 0;

          return (
            <button
              key={i}
              type="button"
              className={styles.thumb}
              onClick={() => setIndex(i)}
              aria-label={`Abrir screenshot ${i + 1}`}
            >
              <img src={src} alt={`Screenshot ${i + 1}`} loading="lazy" />
              {showMore && <span className={styles.more}>+{remaining}</span>}
            </button>
          );
        })}
      </div>

      {index !== null &&
        createPortal(
          <div className={styles.overlay} onClick={close}>
            <button
              className={`${styles.nav} ${styles.navLeft}`}
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Anterior"
            >
              <FaChevronLeft />
            </button>

            <img
              src={images[index]}
              alt={`Screenshot ${index + 1}`}
              className={styles.image}
              onClick={(e) => e.stopPropagation()}
            />

            <button
              className={`${styles.nav} ${styles.navRight}`}
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Próxima"
            >
              <FaChevronRight />
            </button>

            <button
              className={styles.close}
              onClick={(e) => { e.stopPropagation(); close(); }}
              aria-label="Fechar"
            >
              <FaTimes />
            </button>

            <span className={styles.counter}>
              {index + 1} / {total}
            </span>
          </div>,
          document.body
        )}
    </div>
  );
}