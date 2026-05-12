 /**
 * useState est une librairie de React qui permet de stocker des donner dans des 
 * composant et les mettre a jour automatiquement
 * event.preventDefaut permet de ne pas recharger la page après le submit
 */
import { useState } from "react"


const QuestionForm = () => {

    // Je définis une variable pour récuper la valeur de mon input
    

        // Je definis deux variable en une ligne car ils sont le même parents et useState ('') est par defaut donc vide
        const [inputValue, setInputValue] = useState ('')

        const checkValue = (value) => {
            if (!value.includes('p')) {
                setInputValue(value)
            }
        }

        //Je prends pour cible la valeur de question qui vient de name 
      //  const question = event.target.textarea.value

        // J'actionne l'alerte 
      //  alert(question)
    

    return (
        <div>
            <textarea value={inputValue} 
            defaultValue='Tapez votre texte'
            onChange={(e) => checkValue(e.target.value)}
            />
            <button onClick={() => alert(inputValue)}>Cliquez</button>

        </div>
    )
}

export default QuestionForm