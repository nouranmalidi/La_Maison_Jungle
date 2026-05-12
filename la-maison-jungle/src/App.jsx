import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import QuestionForm from './components/QuestionForm.jsx'

import ShoppingList from './components/ShoppingList.jsx'

// J'importe le composant Banner.jsx, j'indique la route pour trouver le composant
import Banner from './components/Banner.jsx'

// J'importe le composant Cart 
import Cart from './components/Cart.jsx'

import Logo from './assets/olivier-logo.webp'

import Footer from './components/Footer.jsx'


// J'importe le fichier Bannier.csss au composant Banner.jsx
import styles from './styles/Banner.module.css'


/**
 * 
 * @returns 
 * Lorsque j'appelle le composant <Banner> j'y insère deux enfants <h1> et <img> 
 * Ces enfants sont récupérer dans Banner.jsx a l'aide de props {children}
 */



// Je déclare le composant App qui return le composant Banner
function App() {
  const title = "Bienvenu à la maison"
  return (
    <>
     <Banner>
       <img src={Logo} alt="Logo" className={styles.logo} />
        <h1 className={styles.title}> {title} </h1>

     </Banner>
      
      <Cart />

      <ShoppingList />

      <QuestionForm />

      <Footer />
    </>
  )
}

// J'exporte le composant App
export default App
