import styles from "./styles.module.css";

import { FaMusic, FaYoutube } from "react-icons/fa";
import { RiRadioLine } from "react-icons/ri";
import { IoMdDownload } from "react-icons/io";
import { MdOndemandVideo } from "react-icons/md";
import { BiSolidPlaylist } from "react-icons/bi";

const icons = {
  library: <FaMusic />,
  youtube: <FaYoutube />,
  radio: <RiRadioLine />,
  video: <MdOndemandVideo />,
  playlists: <BiSolidPlaylist />,
  download: <IoMdDownload />,
};

const titles = {
  library: "Biblioteca Local",
  youtube: "YouTube sem Anúncios",
  radio: "Rádios do Mundo",
  video: "Player de Vídeos",
  playlists: "Playlists Personalizadas",
  download: "Downloads do YouTube",
};

const descriptions = {
  library: "Organize e reproduza suas músicas locais com rapidez e qualidade.",
  youtube: "Acesse o YouTube diretamente no aplicativo com bloqueio de anúncios.",
  radio: "Ouça milhares de rádios online de diversos países, idiomas e gêneros.",
  video: "Reproduza vídeos locais em diversos formatos em um player integrado.",
  playlists: "Crie e organize playlists personalizadas para suas músicas favoritas.",
  download: "Baixe áudios e vídeos do YouTube diretamente para sua biblioteca.",
};


export function Resources() {
  return (
    <div className={styles.resourcesContainer}>
        {Object.keys(icons).map((key) => (
            <div key={key} className={styles.resourceItem}>
                {icons[key as keyof typeof icons]}
                <h2>{titles[key as keyof typeof titles]}</h2>
                <p>{descriptions[key as keyof typeof descriptions]}</p>
            </div>
        ))}
    </div>
  );
}