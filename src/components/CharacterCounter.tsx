import { useState } from "react";
import TextInput from "./TextInput"
import StatsDisplay from "./StatsDisplay";


function CharacterCounter() {

    const [text, setText] = useState('')

    const textChange = (newText: string) => {
        setText(newText);

    if (!text) {

        return textChange
    }

    }

    return (
    <div>

        <h2>Text Input:</h2>
        <TextInput onTextChange={textChange}/>
        <StatsDisplay/>
    
    </div>)
}

export default CharacterCounter;