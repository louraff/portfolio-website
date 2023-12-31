import React from "react"
import '../css/Interests.css'

const Interests: React.FC = () => {
    return (
        <div className="container-section">
            <ul>
                <li>Immersed in the emotionally dense world of Charles Bukowski currently, my love for literature extends to penning short stories and crafting verses of my own. I've found it fuels my creativity and broadens my thinking.</li>
                <br/>
                <li>My love for the piano keys isn't just about creating sweet harmonies - it's also my personal code for refining focus and precision.</li>
            </ul>
            <img src="/assets/hero/read.png" alt="hero-img" className="read"/>
        </div>
    )
}

export default Interests