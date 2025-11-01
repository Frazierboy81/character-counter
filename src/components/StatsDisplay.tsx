import { useState } from "react";

export interface TextStats {
    characterCount: number;
    wordCount: number;
    readingTime: number;
}

    export interface StatsDisplayProps {
        stats: TextStats;
        showReadingTime?: boolean
    }

function StatsDisplay({stats, showReadingTime = true}: StatsDisplayProps) {
    
    const {characterCount, wordCount, readingTime} = stats
        

    return (
        <div>
            <h3>Stats</h3>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
            <div className="flex flex-col">Characters: {characterCount}</div>
            <div>Words {wordCount}</div>
            <div>Reading Time</div>

            {showReadingTime && <div>Reading Time: {Math.ceil(readingTime)}</div>}
            
        </div>
        
        <div style={{display: 'flex', justifyContent: "space-around"}}>  {readingTime}</div>
        <div></div>

        </div>
    )
}

export default StatsDisplay;