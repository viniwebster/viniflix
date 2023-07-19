import 'App.scss';
import React from "react";
import Cards from "components/Cards";

export default function Template({selector, title, data}) {
  const movies = data.filter((item) => item.category === selector);

  return (
    movies.length > 0 ?
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
    : <h1> Busca não encontrada </h1>
  );
}
