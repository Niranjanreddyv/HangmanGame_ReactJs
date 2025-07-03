import { getMaskedString } from "./MaskingUtility";

function MaskedText({text, guessedLetters}){

    const maskedString = getMaskedString(text, guessedLetters);

    return(
        <>
            {maskedString.map((letter, index) =>{
                return(
                        <span key={index} className="mx-4 text-4xl "> 
                            {letter}
                        </span>
                    
                )
            })}

        </>
    )



}

export default MaskedText;