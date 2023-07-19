import Header from 'components/Header';
import './styles/style.scss';
import Search from 'components/Search';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Template from 'pages/Template';
import data from "data.json";
import { useState } from 'react';

function App() {

  const [dados, setDados] = useState(data);

  function search(input) {
    const filtrados = data.filter(item => item.title.toLowerCase().includes(input));
    setDados(filtrados);
  }

  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <main className="main">
          <Search find={search}/>
          <Routes>
            <Route index element={<Home data={dados} />} />  
            <Route path='movies' element={<Template selector="Movie" title={"Movies"} data={dados} />}/>
            <Route path='series' element={<Template selector="TV Series" title={"Series"} data={dados} />}/>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
