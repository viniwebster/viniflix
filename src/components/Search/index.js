import styles from './Search.module.scss';
import React from 'react';
import { ReactComponent as IconSearch } from './assets/icon-search.svg';

export default function Search() {
  return (
    <form className={styles.form}>
        <IconSearch /> 
        <label className={styles.search}>
            <input type='text' placeholder='Search' className={styles.search_input} />
        </label>
    </form>
  )
}
