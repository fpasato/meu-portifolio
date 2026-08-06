import styles from "./styles.module.css";
import { Resources } from "../resources";
import { Techs } from "../techs";
import { Apis } from "../apis";
import { Album } from "../album";

import { IoShieldCheckmarkOutline } from "react-icons/io5";


export function About() {
  return (
    <div className={styles.about}>
      <div className={styles.aboutContent}>
        <h1>Sobre o Projeto</h1>
        <p>
          Desenvolvido como Projeto Integrador do curso Técnico em Informática
          do SENAC, o SOS Manager simula uma central de atendimento de
          emergências (estilo 190/192/193). O app Alerta SOS permite que o
          cidadão acione socorro com um toque e compartilhe sua localização em
          tempo real. Juntos, formam uma solução completa para gestão de
          ocorrências.
        </p>
      </div>

      <h2>Recursos</h2>
      <Resources />
      <h2>Tecnologias</h2>
      <Techs />
      <h2>APIs e Integrações</h2>
      <Apis />
      <h2>Galeria de Screenshots</h2>
      <Album />

      <div className={styles.disclaimer}>
        <IoShieldCheckmarkOutline />
        <p>
          Sistema desenvolvido para fins educacionais com o objetivo de aplicar
          conceitos de desenvolvimento, comunicação em tempo real,
          geolocalização e boas práticas de segurança.
        </p>
        <span>Projeto Integrador - SENAC</span>
      </div>
    </div>
  );
}
