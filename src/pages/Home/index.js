import styles from './Home.module.scss';
import 'App.scss';
import React from 'react';
import movies from 'data.json';
import Cards from 'components/Cards';
import Trending from 'components/Trending';

export default function Home() {
  return (
    <>
    <Trending />
      <section >
        <h1>Recomend for you</h1> 
        <ul className="movies-container">
            {movies.map( (movie, index) => <Cards
            key={index} 
            title={movie.title} 
            img={movie.thumbnail.regular.medium} 
            year={movie.year} 
            category={movie.category}
            rating={movie.rating}
            />)}
        </ul>
      </section>
    </>
  )
}
