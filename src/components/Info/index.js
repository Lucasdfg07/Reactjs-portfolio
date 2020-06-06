import React from 'react';
import PerfilPhoto from '../../assets/perfil.jpg';
import './index.css';
import {SocialIcon} from 'react-social-icons';

const Info = () => {
    return(
        <div className="card">
            <div className="card-image">
                <img src={PerfilPhoto} alt="Photo perfil" />
            </div>

            <div className="card-content has-text-centered">
                <p className="title">Lucas Siqueira</p>

                <p className="tag is-black is-medium">
                    Full Stack Developer
                </p>

                <p className="m-top">
                    (22) 99728-5662
                </p>

                <p className="m-top">
                    Lucassiqueirafernandes07@gmail.com
                </p>

                <div className="columns m-top icons">
                    <div className="has-text-centered column">
                        <SocialIcon url="https://github.com/Lucasdfg07" 
                        network="github" 
                        bgColor="#00000" />
                    </div>

                    <div className="has-text-centered column">
                        <SocialIcon url="https://www.linkedin.com/in/lucas-siqueira-167362148/" 
                        network="linkedin" 
                        bgColor="#3251A4" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info;