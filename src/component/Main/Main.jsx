import React from 'react'
import './main.css'
import DisplayPicture from './zino_logo.png'

function Main() {
    return (
        <main>
            <div className="main-body">
                <h1>Hello 👋🏽</h1>
                <h2>Welcome to my page where I bring live to aesthetic design</h2>
                <p>I am a front-end developer who loves bringing life to aesthetics. 
                A tech enthusiast with curiosity to problem analysis and solving through learning, unlearning, and relearning. 
                I am open to offers and would love to work on products that bring value.
                </p>
                <a href="https://drive.google.com/file/d/1QygqB7JyiDxfuov_hSmZ_HB6GS2cohzK/view?usp=sharing" download="Elozino's CV">
                    <button className="main-btn">DOWNLOAD CV</button>
                </a>
            </div>
            <div className="main-image">
                <img src={DisplayPicture} alt="My Portrait" />
            </div>
        </main>
    )
}

export default Main
