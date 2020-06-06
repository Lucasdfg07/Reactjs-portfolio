import React from 'react';
import './App.css';
import "rbx/index.css";
import Header from './pages/shared/Header';
import Footer from './pages/shared/Footer';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <div className="container">
          <div className="columns">
            <Routes />
          </div>
        </div>
        
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
