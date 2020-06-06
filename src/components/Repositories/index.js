import React from 'react';
import {AiOutlineStar} from 'react-icons/ai';
import GithubIcon from '../../assets/github.png';

const Repositories = ({repositories}) => {
    return (
        <>
            {repositories.map(repository => {
                if(!repository.fork && repository.stargazers_count > 0) {
                    return(
                        <a href={repository.html_url} key={repository.id}>
                            <div className="card-repo">
                                <li key={repository.id}> 
                                    <span className="repo-name subtitle">{repository.name}</span>
                                    <img src={GithubIcon} alt="Github icon" /> 
                                    
                                    <div className="stars is-pulled-right">
                                        <i><AiOutlineStar /></i>
                                        {repository.stargazers_count}
                                    </div>

                                    <br /><br />
                                    Made with: <b>{repository.language}</b>
                                </li>  
                            </div>
                        </a>
                    )
                }
            })}
        </>
    )
}

export default Repositories;