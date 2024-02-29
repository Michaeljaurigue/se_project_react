import React from 'react';
import './HeroBanner.css'; // Assume you'll style your component in this CSS file

const HeroBanner = ({ onSignUp }) => {
    return (
        <div className="hero-banner">
            <h1>WTWR</h1>
            <p>The What To Wear App</p>
            <p>🌟 Unleash the Power of Fashion with the What To Wear App! 🌟
                <br></br>

                🚀 Dive In! Sign up and catapult your wardrobe into our virtual closet.
                <br></br>
                📸 Snap & Upload! Bring every piece of your clothing collection to life online.
                <br></br>
                🌦️ Weather-Smart Styling! Let us be your personal stylist—tailoring your daily outfit picks to perfectly match the weather's mood.
                <br></br>
                👗🧥 Every Day, A Masterpiece! No more morning dilemmas. Open your eyes to curated outfit suggestions waiting to make your day extraordinary.
                <br></br>
                Join the revolution where technology meets style. Your next "Wow!" outfit is just a tap away.</p>
            <button onClick={onSignUp}>Sign Up</button>

        </div>
    );
};

export default HeroBanner;
