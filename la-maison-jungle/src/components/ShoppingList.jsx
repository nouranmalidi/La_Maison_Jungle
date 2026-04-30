/**
 * ShoppingList est un component pour lister les produits
 */

import styles from '../styles/ShoppingList.module.css'



// Je crée une liste de fleurs. Par la suite, j'utiliserais la liste pour renvoyer des fleurs
//  depuis le composant ShoppingList
const plantList = [
    {
        name: 'montsera',
        category: 'classique',
        id: '1',
        isBestSale: true,
        isSpecialOffer: true
    },

    {
        name: 'olivier',
        category: 'classique',
        id: '2',
        isBestSale: false,
        isSpecialOffer: false
    },

    {
        name: 'ficus lyrata',
        category: 'classique',
        id: '3',
        isBestSale: false,
        isSpecialOffer: true
    },

    {
        name: 'pothos argenté',
        category: 'classique',
        id: '4',
        isBestSale: false,
        isSpecialOffer: false
    },

    {
        name: 'yucca',
        category: 'premium',
        id: '5',
        isBestSale: false,
        isSpecialOffer: true
    },

    {
        name: 'palmier',
        category: 'premium',
        id: '6',
        isBestSale: false,
        isSpecialOffer: false
    },

    {
        name: 'langi langi',
        category: 'premium',
        id: '7',
        isBestSale: false,
        isSpecialOffer: false
    }
];



// Je crée mon composant
const ShoppingList = () => {
    return (
        <ul className={styles.lmj}>
            {
                plantList.map((plant) => (
                    <li key={plant.id} className={styles.lmjPlantItem}>
                        {plant.isBestSale ? <span>++++</span> : <span>----</span>} 
                        {plant.name}
                        {plant.isSpecialOffer ? <span>Réduction 🤩🤑 </span> : <span>😨</span>}
                        </li>
                )



            )
            }
            
        </ul>
    )
}


export default ShoppingList