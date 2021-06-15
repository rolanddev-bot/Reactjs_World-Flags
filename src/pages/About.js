import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';

const About = () => {
    return (
        <div>
            <Navigation />
            <Logo />
            <h1 >A propos</h1>
            <br />
            <p >In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available</p>
        </div>
    );
};

export default About;