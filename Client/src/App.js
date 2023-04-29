import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form';
import Favorites from './components/Favoritos/Favorites';
import './components/GlobalStyles.module.css'

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character'
const API_KEY = 'be72f1e202ae.50a42d70c3d9fa5f89b1'


const email = 'juan@gmail.com'
const password = 'A123_juan'

function App() {
   const location = useLocation();
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false)
   const navigate = useNavigate();

   const onSearch = async (id) => {
     
     
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((characters) => [...characters, data]);
         } else {
            alert('¡No hay personajes con este ID!');
         }
      });
   }
   const onClose = (id) => {

      setCharacters(characters.filter(char => char.id !== id));
      console.log(characters)
   };

   const login = (userData) => {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`)
      .then(({ data }) => {
         const { access } = data;
         setAccess(access);
         access && navigate('/home');
      });
   }
   useEffect(() => {
      !access && navigate('/')
   }, [access, navigate])

   return (
      <div className='App'>
         {
            location.pathname !== '/' && <Nav onSearch={onSearch} a setAccess={setAccess} navigate={navigate} />

         }

         <Routes>

            <Route path='/' element={<Form login={login} />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/about' element={<About />} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/detail/:id' element={<Detail />} />

         </Routes>

      </div>
   );
}

export default App;
