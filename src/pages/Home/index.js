import 'App.scss';
import React from 'react';
import Cards from 'components/Cards';
import Trending from 'components/Trending';

export default function Home({data}) {
  return (
    data.length > 0 ?
    <>
    <Trending data={data}/>
      <section >
        <h1>Recomend for you</h1> 
        <ul className="movies-container">
            {data.map( (item, index) => <Cards
            key={index} 
            title={item.title} 
            img={item.thumbnail.regular.medium} 
            year={item.year} 
            category={item.category}
            rating={item.rating}
            />)}
        </ul>
      </section> 
    </>
    : <h1>Busca não encontrada</h1>  
  )
}
