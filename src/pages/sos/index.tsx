import { useEffect } from "react";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import {
  FaArrowLeft, FaGithub, FaDownload, FaExternalLinkAlt,
} from "react-icons/fa";
import {
  BsInfoCircleFill, BsGrid3X3GapFill, BsCpuFill,
  BsLink45Deg, BsImages,
} from "react-icons/bs";
import {
  IoShieldCheckmarkOutline, IoDesktopOutline,
} from "react-icons/io5";
import { ImMobile } from "react-icons/im";

import { Album } from "../../components/album";
import styles from "./styles.module.css";

import sosLogo from "../../assets/sos/sos-logo.png";
import sosImage from "../../assets/sos/sos-system.png";

import manager1 from "../../assets/sos/sos-manager/sos-1.png";
import manager2 from "../../assets/sos/sos-manager/sos-2.png";
import manager3 from "../../assets/sos/sos-manager/sos-3.png";
import manager4 from "../../assets/sos/sos-manager/sos-4.png";
import manager5 from "../../assets/sos/sos-manager/sos-5.png";
import manager6 from "../../assets/sos/sos-manager/sos-6.png";

import mobile1 from "../../assets/sos/sos-app/ss1.png";
import mobile2 from "../../assets/sos/sos-app/ss2.png";
import mobile3 from "../../assets/sos/sos-app/ss3.png";
import mobile4 from "../../assets/sos/sos-app/ss4.png";

import reactLogo from "../../assets/waves/techs/react.png";
import electronLogo from "../../assets/waves/techs/electron.png";
import nodejsLogo from "../../assets/waves/techs/nodejs.png";
import supabaseLogo from "../../assets/icons/supabase.png";
import capacitorLogo from "../../assets/icons/capacitor.png";
import leafletLogo from "../../assets/icons/leaflet.jpeg";
import apexchartsLogo from "../../assets/icons/apexcharts.png";
import postgresLogo from "../../assets/icons/postgreesql.png";

/* =========================================================
   DADOS
   ========================================================= */

const MANAGER_IMAGES = [manager1, manager2, manager3, manager4, manager5, manager6];
const MOBILE_IMAGES = [mobile1, mobile2, mobile3, mobile4];

interface TechItem {
  name: string;
  logo: string;
}

interface IntegrationItem {
  brand: string;   // plataforma-mãe (Supabase, Capacitor…)
  name: string;    // serviço específico (Auth, Realtime…)
  logo: string;
  href: string;
}

interface FeatureGroup {
  icon: ReactNode;
  title: string;
  items: string[];
}

/* Stack base — o que foi usado para escrever o código */
const TECHS: TechItem[] = [
  { name: "React",      logo: reactLogo },
  { name: "Electron",   logo: electronLogo },
  { name: "Node.js",    logo: nodejsLogo },
  { name: "Supabase",   logo: supabaseLogo },
  { name: "Capacitor",  logo: capacitorLogo },
  { name: "PostgreSQL", logo: postgresLogo },
  { name: "Leaflet",    logo: leafletLogo },
  { name: "ApexCharts", logo: apexchartsLogo },
];

/*
 * Integrações — serviços externos consumidos pela aplicação.
 * Se este array estiver vazio, a seção "Integrações" simplesmente não aparece.
 */
const INTEGRATIONS: IntegrationItem[] = [
  {
    brand: "Supabase", name: "Auth",
    logo: supabaseLogo,
    href: "https://supabase.com/docs/guides/auth",
  },
  {
    brand: "Supabase", name: "Realtime",
    logo: supabaseLogo,
    href: "https://supabase.com/docs/guides/realtime",
  },
  {
    brand: "Supabase", name: "Edge Functions",
    logo: supabaseLogo,
    href: "https://supabase.com/docs/guides/functions",
  },
  {
    brand: "Capacitor", name: "Geolocation",
    logo: capacitorLogo,
    href: "https://capacitorjs.com/docs/apis/geolocation",
  },
  {
    brand: "Capacitor", name: "Push Notifications",
    logo: capacitorLogo,
    href: "https://capacitorjs.com/docs/apis/push-notifications",
  },
];

const FEATURES: FeatureGroup[] = [
  {
    icon: <IoDesktopOutline />,
    title: "SOS Manager (desktop)",
    items: [
      "Recebimento de chamados em tempo real com alarme sonoro",
      "Dashboard com gráficos e indicadores",
      "Mapa interativo com rastreamento de localização",
      "Gestão de atendentes e usuários com níveis de acesso",
      "Filtros avançados por período, status e localização",
      "Auditoria completa de ações administrativas",
    ],
  },
  {
    icon: <ImMobile />,
    title: "Alerta SOS (mobile)",
    items: [
      "Acionamento de emergência com um único toque",
      "Compartilhamento de localização em tempo real",
      "Acompanhamento do status do chamado",
      "Histórico de ocorrências",
      "Teste de localização e permissões",
      "Notificações e atualizações em tempo real",
    ],
  },
];

/* =========================================================
   COMPONENTE
   ========================================================= */

export function SosProject() {
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
            <img src={sosLogo} alt="" className={styles.logo} />
            <h2 className={styles.title}>
              <span className={styles.accent}>SOS</span> Project
            </h2>
          </div>

          <p className={styles.subtitle}>
            Sistema completo de gerenciamento de emergências
          </p>

          <p className={styles.lead}>
            Central de atendimento para desktop e app móvel para acionamento de
            emergências. Registro de ocorrências, acompanhamento de localização
            em tempo real e gestão completa do atendimento em uma única
            plataforma.
          </p>

          <div className={styles.actions}>
            <a
              href="https://github.com/fpasato/Sos-project"
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
          <img src={sosImage} alt="Interface do SOS Manager" />
        </div>
      </section>

      {/* ================= SOBRE ================= */}
      <section className={styles.block}>
        <header className={styles.blockHead}>
          <BsInfoCircleFill />
          <h3>Sobre o Projeto</h3>
        </header>
        <p className={styles.blockText}>
          Desenvolvido como Projeto Integrador do curso Técnico em Informática
          do SENAC, o SOS Manager simula uma central de atendimento de
          emergências (estilo 190/192/193). O app Alerta SOS permite que o
          cidadão acione socorro com um toque e compartilhe sua localização em
          tempo real. Juntos, formam uma solução completa para gestão de
          ocorrências.
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
              <ul>
                {f.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
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
          Só renderiza se houver itens. Para adicionar/remover
          basta editar o array INTEGRATIONS. */}
      {INTEGRATIONS.length > 0 && (
        <section className={styles.block}>
          <header className={styles.blockHead}>
            <BsLink45Deg />
            <h3>Integrações</h3>
          </header>
          <ul className={styles.integrationGrid}>
            {INTEGRATIONS.map((it) => (
              <li key={`${it.brand}-${it.name}`}>
                <a
                  href={it.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.integration}
                >
                  <img src={it.logo} alt="" className={styles.integrationLogo} />
                  <span className={styles.integrationText}>
                    <span className={styles.integrationBrand}>{it.brand}</span>
                    <span className={styles.integrationName}>{it.name}</span>
                  </span>
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

        <Album title="SOS Manager (desktop)" images={MANAGER_IMAGES} />
        <Album title="SOS Alerta (mobile)" images={MOBILE_IMAGES} />
      </section>

      {/* ================= DISCLAIMER ================= */}
      <aside className={`${styles.block} ${styles.disclaimer}`}>
        <header className={styles.blockHead}>
          <IoShieldCheckmarkOutline />
          <h3>Disclaimer</h3>
        </header>
        <p className={styles.blockText}>
          Sistema desenvolvido para fins educacionais com o objetivo de aplicar
          conceitos de desenvolvimento, comunicação em tempo real,
          geolocalização e boas práticas de segurança.
        </p>
        <span className={styles.disclaimerTag}>Projeto Integrador · SENAC</span>
      </aside>
    </div>
  );
}