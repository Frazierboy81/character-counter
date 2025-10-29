import { useState } from "react";
import TextInput from "./TextInput"


function CharacterCounter() {

    const [text, setText] = useState('')

    const textChange = (newText: string) => {
        setText(newText);
    }

    return (<div>

        <h2>Text Input: {text}</h2>
        <TextInput onTextChange={textChange}/>
    
    </div>)
}

export default CharacterCounter;