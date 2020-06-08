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
                    "Making features and bugfix to the app.",
                    "Planing and developing different apps from 0 that the Company sells.",
                    "Thinking and Constructing the mockups and class diagrams."
                ]} />

                <Experience imageLogo={ FreelaPhoto } 
                title="Full Stack Developer"
                tag="Freelancer"
                company="At Home"
                timeWorking="Nov 2019 - Nov 2020"
                tasks={[
                    "Developing system with HTML5, CSS3, PHP, Javascript, JQuery, MySQL and other languages."
                ]} />

                <Experience imageLogo={ GlobalNetPhoto } 
                title="Web Designer"
                tag="GlobalNetSis"
                company="Web Development Company"
                timeWorking="Jun 2020 - Aug 2020"
                tasks={[
                    "Developing individual mockups with Adobe Photoshop to the Web Design.",
                    "Dealing directly with clients in reunions to optimize the sales and to enlarge the view about the project to reproduce their identity on the mockup."
                ]} />

                <Experience imageLogo={ IffPhoto } 
                title="Full Stack Ruby on Rails Developer"
                tag="Federal Institute"
                company="Federal Institute Campos campus Centro"
                timeWorking="Nov 2018 - Nov 2019"
                tasks={[
                    "Developing a system to storage scanned documents and automate the hour accounting of extra activities at the school.",
                    "Permit online attachment and accounting according the platform."
                ]} />

                <Experience imageLogo={ IndraPhoto } 
                title="Technical Operator N1"
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