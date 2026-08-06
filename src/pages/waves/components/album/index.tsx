import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "./styles.module.css";

import waves1 from "../../../../assets/waves/waves-1.png";
import waves2 from "../../../../assets/waves/waves-2.png";
import waves3 from "../../../../assets/waves/waves-3.png";
import waves4 from "../../../../assets/waves/waves-4.png";
import waves5 from "../../../../assets/waves/waves-5.png";
import waves6 from "../../../../assets/waves/waves-6.png";
import waves7 from "../../../../assets/waves/waves-7.png";
import waves8 from "../../../../assets/waves/waves-8.png";
import waves9 from "../../../../assets/waves/waves-9.png";

const images = [waves1, waves2, waves3, waves4, waves5, waves6, waves7, waves8, waves9];

export function Album() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const goPrev = useCallback(() => {
    setActiveIndex((activeIndex - 1 + images.length) % images.length);
  }, [activeIndex]);

  const goNext = useCallback(() => {
    setActiveIndex((activeIndex + 1) % images.length);
  }, [activeIndex]);

  useEffect(() => {
    if (!lightboxOpen) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, goPrev, goNext]);

  function openLightbox(index: number) {
    setActiveIndex(index);
    setLightboxOpen(true);
  }

  return (
    <div className={styles.albumContainer}>
      <h2>Galeria de screenshots</h2>

      <div className={styles.album}>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Screenshot ${index + 1}`}
            className={index === activeIndex ? styles.active : styles.thumb}
            onClick={() => openLightbox(index)}
          />
        ))}
      </div>


      {lightboxOpen &&
        createPortal(
          <div className={styles.lightboxOverlay} onClick={() => setLightboxOpen(false)}>
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
              src={images[activeIndex]}
              alt={`Screenshot ${activeIndex + 1}`}
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
              {activeIndex + 1} / {images.length}
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}