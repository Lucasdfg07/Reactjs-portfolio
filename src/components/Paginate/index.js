import React from 'react';

const Paginate = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage) - 2; i++) {
        pageNumbers.push(i);
    }

    return(
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number}>
                        <button className="pagination-link" onClick={() => paginate(number)}>
                            { number }
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Paginate;