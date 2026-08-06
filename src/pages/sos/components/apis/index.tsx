

import styles from "./styles.module.css";

import SupabaseIcon from "../../../../assets/icons/supabase.png";
import CapacitorIcon from "../../../../assets/icons/capacitor.png";
import NotificationsIcon from "../../../../assets/icons/notifications.png";

const apisLogos = {
  "supabase auth": SupabaseIcon,
  "supabase realtime": SupabaseIcon,
  "supabase edge functions": SupabaseIcon,
  "capacitor geolocation": CapacitorIcon,
  "push notifications": NotificationsIcon

};

const apis = [
    "Supabase Auth",
    "Supabase Realtime",
    "Supabase Edge Functions",
    "Capacitor Geolocation",
    "Push Notifications"
];

const links = {

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