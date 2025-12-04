import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'
import ProgrammingJoke from "./ProgrammingJoke";

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/fizreh" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/fizreh/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <ProgrammingJoke/>
      <p>A portfolio designed & built by <a href="https://github.com/fizreh/fizreh-portfolio-react" target="_blank" rel="noreferrer">Faiza Siddiqi</a> with 💜</p>
    </footer>
  );
}

export default Footer;