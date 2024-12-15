import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFilePdf } from 'react-icons/fa';
import './Home.css';
import { GoProjectRoadmap } from "react-icons/go";

const Home = () => {
    const navigate = useNavigate();

    const openPDF = () => {
        window.open('/portfolio/resume.pdf', '_blank');
    };

    return (
        <div className="App">
            <button className="resume-button" onClick={openPDF}>
                <FaFilePdf className="icon" />
                Resume
            </button>
            <button className="projects-button" onClick={() => navigate('/projects')}>
                <GoProjectRoadmap className="icon" />
                Projects
            </button>
        </div>
    );
};

export default Home;
