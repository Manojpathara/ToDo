import React from 'react'
import TosoApp from './component/TosoApp';
import Header from './component/Header/Header';
import About from './component/About/About';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';

 const App= () => {
    return (
        
        <Router>
            <Header />
            <Routes>
            <Route path='/' Component={ TosoApp } />
            <Route path='/about' Component={ About } />
            </Routes>
        </Router>
     );
    };
export default App;