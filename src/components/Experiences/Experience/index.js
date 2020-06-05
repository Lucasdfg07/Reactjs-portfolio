import React from 'react';
import './index.css';

const Experience = (props) => {
    return(
        <div className="columns">
            <div className="column is-4-desktop has-text-centered logo_image">
                <span className="helper"></span><img src={props.imageLogo} alt="Taki App Logo" />
            </div>

            <div className="column is-7-desktop is-offset-1">
                <span className="title is-5">
                    {props.title}
                </span>
                
                <br />
                
                <span className="tag is-black">
                    {props.tag}
                </span>

                <p className="m-top">{props.company} | <b>{props.timeWorking}</b>

                    <ul className="m-top">
                        {props.tasks.map(task => 
                            <li>- {task}</li>    
                        )}
                    </ul>
                </p>
            </div>
        </div>
    )
}

export default Experience;