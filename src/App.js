import Header from 'components/Header';
import './styles/style.scss';
import Search from 'components/Search';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Template from 'pages/Template';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <main className="main">
          <Search />
          <Routes>
            <Route index element={<Home />} />  
            <Route path='movies' element={<Template selector="Movie" title={"Movies"} />}/>
            <Route path='series' element={<Template selector="TV Series" title={"Series"}/>}/>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
