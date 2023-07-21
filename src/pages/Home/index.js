import 'App.scss';
import React from 'react';
import Trending from 'components/Trending';
import Template from 'pages/Template';

export default function Home({data, favorite}) {
  return (
    data.length > 0 ?
    <>
      <Trending data={data} favorite={favorite}/>
      <Template title={"Recommended for you"} data={data} favorite={favorite}/>
    </>
    : <h1>Not found</h1>  
  )
}
