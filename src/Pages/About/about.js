import React from 'react';
import portrait from '../../Assets/images/portrait.jpg';

export default function About () {
    return (
        <div>
            <h1>About me</h1>
            <img src={ portrait } className="self-portrait" alt="Melissa posing with her arms crossed." />
            <p> Hello, My name is Melissa Santos.
                I studied at the Art Institute of Indianapolis for photography and have worked in Real Estate and Portrait photography for 6 years. 
                I am an aspiring full stack developer and I am currently enrolled in Butler University's Executive Coding Bootcamp!
            </p>
        </div>
    )
}