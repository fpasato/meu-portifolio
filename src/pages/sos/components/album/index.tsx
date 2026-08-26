import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "./styles.module.css";

// SOS Manager
import manager1 from "../../../../assets/sos/sos-manager/sos-1.png";
import manager2 from "../../../../assets/sos/sos-manager/sos-2.png";
import manager3 from "../../../../assets/sos/sos-manager/sos-3.png";
import manager4 from "../../../../assets/sos/sos-manager/sos-4.png";
import manager5 from "../../../../assets/sos/sos-manager/sos-5.png";
import manager6 from "../../../../assets/sos/sos-manager/sos-6.png";

// SOS Alerta (mobile)
import mobile1 from "../../../../assets/sos/sos-app/ss1.png";
import mobile2 from "../../../../assets/sos/sos-app/ss2.png";
import mobile3 from "../../../../assets/sos/sos-app/ss3.png";
import mobile4 from "../../../../assets/sos/sos-app/ss4.png";

const managerImages = [
  manager1, manager2, manager3, manager4, manager5,
  manager6,
];

const mobileImages = [mobile1, mobile2, mobile3, mobile4];

const VISIBLE_COUNT = 5;

type LightboxState = {
  images: string[];
  index: number;
};

function useLightbox() {
  const [state, setState] = useState<LightboxState | null>(null);

  const goPrev = useCallback(() => {
    setState((s) =>
      s ? { ...s, index: (s.index - 1 + s.images.length) % s.images.length } : s
    );
  }, []);

  const goNext = useCallback(() => {
    setState((s) => (s ? { ...s, index: (s.index + 1) % s.images.length } : s));
  }, []);

  const open = useCallback((images: string[], index: number) => {
    setState({ images, index });
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

type GallerySectionProps = {
  title: string;
  images: string[];
  onOpen: (images: string[], index: number) => void;
};

function GallerySection({ title, images, onOpen }: GallerySectionProps) {
  const visible = images.slice(0, VISIBLE_COUNT);
  const remaining = images.length - VISIBLE_COUNT;

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>{title}</h3>
      <div className={styles.album}>
        {visible.map((src, index) => {
          const isLastVisible = index === VISIBLE_COUNT - 1;
          const showMoreOverlay = isLastVisible && remaining > 0;

          return (
            <div
              key={index}
              className={styles.thumbWrapper}
              onClick={() => onOpen(images, index)}
            >
              <img src={src} alt={`${title} ${index + 1}`} className={styles.thumb} />
              {showMoreOverlay && (
                <div className={styles.moreOverlay}>+{remaining}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function Album() {
  const { state, open, close, goPrev, goNext } = useLightbox();

  return (
    <div className={styles.albumContainer}>
      <GallerySection title="SOS Manager (desktop)" images={managerImages} onOpen={open} />
      <GallerySection title="SOS Alerta (Mobile)" images={mobileImages} onOpen={open} />

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
              src={state.images[state.index]}
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
              {state.index + 1} / {state.images.length}
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}