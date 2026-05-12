/**
 * ShoppingList est un component pour lister les produits
 */

import styles from '../styles/ShoppingList.module.css'

import CareScale from './CareScale'

import PlantItem from './PlantItem'

import QuestionForm from './QuestionForm'


import monstera from '../assets/monstera-logo.webp'
import olivier from '../assets/olivier-logo.webp'
import anfou from '../assets/anfou-logo.webp'


// Je crée une liste de fleurs. Par la suite, j'utiliserais la liste pour renvoyer des fleurs
//  depuis le composant ShoppingList
const plantList = [
    {
        name: 'montsera', 
        category: 'classique',
        id: '1',
        isBestSale: true,
        isSpecialOffer: true,
        water: 3,
        light: 1,
        cover: monstera
    },

    {
        name: 'olivier',
        category: 'classique',
        id: '2',
        isBestSale: false,
        isSpecialOffer: false,
        water: 3,
        light: 1,
        cover: monstera

    },

    {
        name: 'ficus lyrata',
        category: 'classique',
        id: '3',
        isBestSale: false,
        isSpecialOffer: true,
        water: 1,
        light: 2,
        cover: monstera
    },

    {
        name: 'pothos argenté',
        category: 'classique',
        id: '4',
        isBestSale: false,
        isSpecialOffer: false,
        water: 2,
        light: 2,
        cover: monstera
    },

    {
        name: 'yucca',
        category: 'premium',
        id: '5',
        isBestSale: false,
        isSpecialOffer: true,
        water: 1,
        light: 1,
        cover: monstera
    },

    {
        name: 'palmier',
        category: 'premium',
        id: '6',
        isBestSale: false,
        isSpecialOffer: false,
        water: 2,
        light: 3, 
        cover: monstera
    },

    {
        name: 'langi langi',
        category: 'premium',
        id: '7',
        isBestSale: false,
        isSpecialOffer: false,
        water: 3,
        light: 2, 
        cover: monstera
    }
];



// Je crée mon composant ShoppingList
const ShoppingList = () => {
    return (
        <div>
            <ul className={styles.lmjPlantList} >
            {
                plantList.map(({id, name, cover, water, light}) => (
                    <PlantItem 
                    key={id}
                    id={id}
                    name={name}
                    cover={cover}
                    water={water}
                    light={light}
                    />
                )
            )
            }


            </ul>



        </div>
    )
}


export default ShoppingList