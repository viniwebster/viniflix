import styles from "./Cards.module.scss";
import React from "react";
import { ReactComponent as Play } from "./assets/icon-play.svg";
import { ReactComponent as IconTv } from "./assets/icon-category-tv.svg";
import { ReactComponent as IconMovie } from "./assets/icon-category-movie.svg";
import { ReactComponent as IconFav } from "./assets/icon-bookmark-empty.svg";

export default function Cards({ title, img, year, category, rating, size, slide }) {
  return (
    <li className={`${styles.card} ${styles[size]} ${slide}`}>
      <img src={img} alt={`Poster from ${title}`} />
      <div className={`${styles.card_infos}`}>
        <div className={styles.card_infos_info}>
          <p>{year}</p>
          {category === "Movie" ? <IconMovie /> : <IconTv /> }
          <p>{category}</p>
          <p>{rating}</p>
        </div>
        <h3>{title}</h3>
      </div>
      <div className={styles.overlay}>
        <button className={styles.overlay_btn}>
          <Play />
          Play
        </button>
      </div>
    </li>
  );
}
