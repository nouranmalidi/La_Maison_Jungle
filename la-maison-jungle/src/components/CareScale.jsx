// Label de quantité d'arrosage ou d'éclairage
const quantityLabel = {
    1: 'peu', 
    2: 'modérement',
    3: 'beaucoup'
}






const CareScale = ({scaleValue, careType})=> {
    const range = [1,2,3];
    // Condition ternaire
    const scaleType = careType === 'light' ? '🌞' : '💧';


    return(
        <div 
        // Utilisation de onClick
            onClick={() => {
                alert(`Cette plante a besoin de ${quantityLabel[scaleValue]} ${
                    careType === "light" ? "de lumière" : "d'arrosage"
                }`)
            }}
        >
            {
                range.map((rangeElement) =>  //Balise span attribut key
                    scaleValue >= rangeElement ? (<span key={rangeElement.toString()}>{scaleType}
                    </span>) : null
                )
            }
        </div>
    )
}


export default CareScale;