import styles from "./Header.module.scss";
import React from "react";
import { ReactComponent as Logo } from "./assets/logo.svg";
import { ReactComponent as IconHome } from "./assets/icon-nav-home.svg";
import { ReactComponent as IconMovies } from "./assets/icon-nav-movies.svg";
import { ReactComponent as IconSeries } from "./assets/icon-nav-tv-series.svg";
import { ReactComponent as IconFav } from "./assets/icon-nav-bookmark.svg";
import user from "./assets/user.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className={styles.header}>
            <ul className={styles.nav}>
                <li className={styles.nav_item}> 
                    <Link to="/"> <Logo /> </Link>
                </li>
                <li className={styles.nav_item}>
                    <Link to="/"> <IconHome /> </Link>
                </li>
                <li className={styles.nav_item}>
                    <Link to="/movies"> <IconMovies /> </Link>
                </li>
                <li className={styles.nav_item}>
                    <Link to="/series"> <IconSeries /> </Link>
                </li>
                <li className={styles.nav_item}>
                    <Link to="/fav"> <IconFav /> </Link>
                </li>
            </ul>
        <a href="/" className={styles.header_user}>
            <img src={user} alt="Usuario"/>
        </a>
      </nav>
    </header>
  );
}
