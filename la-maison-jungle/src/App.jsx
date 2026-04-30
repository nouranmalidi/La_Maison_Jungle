import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


import ShoppingList from './components/ShoppingList.jsx'

// J'importe le composant Banner.jsx, j'indique la route pour trouver le composant
import Banner from './components/Banner.jsx'

// J'importe le composant Cart 
import Cart from './components/Cart.jsx'


// Je déclare le composant App qui return le composant Banner
function App() {
  
  return (
    <>
     <Banner />
      
      <Cart />

      <ShoppingList />
    </>
  )
}

// J'exporte le composant App
export default App
