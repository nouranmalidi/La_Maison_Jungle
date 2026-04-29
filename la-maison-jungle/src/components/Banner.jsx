/**
 * Banner est le composant pour présenter la bannière (la barre de navigation)  
 */


// J'importe le fichier Bannier.csss au composant Banner.jsx
import styles from '../styles/Banner.module.css'



// J'importe le logo
import Logo from '../assets/olivier-logo.webp'

// On défint le composant Banner qui est également une fonction avec un message h1 
const Banner = () => {
    
    const title = "Bienvenu à la maison"

    return (
        <div className={styles.banner}>
            <h1 className={styles.title}> {title} </h1>
            <img src={Logo} alt="Logo" className={styles.logo} />
        </div>
    
);
}

// Méthode d'openclassrooom
// createRoot(document.getElementById('root')).render(<Banner />);






// export du composant Banner 
export default Banner