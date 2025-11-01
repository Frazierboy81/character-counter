import { useState } from "react";
import TextInput from "./TextInput"
import StatsDisplay from "./StatsDisplay";


function CharacterCounter() {

    const [text, setText] = useState("");

    const textChange = (newText: string) => {
        setText(() => newText);
    }
        const statsCalculate = (text: string) => {
            const characterCount = text.length;

        const wordCountCalculate = (text: string) =>

        text.length > 0 ? text.trim().split(/\s+/).length : 0;
        const wordCount = wordCountCalculate(text);
        const readingTime = wordCount / 250;
        
        return {
            characterCount,
            wordCount,
            readingTime,
        };
    };

        

    return (
    <div>

        <h2>Text Input:</h2>
        <TextInput onTextChange={textChange}/>

        <StatsDisplay stats={statsCalculate(text)}/>
    
    </div>)
}

export default CharacterCounter;