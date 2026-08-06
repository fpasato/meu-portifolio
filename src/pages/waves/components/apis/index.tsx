

import styles from "./styles.module.css";

import radioBrowserApiLogo from "../../../../assets/waves/api/radio-browser-api.png";
import lrclibApiLogo from "../../../../assets/waves/api/lrclib.png";
import ytdlpApiLogo from "../../../../assets/waves/techs/ytdlp.png";
import googleAuthLogo from "../../../../assets/waves/api/Google_Authenticator.svg";
import ghosteryLogo from "../../../../assets/waves/api/ghostery.png";



const apisLogos = {
  "radio browser api": radioBrowserApiLogo,
  "lrclib": lrclibApiLogo,
  "ytdlp": ytdlpApiLogo,
  "google auth": googleAuthLogo,
  "ghostery adblocker": ghosteryLogo

};

const apis = [
    "Radio Browser API",
    "LRCLIB",
    "YT-DLP",
    "Google Auth",
    "Ghostery AdBlocker"
];

const links = {
    "Radio Browser API": "https://www.radio-browser.info/",
    "LRCLIB": "https://lrclib.net/",
    "YT-DLP": "https://github.com/yt-dlp/yt-dlp",
    "Google Auth": "https://developers.google.com/identity/protocols/oauth2",
    "Ghostery AdBlocker": "https://www.ghostery.com/"
};

export function Apis() {

    const getLogoKey = (tech: string) => {
        return tech.toLowerCase().replace(/[-.]/g, '');
    };
    return (
        <div className={styles.techsContainer}>
            {apis.map((api) => (
                <a key={api} href={links[api]} target="_blank" rel="noopener noreferrer" className={styles.techItem}>
                    <img src={apisLogos[getLogoKey(api)]} alt={api} />{api}
                </a>
            ))}
        </div>
    );  
}