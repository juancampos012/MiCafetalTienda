import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';

function App() {

  return (
    <>
    <Navbar/>
    <ItemListContainer greeting="¡Hola! Bienvenido a mi tienda en línea." />
    </>
  )
}

export default App
