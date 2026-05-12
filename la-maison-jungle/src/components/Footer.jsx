import { useState } from "react"

import styles from '../styles/Footer.module.css'

const Footer = () => {
    const [inputValue, setInputValue] = useState ('')

    const handleInput = (e) => {
        setInputValue(e.target.value)
    }

    // Evenment quand je clique en dehors de ma zone de de blur, en dehors d'un form par ex
    const handleBlur = () => {
        if (!inputValue.includes("@")){
            alert("Votre adresse email est incorrecte.")
        }
    }
    return (
        <footer className={styles.lmjFooter}>
            <div lmjFooterElement>
                Pour les passionnés de plante 🏵️🪴
            </div>

            <div className={styles.lmjFotterEmail}>
                Laissez-nous votre email:
            </div>

                <input placeholder="Entrez votre email"
                value={inputValue}
                onChange={handleInput}
                onBlur={handleBlur}
                />
        </footer>
    )



}


export default Footer