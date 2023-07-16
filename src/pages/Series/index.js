import React from 'react';
import data from 'data.json';
import Cards from 'components/Cards';

export default function Series() {
    const series = data.filter((item) => item.category === "TV Series");

  return (
    <section>
        <h1>Series</h1>
        <ul className="movies-container">
        {series.map((item, index) => (
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
  )
}
