/**
 * Cart est le composant pour présenter les produits de notres site
 */

// J'importe le fichier Carte.css 
import styles from '../styles/Cart.module.css'



const Cart = () => {
    const Monsterra = 8 
    const Olivier = 13 
    const Anfou = 11

    /**Faut mettre className et non id, j'importe le "style et non la "Cart"*/
    return ( 
       <div className={styles.panier}>

        <h2>Votre panier</h2>
        <ul>
            <li>Monstera : {Monsterra} €</li>
            <li>Olivier : {Olivier} €</li>
            <li>Anfou : {Anfou} €</li>
        </ul>
       

        <p> Total : {Monsterra + Olivier  + Anfou}  €</p>

        </div>
    );
}






export default Cart