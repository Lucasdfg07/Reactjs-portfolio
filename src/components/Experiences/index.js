import React from 'react';
import Experience from './Experience';

import IffPhoto from '../../assets/iff.png';
import TakiPhoto from '../../assets/taki.jpg';
import FreelaPhoto from '../../assets/freelancer.png';
import GlobalNetPhoto from '../../assets/globalnet.png';
import IndraPhoto from '../../assets/indra.png';

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

                <Experience imageLogo={ GlobalNetPhoto } 
                title="Web Designer"
                tag="GlobalNetSis"
                company="Web Development Company"
                timeWorking="Jun 2020 - Aug 2020"
                tasks={[
                    "Desenvolver Mockups individualizados no Adobe Photoshop para fazer o Web Design",
                    "Participar de reuniões e lidar com clientes afim de otimizar a venda de sistemas e ter uma visão geral da ideia do cliente sobre o projeto."
                ]} />

                <Experience imageLogo={ FreelaPhoto } 
                title="Full Stack Developer"
                tag="Freelancer"
                company="At Home"
                timeWorking="Nov 2019 - Nov 2020"
                tasks={[
                    "Desenvolver sistemas automatizados com PHP, Bootstrap, Javascript, HTML5, CSS3, MySQL, entre outras linguagens."
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

                <Experience imageLogo={ IndraPhoto } 
                title="Operador Técnico N1"
                tag="Indra Company"
                company="Call Center Company"
                timeWorking="Nov 2017 - Nov 2018"
                tasks={[
                    "Give a support about bugs and errors on system.",
                    "Deal with clients on the better as it is possible and resolve his problem."
                ]} />
            </div>
        </div>
    )
}

export default Experiences;