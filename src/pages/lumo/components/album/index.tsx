import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "./styles.module.css";

import lumo1 from "../../../../assets/lumo/lumo-1.png";
import lumo2 from "../../../../assets/lumo/lumo-2.png";
import lumo4 from "../../../../assets/lumo/lumo-4.png";
import lumo5 from "../../../../assets/lumo/lumo-5.png";
import lumo6 from "../../../../assets/lumo/lumo-6.png";
import lumo7 from "../../../../assets/lumo/lumo-7.png";
import lumo8 from "../../../../assets/lumo/lumo-8.png";
import lumo9 from "../../../../assets/lumo/lumo-9.png";
import lumo10 from "../../../../assets/lumo/lumo-10.png";
import lumo11 from "../../../../assets/lumo/lumo-11.png";
import lumo12 from "../../../../assets/lumo/lumo-12.png";

const images = [
  lumo1, lumo2, lumo4, lumo5, lumo6,
  lumo7, lumo8, lumo9, lumo10, lumo11, lumo12,
];

const VISIBLE_COUNT = 5;

type LightboxState = {
  index: number;
};

function useLightbox() {
  const [state, setState] = useState<LightboxState | null>(null);

  const goPrev = useCallback(() => {
    setState((s) =>
      s ? { index: (s.index - 1 + images.length) % images.length } : s
    );
  }, []);

  const goNext = useCallback(() => {
    setState((s) => (s ? { index: (s.index + 1) % images.length } : s));
  }, []);

  const open = useCallback((index: number) => {
    setState({ index });
  }, []);

  const close = useCallback(() => setState(null), []);

  useEffect(() => {
    if (!state) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [state, close, goPrev, goNext]);

  return { state, open, close, goPrev, goNext };
}

export function Album() {
  const { state, open, close, goPrev, goNext } = useLightbox();

  const visible = images.slice(0, VISIBLE_COUNT);
  const remaining = images.length - VISIBLE_COUNT;

  return (
    <div className={styles.albumContainer}>
      <h2>Galeria de screenshots</h2>

      <div className={styles.album}>
        {visible.map((src, index) => {
          const isLastVisible = index === VISIBLE_COUNT - 1;
          const showMoreOverlay = isLastVisible && remaining > 0;

          return (
            <div
              key={index}
              className={styles.thumbWrapper}
              onClick={() => open(index)}
            >
              <img src={src} alt={`Screenshot ${index + 1}`} className={styles.thumb} />
              {showMoreOverlay && (
                <div className={styles.moreOverlay}>+{remaining}</div>
              )}
            </div>
          );
        })}
      </div>

      {state &&
        createPortal(
          <div className={styles.lightboxOverlay} onClick={close}>
            <button
              className={styles.lightboxNavLeft}
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              aria-label="Imagem anterior"
            >
              <FaChevronLeft />
            </button>

            <img
              src={images[state.index]}
              alt={`Screenshot ${state.index + 1}`}
              className={styles.lightboxImage}
              onClick={(e) => e.stopPropagation()}
            />

            <button
              className={styles.lightboxNavRight}
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              aria-label="Próxima imagem"
            >
              <FaChevronRight />
            </button>

            <div className={styles.lightboxCounter}>
              {state.index + 1} / {images.length}
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}