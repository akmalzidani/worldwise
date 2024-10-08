import MapView from "../components/MapView";
import Sidebar from "../components/Sidebar";
import styles from "./AppLayout.module.css";

export default function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <MapView />
    </div>
  );
}
