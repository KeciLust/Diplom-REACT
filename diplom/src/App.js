import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import MainPage from './components/MainPage';
import CatalogPage from './components/CatalogPage';
import AboutPage from './components/AboutPage';
import ContactsPage from './components/ContactsPage';
import Main from './components/Main';


function App() {
  return (<>
    <BrowserRouter>
      <Header />
      <Main >
      <Routes >
        <Route path='/' element={<MainPage />} />
        <Route path='/catalog.html' element={<CatalogPage />} />
        <Route path='/about.html' element={<AboutPage />} />
        <Route path='/contacts.html' element={<ContactsPage />} />
      </Routes>
      </Main>
      <Footer />
    </BrowserRouter>

  </>)
}

export default App;
