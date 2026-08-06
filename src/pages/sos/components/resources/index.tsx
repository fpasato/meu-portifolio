import styles from "./styles.module.css";

import { IoDesktopOutline } from "react-icons/io5";
import { ImMobile } from "react-icons/im";

export function Resources() {
  return (
    <div className={styles.resources}>
      <div className={styles.resourceItem}>
        <div className={styles.resourceItemHeader}>
          <IoDesktopOutline />
          <h3>SOS Manager (desktop)</h3>
        </div>
        <ul>
          <li>Recebimento de chamados em tempo real com alarme sonoro</li>
          <li>Dashboard com gráficos e indicadores</li>
          <li>Mapa interativo com rastreamento de localização</li>
          <li>Gestão de atendentes e usuários com níveis de acesso</li>
          <li>Filtros avançados por periodo, status e localização</li>
          <li>Auditoria completa de ações administrativas</li>
        </ul>
      </div>
      <div className={styles.resourceItem}>
        {" "}
        <div className={styles.resourceItemHeader}>
          <ImMobile />
          <h3>Alerta SOS (mobile)</h3>
        </div>
        <ul>
          <li>Acionamento de emergência com um único toque</li>
          <li>Compartilhamento de localização em tempo real</li>
          <li>Acompanhamento do status do chamado</li>
          <li>Histórico de ocorrências</li>
          <li>Teste de localização e permissões</li>
          <li>Notificações e atualizações em tempo real</li>
        </ul>
      </div>
    </div>
  );
}
