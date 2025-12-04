import React from "react";
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projectss</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://expense-tracker-app-faiza.surge.sh/" target="_blank" rel="noreferrer"><h2>Expense Tracker React App</h2></a>
                <p>Built using React with real-time tracking and potential for AI-powered categorization.</p>
            </div>
            <div className="project">
                <a href="https://react-quiz-app-faiza.surge.sh/" target="_blank" rel="noreferrer"><h2>Quiz App</h2></a>
                <p>Interactive quiz built with React and TypeScript</p>
            </div>
            <div className="project">
                <a href="https://github.com/fizreh/Github-Repo-Search" target="_blank" rel="noreferrer"><h2>GitHub Repo Search</h2></a>
                <p>Developed a small unit that shows the Github Repo of an account</p>
            </div>
        </div>
    </div>
    );
}

export default Project;