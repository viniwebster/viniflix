import 'App.scss';
import React from "react";
import data from "data.json";
import Cards from "components/Cards";

export default function Template({selector, title}) {
  const movies = data.filter((item) => item.category === selector);

  return (
    <section>
      <h1>{title}</h1>
      <ul className="movies-container">
        {movies.map((item, index) => (
          <Cards
            key={index}
            title={item.title}
            img={item.thumbnail.regular.medium}
            year={item.year}
            category={item.category}
            rating={item.rating}
          />
        ))}
      </ul>
    </section>
  );
}
