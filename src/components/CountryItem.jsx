import styles from "./CountryItem.module.css";
import { formatEmoji } from "../utils/formatter";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span>{country.emoji ? formatEmoji(country.emoji) : ""}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
