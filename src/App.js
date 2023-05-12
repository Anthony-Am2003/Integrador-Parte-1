import './App.css';
import Cards from './components/Cards/Cards.jsx';
import style from './App.module.css'
import NavBar from './components/NavBar/NavBar';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Navigate, Route, useLocation} from 'react-router-dom';
import { Routes } from 'react-router-dom';
import About from './Pages/About';
import Detail from './Pages/Detail';
import Form from './components/Forms/form';
import { useNavigate } from 'react-router-dom';
import Favorites from './components/NavBar/Favorites';

function App() {

   const [characters, setCharacters] = useState([]);
   const navigate = useNavigate();
   const location = useLocation();
   const [access, setAccess] = useState(false);
   const Password = '12345678';
   const Email = 'tonyaamb2003@gmail.com';

function onShearch(id) {
   axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
}
const onClose = (id) => {
   setCharacters(
      characters.filter((char)=>{
         return char.id !== Number(id);
      })
   )
}

const login = (userData) => {
   if(userData.password === Password && userData.email === Email){
      setAccess(true);
      navigate('/home');
   }
}

useEffect(() => {
   !access && navigate('/');
}, [access]);

   return (
      <div>
         {location.pathname === '/'? <Form login = {login}/> : <NavBar onSearch={onShearch}></NavBar>}
   <Routes>
         <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
         <Route path='/About' element={<About/>}/>
         <Route path='/detail/:id' element={<Detail/>}/>
         <Route path='/login' element={<Form/>}/>
         <Route path='/favorite' element={<Favorites/>}/>
      
      </Routes>
      </div>

   );
}

export default App;
