import React from 'react'
import '../css/Hero.css'

const Hero: React.FC = () => {
    return (
        <div className="hero-container-section hero">
            <h1 className='name'> Louise Raffray</h1>
            <p className='job'>Junior Full Stack Software Engineer</p>
            <p className='abt'> As a newly minted Software Engineer from General Assembly, my entry into the tech industry is fueled by curiosity, adaptability, and an unyielding drive for knowledge and growth. </p>
            <img src="/assets/hero/me.png" alt="hero-img" className="me"/>
        </div>
    )
}

export default Hero;