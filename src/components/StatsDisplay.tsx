import { useState } from "react";

function StatsDisplay() {
    const [characterCount, setCharacterCount] = useState(0)
        const handleCount = (newCount: number) => {
            setCharacterCount(newCount ++);
        }

            if (characterCount > 0) {
                return handleCount
            }



    return (
        <div>
            <h3>Stats</h3>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
            <p>Characters</p>
            <p>Words</p>
            <p>Reading Time</p>
        </div>

        </div>
    )
}

export default StatsDisplay;