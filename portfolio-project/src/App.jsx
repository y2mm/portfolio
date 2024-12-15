import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import Projects from './components/Projects.jsx';
import './App.css';

function App() {
    return (
        <Router basename="/portfolio">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </Router>
    );
}

export default App;
