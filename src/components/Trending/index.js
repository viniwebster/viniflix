import styles from "./Trending.module.scss";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Cards from "components/Cards";

export default function Trending({ data }) {
  const itensTrending = data.filter((item) => item.isTrending);

  return (
    itensTrending.length > 0 ? 
    <section className={styles.trending}>
      <h2>Trending</h2>
      <Swiper spaceBetween={50} slidesPerView={3}>
        <ul>
          {itensTrending.map((item, index) => (
            <SwiperSlide>
              <Cards
                key={index}
                title={item.title}
                img={item.thumbnail.regular.medium}
                year={item.year}
                category={item.category}
                rating={item.rating}
                size={"large"}
              />
            </SwiperSlide>
          ))}
        </ul>
      </Swiper>
    </section>
    : ""
  );
}
