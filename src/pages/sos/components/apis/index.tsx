import styles from "./styles.module.css";

import SupabaseIcon from "../../../../assets/icons/supabase.png";
import CapacitorIcon from "../../../../assets/icons/capacitor.png";
import NotificationsIcon from "../../../../assets/icons/notifications.png";

const apis = [
  "Supabase Auth",
  "Supabase Realtime",
  "Supabase Edge Functions",
  "Capacitor Geolocation",
  "Push Notifications",
];

const apisLogos: Record<string, string> = {
  "supabase auth": SupabaseIcon,
  "supabase realtime": SupabaseIcon,
  "supabase edge functions": SupabaseIcon,
  "capacitor geolocation": CapacitorIcon,
  "push notifications": NotificationsIcon,
};

const links: Record<string, string> = {
  "Supabase Auth": "https://supabase.com/docs/guides/auth",
  "Supabase Realtime": "https://supabase.com/docs/guides/realtime",
  "Supabase Edge Functions": "https://supabase.com/docs/guides/functions",
  "Capacitor Geolocation": "https://capacitorjs.com/docs/apis/geolocation",
  "Push Notifications": "https://capacitorjs.com/docs/apis/push-notifications",
};

export function Apis() {
  const getLogoKey = (tech: string) => {
    return tech.toLowerCase().replace(/[-.]/g, "");
  };
  return (
    <div className={styles.techsContainer}>
      {apis.map((api) => (
        <a
          key={api}
          href={links[api]}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.techItem}
        >
          <img src={apisLogos[getLogoKey(api)]} alt={api} />
          {api}
        </a>
      ))}
    </div>
  );
}
