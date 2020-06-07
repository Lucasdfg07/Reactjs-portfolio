import React, { useEffect, useState } from 'react';
import './index.css';
import Repositories from '../Repositories';
import Paginate from '../Paginate';

import axios from 'axios';

import {AiFillGithub} from 'react-icons/ai';

const Portfolio = () => {
    const [repositoriesList, setRepositoriesList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    useEffect(() => {
        const fetchRepositories = async () => {
            await axios.get("https://api.github.com/users/Lucasdfg07/starred").then(response => {
                setRepositoriesList(response.data);
            });
        }

        fetchRepositories();
    }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - (postsPerPage - 1);
    const currentRepos = repositoriesList.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    
    return (
        <div className="card">
            <br />
            
            <div className="has-text-centered title">
                Some Projects
                <br />
                <AiFillGithub />
            </div>

            <hr />
            
            <ul>
                <Repositories repositories={currentRepos} />
                <Paginate postsPerPage={postsPerPage} totalPosts={repositoriesList.length} paginate={paginate} />
            </ul>
        </div>
    )
}

export default Portfolio;