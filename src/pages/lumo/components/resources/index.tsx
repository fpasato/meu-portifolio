import styles from "./styles.module.css";
import type { ReactNode } from "react";

import { FaRegUser, FaWallet } from "react-icons/fa";
import { BiTransfer } from "react-icons/bi";
import { FaPix } from "react-icons/fa6";
import { IoCardSharp } from "react-icons/io5";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaHistory } from "react-icons/fa";

interface ResourceProps {
  icon: ReactNode;
  name: string;
}

const resources: ResourceProps[] = [
  {
    icon: <FaRegUser />,
    name: "Cadastro e autenticação",
  },
  {
    icon: <BiTransfer />,
    name: "Transferências",
  },
  {
    icon: <FaPix />,
    name: "Sistema PIX",
  },
  {
    icon: <IoCardSharp />,
    name: "Cartões de crédito e débito",
  },
  {
    icon: <LiaFileInvoiceSolid />,
    name: "Simulação de empréstimos",
  },
  {
    icon: <BsGraphUpArrow />,
    name: "Simulação de investimentos",
  },
  {
    icon: <FaWallet />,
    name: "Carteira de investimentos",
  },
  {
    icon: <FaHistory />,
    name: "Histórico de operações",
  },
];

export function Resources() {
  return (
    <div className={styles.resources}>
      <h2>Principais funcionalidades</h2>

      <ul className={styles.resourcesList}>
        {resources.map((resource, index) => (
          <li key={index} className={styles.resource}>
            {resource.icon}
            <span>{resource.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
