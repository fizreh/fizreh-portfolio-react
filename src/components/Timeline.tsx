import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Sep 2022 - Jul 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Junior Analyst Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">FNZ Group, Munich, Germany</h4>
            <p>
Developed and optimized backend features using C#, ASP.NET, and RESTful APIs for scalable, high-demand platforms, including multilingual support. Designed modular software components using OOP principles and efficiently diagnosed and resolved complex system issues. Collaborated with cross-functional teams, ensuring alignment with business needs while maintaining high code quality through reviews and best practices. Maintained clear documentation in Confluence and managed workflows and bugs using JIRA.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2021 - June 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Full Stack Engineer Working student</h3>
            <h4 className="vertical-timeline-element-subtitle">BMW Group, Munich, Germany</h4>
            <p>
              Developed a scalable web application using Docker, Angular, Express, and PostgreSQL, improving performance and user experience. Implemented Docker containerization and automated CI/CD pipelines with Jenkins, reducing deployment time by 40% and minimizing downtime. Built and integrated efficient CRUD APIs with Angular and React front ends, enhancing system responsiveness. Actively participated in agile processes, ensuring timely delivery and alignment with project goals.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Dec 2020 - May 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Web Developer Working student</h3>
            <h4 className="vertical-timeline-element-subtitle">Jatosha, Munich, Germany</h4>
            <p>
             Developed responsive user interfaces using modern JavaScript, HTML, and CSS, enhancing user experience across devices. Created Angular services to consume .NET-based REST APIs, improving app functionality and performance. Utilized Bitbucket and Jira to streamline project management and team collaboration, increasing development efficiency.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineering Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">DPS, Munich, Germany</h4>
            <p>
            I designed educational web tools using React and Firebase for cloud-hosted deployment, applying CI principles with GitHub Actions and deploying via Google Cloud. I have experience across the full application development lifecycle, from user testing to delivering the first MVP, following Scrum practices throughout.
            </p>
          </VerticalTimelineElement>
           <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Analyst Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">IBEX GLOBAL, Karachi, Pakistan</h4>
            <p>
           I developed enterprise-grade applications using ASP.NET and C# for automotive clients. I built and maintained Windows Forms applications to support internal business processes and client operations, and created custom Windows Services that automate report scheduling, data processing, and log saving immediately on Windows startup.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;