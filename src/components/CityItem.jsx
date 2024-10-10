import styles from "./CityItem.module.css";
import { formatDate, formatEmoji } from "../utils/formatter";
import { Link } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";

export default function CityItem({ city }) {
  const { currentCity } = useCities();

  const {
    cityName,
    emoji,
    date,
    id,
    position: { lat, lng },
  } = city;

  return (
    <li>
      <Link
        className={`${styles.cityItem} ${
          id === currentCity.id ? styles["cityItem--active"] : ""
        }`}
        to={`${id}?lat=${lat}&lng=${lng}`}
      >
        <span className={styles.emoji}>{formatEmoji(emoji)}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
}
