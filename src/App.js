import Header from 'components/Header';
import './styles/style.scss';
import Search from 'components/Search';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Template from 'pages/Template';
import data from "data.json";
import { useState } from 'react'

function App() {

  const [dados, setDados] = useState(data);

  function search(input) {
    const filtrados = data.filter(item => item.title.toLowerCase().includes(input));
    setDados(filtrados);
  }

  function aoFavoritar(id) {
  setDados(dados.map(item => {
      if (item.id === id) {
        item.fav = !item.fav
      }
      return item
    }))
  }

  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <main className="main">
          <Search find={search}/>
          <Routes>
            <Route index element={<Home data={dados} favorite={aoFavoritar} />} />  
            <Route path='/movies' element={<Template favorite={aoFavoritar} title={"Movies"} data={dados.filter((item) => item.category === "Movie")} />}/>
            <Route path='/series' element={<Template favorite={aoFavoritar} title={"Series"} data={dados.filter((item) => item.category === "TV Series")} />}/>
            <Route path='/fav' element={<Template favorite={aoFavoritar} title={"Favorites"} data={dados.filter((item) => item.fav)} />}/>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
