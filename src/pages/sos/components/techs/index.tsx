

import styles from "./styles.module.css";

import reactLogo from "../../../../assets/waves/techs/react.png";
import electronLogo from "../../../../assets/waves/techs/electron.png";
import nodejsLogo from "../../../../assets/waves/techs/nodejs.png";
import supabaseLogo from "../../../../assets/icons/supabase.png";
import capacitorLogo from "../../../../assets/icons/capacitor.png";
import leafletLogo from "../../../../assets/icons/leaflet.jpeg";
import apexchartsLogo from "../../../../assets/icons/apexcharts.png";
import postgreesqlLogo from "../../../../assets/icons/postgreesql.png";


const techLogos: Record<string, string> = {
  react: reactLogo,
  electron: electronLogo,
  nodejs: nodejsLogo,
  supabase: supabaseLogo,
  capacitor: capacitorLogo,
  leaflet: leafletLogo,
  apexcharts: apexchartsLogo,
  postgresql: postgreesqlLogo,
};    

const techs: string[] = [
    "React",
    "Electron",
    "Node.js",
    "Supabase",
    "Capacitor",
    "Leaflet",
    "ApexCharts",
    "PostgreSQL"
];

export function Techs() {
    const getLogoKey = (tech: string) => {
        return tech.toLowerCase().replace('.', '');
    };

    return (
        <div className={styles.techsContainer}>
            {techs.map((tech) => (
                <div key={tech} className={styles.techItem}>
                    <img src={techLogos[getLogoKey(tech)]} alt={tech} />{tech}
                </div>
            ))}
        </div>
    );
}