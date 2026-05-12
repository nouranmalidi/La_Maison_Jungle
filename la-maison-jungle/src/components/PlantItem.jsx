import CareScale from './CareScale'

import styles from '../styles/PlantItem.module.css'




const PlantItem = ({id, cover, name, water, light, isBestSale}) => {
   const handleClick = (name) => {
    console.log("Plant", name);
   }
   
   
    return (
        <li key={id} className={styles.lmjPlantItem} onClick={() => Event(name)}>
            <img className={styles.lmjPlantItemCover} src={cover} alt={`${name} cover`}/>
            {name}
            
            <div>
                <CareScale careType="water" scaleValue={water} />
                <CareScale careType="light" scaleValue={light} />
            </div>


        </li>
    )
}

export default PlantItem