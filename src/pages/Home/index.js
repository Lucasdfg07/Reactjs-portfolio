import React from 'react';
import './index.css';
import About from '../../components/About';
import Info from '../../components/Info';
import Portfolio from '../../components/Portfolio';

const Home = () => {
    return (
        <>
            <div className="column is-3-desktop is-5-tablet">
              <Info />
              <br />
              <Portfolio />
            </div>

            <About />
        </>
    );
}

export default Home;