import styles from "./Trending.module.scss";
import React from "react";
import trending from "data.json";
import Swiper from "swiper";
import "swiper/css";
import 'swiper/css/bundle';
import Cards from "components/Cards";

export default function Trending() {
  const itensTrending = trending.filter((item) => item.isTrending);
  const swipper = new Swiper(".swiper", {
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 100,
  });
  return (
    <section className={styles.trending}>
      <h2>Trending</h2>
      <div className={`swiper`}>
        <ul className={`swiper-wrapper ${styles.slides}`}>
          {itensTrending.map((item, index) => (
            <Cards 
            key={index}
            title={item.title} 
            img={item.thumbnail.regular.medium} 
            year={item.year} 
            category={item.category}
            rating={item.rating}
            size={'large'}
            slide={'swiper-slide'}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
