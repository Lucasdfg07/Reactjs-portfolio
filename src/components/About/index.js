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

                <div className="card-content">
                    <p className="m-top">
                        Programador produtivo e criativo, comecei a estudar programação aos 14 anos de idade, e a trabalhar profissionalmente com Ruby on Rails há 3 anos.
                    </p>

                    <p className="m-top">
                        Comecei como freelancer, desenvolvendo sites HTM5, CSS3, Bootstrap e alguns Wordpress, e rapidamente encontrei a linguagem Ruby!
                    </p>

                    <p className="m-top text-center">
                        Hoje, sinto que posso lidar com qualquer desafio.
                    </p>
                </div>
            </div>

            <Experiences />
        </div>
    )
}

export default About;