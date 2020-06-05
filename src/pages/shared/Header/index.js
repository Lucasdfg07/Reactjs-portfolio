import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return( 
        <nav>
            <div className="columns">
                <div className="column is-2 is-offset-4">
                    <Link to="/">
                        <p className="subtitle">Página Inicial</p>
                    </Link>
                </div>

                <div className="column is-2">
                    <Link to="/contact">
                        <p className="subtitle">Contato</p>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Header;