import './App.css';

function App() {
    const openPDF = () => {
        window.open('/portfolio/resume.pdf', '_blank');
    };

    return (
        <div className="App">
            <button className="resume-button" onClick={openPDF}>
                Resume
            </button>
        </div>
    );
}

export default App;
