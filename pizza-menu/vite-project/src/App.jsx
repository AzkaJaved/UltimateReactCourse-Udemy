import { useState } from 'react'
import Header from './components/Header.';
import Footer from './components/Footer';
import Menu from './components/Menu';


function App() {
  return (
    <div className='container'>
    <Header/>
    <Menu/>
    <Footer/>
      {/* <Pizza name="Pizza Spinaci" ingredients="Tomato, mozarella, spinach, and ricotta cheese" image="/spinaci.jpg"/> */}
    </div>
  )
}

export default App
