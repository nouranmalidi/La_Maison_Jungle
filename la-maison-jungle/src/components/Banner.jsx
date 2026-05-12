/**
 * Banner est le composant pour présenter la bannière (la barre de navigation)  
 */


// J'importe le fichier Bannier.csss au composant Banner.jsx
import styles from '../styles/Banner.module.css'



// J'importe le logo
import Logo from '../assets/olivier-logo.webp'


/**
 * 
 * @param {*} param0 
 * @returns 
 * Le composant banner.js prend comme props ses enfants déclaré dans le composant App;jsx
 * J'utilise {children} pour fair appel aux props veanat du composant <Banner> déclaré dans le composant App.jsx
 * Le composant Banner.jsx retourne une div qui contient les enfants {children}
 */






// On défint le composant Banner qui est également une fonction avec un message h1 
const Banner = ({children}) => {
    
    const title = "Bienvenu à la maison"

    return (
        <div className={styles.banner}>
           
            {children}
        </div>
    
);
}

// Méthode d'openclassrooom
// createRoot(document.getElementById('root')).render(<Banner />);






// export du composant Banner 
export default Banner