import React from 'react';
import './index.css';
import Experiences from '../Experiences';

const About = () => {
    return(
        <div className="is-8-desktop column space-left">
            <div className="card">
                <div className="card-header">
                    <p className="card-header-title">
                        Sobre Mim
                    </p>
                </div>

                <div className="card-content description-about">
                    <p>
                    Productive, communicative, sociable, open-minded and creative programmer, I am a code lover, 
                    good at React front end but skilled at Ruby on Rails development, that it's where my best skills 
                    are and where I have more domain.
                    </p>

                    <p className="m-top">
                        Today, having a lot of projects at my Github, I feel like I can handle any challenge!
                    </p>
                </div>
            </div>

            <Experiences />
        </div>
    )
}

export default About;