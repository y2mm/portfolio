import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();

    const openPDF = () => {
        window.open('/portfolio/resume.pdf', '_blank');
    };

    return (
        <div className="App">
            <button className="resume-button" onClick={openPDF}>
                Resume
            </button>
            <button className="projects-button" onClick={() => navigate('/projects')}>
                Projects
            </button>
        </div>
    );
};

export default Home;
