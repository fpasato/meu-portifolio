import { useEffect } from "react";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import {
  FaArrowLeft, FaGithub, FaDownload, FaExternalLinkAlt,
  FaMusic, FaYoutube,
} from "react-icons/fa";
import { RiRadioLine } from "react-icons/ri";
import { IoMdDownload } from "react-icons/io";
import { MdOndemandVideo } from "react-icons/md";
import { BiSolidPlaylist } from "react-icons/bi";
import {
  BsInfoCircleFill, BsGrid3X3GapFill, BsCpuFill,
  BsLink45Deg, BsImages,
} from "react-icons/bs";

import { Album } from "../../components/album";
import styles from "./styles.module.css";

import logo from "../../assets/waves/waves-logo.webp";
import wavesHero from "../../assets/waves/waves-1.png";
import waves1 from "../../assets/waves/waves-1.png";
import waves2 from "../../assets/waves/waves-2.png";
import waves3 from "../../assets/waves/waves-3.png";
import waves4 from "../../assets/waves/waves-4.png";
import waves5 from "../../assets/waves/waves-5.png";
import waves6 from "../../assets/waves/waves-6.png";
import waves7 from "../../assets/waves/waves-7.png";
import waves8 from "../../assets/waves/waves-8.png";
import waves9 from "../../assets/waves/waves-9.png";

import reactLogo from "../../assets/waves/techs/react.png";
import electronLogo from "../../assets/waves/techs/electron.png";
import sqliteLogo from "../../assets/waves/techs/sqlite.png";
import threejsLogo from "../../assets/waves/techs/threejs.png";
import nodejsLogo from "../../assets/waves/techs/nodejs.png";
import ytdlpTechLogo from "../../assets/waves/techs/ytdlp.png";
import ffmpegLogo from "../../assets/waves/techs/ffmpeg.png";
import zustandLogo from "../../assets/waves/techs/zustand.svg";

import radioBrowserLogo from "../../assets/waves/api/radio-browser-api.png";
import lrclibLogo from "../../assets/waves/api/lrclib.png";
import ytdlpApiLogo from "../../assets/waves/techs/ytdlp.png";
import googleAuthLogo from "../../assets/waves/api/Google_Authenticator.svg";
import ghosteryLogo from "../../assets/waves/api/ghostery.png";

/* =========================================================
   DADOS
   ========================================================= */

const ALBUM_IMAGES = [
  waves1, waves2, waves3, waves4, waves5,
  waves6, waves7, waves8, waves9,
];

interface TechItem {
  name: string;
  logo: string;
}

interface IntegrationItem {
  name: string;
  logo: string;
  href: string;
}

interface FeatureItem {
  icon: ReactNode;
  title: string;
  description: string;
}

/* Stack base — o que foi usado para escrever o código */
const TECHS: TechItem[] = [
  { name: "React",    logo: reactLogo },
  { name: "Electron", logo: electronLogo },
  { name: "Node.js",  logo: nodejsLogo },
  { name: "SQLite",   logo: sqliteLogo },
  { name: "Three.js", logo: threejsLogo },
  { name: "Zustand",  logo: zustandLogo },
  { name: "FFmpeg",   logo: ffmpegLogo },
  { name: "YT-DLP",   logo: ytdlpTechLogo },
];

/*
 * Integrações — serviços externos consumidos pela aplicação.
 * Se este array estiver vazio, a seção "Integrações" some.
 */
const INTEGRATIONS: IntegrationItem[] = [
  {
    name: "Radio Browser API",
    logo: radioBrowserLogo,
    href: "https://www.radio-browser.info/",
  },
  {
    name: "LRCLIB",
    logo: lrclibLogo,
    href: "https://lrclib.net/",
  },
  {
    name: "YT-DLP",
    logo: ytdlpApiLogo,
    href: "https://github.com/yt-dlp/yt-dlp",
  },
  {
    name: "Google Auth",
    logo: googleAuthLogo,
    href: "https://developers.google.com/identity/protocols/oauth2",
  },
  {
    name: "Ghostery AdBlocker",
    logo: ghosteryLogo,
    href: "https://www.ghostery.com/",
  },
];

const FEATURES: FeatureItem[] = [
  {
    icon: <FaMusic />,
    title: "Biblioteca Local",
    description:
      "Organize e reproduza suas músicas locais com rapidez e qualidade.",
  },
  {
    icon: <FaYoutube />,
    title: "YouTube sem Anúncios",
    description:
      "Acesse o YouTube diretamente no aplicativo com bloqueio de anúncios.",
  },
  {
    icon: <RiRadioLine />,
    title: "Rádios do Mundo",
    description:
      "Ouça milhares de rádios online de diversos países, idiomas e gêneros.",
  },
  {
    icon: <MdOndemandVideo />,
    title: "Player de Vídeos",
    description:
      "Reproduza vídeos locais em diversos formatos em um player integrado.",
  },
  {
    icon: <BiSolidPlaylist />,
    title: "Playlists Personalizadas",
    description:
      "Crie e organize playlists personalizadas para suas músicas favoritas.",
  },
  {
    icon: <IoMdDownload />,
    title: "Downloads do YouTube",
    description:
      "Baixe áudios e vídeos do YouTube diretamente para sua biblioteca.",
  },
];

/* =========================================================
   COMPONENTE
   ========================================================= */

export function WavesProject() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <div className={styles.page}>
      {/* ================= HERO ================= */}
      <section className={styles.hero}>
        <div className={styles.heroInfo}>
          <Link to="/" className={styles.back}>
            <FaArrowLeft /> Voltar para projetos
          </Link>

          <div className={styles.brand}>
            <img src={logo} alt="" className={styles.logo} />
            <h1 className={styles.title}>
              <span className={styles.accent}>Waves</span> Desktop
            </h1>
          </div>

          <p className={styles.subtitle}>
            Player de mídia completo para Windows
          </p>

          <p className={styles.lead}>
            Waves Desktop é um player all-in-one desenvolvido com Electron e
            React. Reproduza músicas locais, ouça rádios do mundo inteiro e faça
            downloads de áudio e vídeo direto para sua biblioteca — tudo com
            visualizações 3D que reagem à música.
          </p>

          <div className={styles.actions}>
            <a
              href="https://github.com/fpasato/Waves-App-Electron"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
            >
              <FaGithub /> Ver no GitHub
            </a>
            <button type="button" className={styles.btnGhost} disabled>
              <FaDownload /> Download (Windows)
            </button>
          </div>
        </div>

        <div className={styles.heroImage}>
          <img src={wavesHero} alt="Interface do Waves Desktop" />
        </div>
      </section>

      {/* ================= SOBRE ================= */}
      <section className={styles.block}>
        <header className={styles.blockHead}>
          <BsInfoCircleFill />
          <h3>Sobre o Projeto</h3>
        </header>
        <p className={styles.blockText}>
          O Waves foi desenvolvido com o objetivo de reunir, em um único
          aplicativo, recursos que normalmente exigem vários programas
          diferentes. Além de reproduzir músicas e vídeos locais, o sistema
          oferece rádios online, downloads de mídia, gerenciamento de
          bibliotecas e uma experiência visual moderna — priorizando
          desempenho, organização e facilidade de uso.
        </p>
      </section>

      {/* ================= RECURSOS ================= */}
      <section className={styles.block}>
        <header className={styles.blockHead}>
          <BsGrid3X3GapFill />
          <h3>Recursos</h3>
        </header>
        <div className={styles.featureList}>
          {FEATURES.map((f) => (
            <div key={f.title} className={styles.featureCard}>
              <div className={styles.featureHead}>
                {f.icon}
                <h4>{f.title}</h4>
              </div>
              <p className={styles.featureDesc}>{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TECNOLOGIAS ================= */}
      <section className={styles.block}>
        <header className={styles.blockHead}>
          <BsCpuFill />
          <h3>Tecnologias</h3>
        </header>
        <ul className={styles.chipGrid}>
          {TECHS.map((t) => (
            <li key={t.name} className={styles.chip}>
              <img src={t.logo} alt="" />
              <span>{t.name}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ================= INTEGRAÇÕES =================
          Só renderiza se houver itens. Para adicionar/remover,
          basta editar o array INTEGRATIONS. */}
      {INTEGRATIONS.length > 0 && (
        <section className={styles.block}>
          <header className={styles.blockHead}>
            <BsLink45Deg />
            <h3>Integrações</h3>
          </header>
          <ul className={styles.integrationGrid}>
            {INTEGRATIONS.map((it) => (
              <li key={it.name}>
                <a
                  href={it.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.integration}
                >
                  <img
                    src={it.logo}
                    alt=""
                    className={styles.integrationLogo}
                  />
                  <span className={styles.integrationName}>{it.name}</span>
                  <FaExternalLinkAlt className={styles.integrationArrow} />
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* ================= GALERIA ================= */}
      <section className={styles.block}>
        <header className={styles.blockHead}>
          <BsImages />
          <h3>Galeria de screenshots</h3>
        </header>
        <Album images={ALBUM_IMAGES} />
      </section>

      {/* ================= GITHUB CTA ================= */}
      <aside className={styles.githubCta}>
        <img src={logo} alt="" className={styles.githubCtaLogo} />
        <div className={styles.githubCtaBody}>
          <h4>Gostou do projeto?</h4>
          <p>Veja o código-fonte no GitHub</p>
        </div>
        <a
          href="https://github.com/fpasato/Waves-App-Electron"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btnPrimary}
        >
          Ver projeto <FaExternalLinkAlt />
        </a>
      </aside>
    </div>
  );
}