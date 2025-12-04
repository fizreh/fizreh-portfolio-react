import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "Angular",
    "C#",
    ".NET MVC Core",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SASS",
    "SQL",
    "PostgreSQL",
    "MONGO DB",
    "Postman"
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Jenkins",
    "Docker",
    "Azure",
    "Linux",
    
];

const labelsThird: any[] = [
    
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I am a motivated Full-Stack Developer with 3+ years of experience delivering scalable web applications and enterprise-grade software solutions. I am skilled in C#, .NET MVC, JavaScript, TypeScript, React, Angular, SQL, RESTful APIs, and CI/CD pipelines, and I am actively expanding my expertise in cloud computing, Docker, and DevOps practices. I have a proven track record in modernizing legacy systems, building responsive user interfaces, and designing reliable backend services for high-demand platforms. I thrive in agile, multicultural teams, enjoy solving complex problems, and am passionate about delivering user-focused, resilient solutions.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Automation</h3>
                    <p>I can design and implement CI/CD pipelines using Jenkins or similar tools to automate builds, testing, and deployments. I can containerize applications with Docker to ensure consistent environments across development, testing, and production. I can set up automated monitoring and maintenance workflows, leverage cloud-based deployment practices, and collaborate with agile teams to improve efficiency, reliability, and delivery speed.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>GenAI</h3>
                    <p>I am passionate about Generative AI, motivated to stay updated with the latest advancements, and eager to apply AI-driven solutions to create intelligent, innovative applications.</p>
                    {/* <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div> */}
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;