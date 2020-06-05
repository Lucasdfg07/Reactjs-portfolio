import React from 'react';
import Experience from './Experience';

import IffPhoto from '../../assets/iff.png';
import TakiPhoto from '../../assets/taki.jpg';

const Experiences = () => {
    return(
        <div className="card m-top">
            <div className="card-header">
                <p className="card-header-title">
                    Experiências
                </p>
            </div>

            <div className="card-content">
                <Experience imageLogo={ TakiPhoto } 
                title="Backend Ruby on Rails Developer"
                tag="Taki App"
                company="Food Delivery Company"
                timeWorking="Jan 2020 - Até hoje"
                tasks={[
                    "Fazer bugfix e features para o back end do sistema.",
                    "Planejar e desenvolver aplicativos do zero para comercialização.",
                    "Elaborar e construir mockups e diagramas de classe."
                ]} />

                <Experience imageLogo={ IffPhoto } 
                title="Full Stack Ruby on Rails Developer"
                tag="Instituto Federal Fluminense"
                company="Instituto Federal Fluminense Campos campus Centro"
                timeWorking="Nov 2018 - Nov 2019"
                tasks={[
                    "Desenvolver um sistema relacionado às ATPAs para automatização da faculdade.",
                    "Permitir a anexação de atividades extra-curriculares, por parte dos alunos, para a contabilidade e gerenciamento online."
                ]} />
            </div>
        </div>
    )
}

export default Experiences;