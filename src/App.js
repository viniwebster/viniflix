import Header from 'components/Header';
import './styles/style.scss';
import Search from 'components/Search';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import PageMovies from 'pages/Movies';
import Series from 'pages/Series';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <main className="main">
          <Search />
          <Routes>
            <Route index element={<Home />} />  
            <Route path='movies' element={<PageMovies />}/>
            <Route path='series' element={<Series />}/>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
