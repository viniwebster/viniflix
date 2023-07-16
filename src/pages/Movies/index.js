import 'App.scss';
import React from "react";
import Movies from "data.json";
import Cards from "components/Cards";

export default function PageMovies() {
  const movies = Movies.filter((item) => item.category === "Movie");

  return (
    <section>
      <h1>Movies</h1>
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
