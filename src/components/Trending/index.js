import styles from "./Trending.module.scss";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Cards from "components/Cards";

export default function Trending({ data }) {
  const itensTrending = data.filter((item) => item.isTrending);

  return itensTrending.length > 0 ? (
    <section className={styles.trending}>
      <h2>Trending</h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={220}
        breakpoints={{
          900: {
            slidesPerView: 2,
          },

          1700: {
            slidesPerView: 3,
          },
        }}
        autoplay={{ delay: 5000 }}
      >
        <ul>
          {itensTrending.map((item, index) => (
            <SwiperSlide style={{ height: 250 }}>
              <Cards
                key={index}
                title={item.title}
                img={item.thumbnail.regular.large}
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
  ) : (
    ""
  );
}
