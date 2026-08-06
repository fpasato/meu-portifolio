

import styles from "./styles.module.css";

import reactLogo from "../../../../assets/waves/techs/react.png";
import electronLogo from "../../../../assets/waves/techs/electron.png";
import sqliteLogo from "../../../../assets/waves/techs/sqlite.png";
import threejsLogo from "../../../../assets/waves/techs/threejs.png";
import nodejsLogo from "../../../../assets/waves/techs/nodejs.png";
import ytdlpLogo from "../../../../assets/waves/techs/ytdlp.png";
import ffmpegLogo from "../../../../assets/waves/techs/ffmpeg.png";
import zustandLogo from "../../../../assets/waves/techs/zustand.svg";


const techLogos = {
  react: reactLogo,
  electron: electronLogo,
  sqlite: sqliteLogo,
  threejs: threejsLogo,
  nodejs: nodejsLogo,
  ytdlp: ytdlpLogo,
  ffmpeg: ffmpegLogo,
  zustand: zustandLogo,
};

const techs = [
    "React",
    "Electron",
    "SQLite",
    "Three.js",
    "Node.js",
    "YTdlp",
    "FFmpeg",
    "Zustand"
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