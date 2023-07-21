import 'App.scss';
import React from "react";
import Cards from "components/Cards";

export default function Template({title, data, favorite}) {
return (
    data.length > 0 ?
    <section>
      <h1>{title}</h1>
      <ul className="movies-container">
        {data.map((item, index) => (
          <Cards
            data={data}
            key={index}
            title={item.title}
            img={item.thumbnail.regular.medium}
            year={item.year}
            category={item.category}
            rating={item.rating}
            id={item.id}
            favorite={favorite}
            movie={item.fav}
          />
        ))}
      </ul>
    </section> 
    : <h1> Not found </h1>
  );
}
