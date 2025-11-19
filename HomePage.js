import React from 'react';
import '../styles/HomePage.css';
import { Link } from 'react-scroll';

function HomePage() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <img src="/passport.jpg" alt="Profile" className="profile-image" />
          <h1>ABUBAKAR MUHAMMAD SHAMSUDDEEN</h1>
          <h2 className="hero-title">Welcome to My Portfolio Website!</h2>
          <p className="hero-subtitle">Front-End Developer </p>
          <button className="cta-button">
            <Link to="projects" smooth={true} duration={500}>
              View My Work
            </Link>
          </button>
        </div>
      </section>

    
      <section id="about" className="about">
        <div className="container">
          <h2>About Me</h2>
          <p>
            I'm a passionate developer with expertise in building responsive web applications
            using modern technologies like React, Node.js, and more. I love creating elegant
            solutions to complex problems and continuously learning new skills.
          </p>
        </div>
      </section>

      
      <section id="skills" className="skills">
        <div className="container">
          <h2>My Skills</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <h3>Frontend</h3>
              <p>React?, JavaScript, HTML, CSS,</p>
            </div>
            
            <div className="skill-card">
              <h3>Tools</h3>
              <p>Git, GitHub, VS Code, npm,</p>
            </div>
          </div>
        </div>
      </section>

      
      <section id="projects" className="projects">
        <div className="container">
          <h2>Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-header">
                <h3>Project One</h3>
              </div>
              <p>A responsive portfolio website built with React and modern styling techniques.</p>
              <div className="project-links">
                <a href="" className="btn-link">View Code</a>
                
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3>Project Two</h3>
              </div>
              <p>ToDo List application using javascript.</p><br></br>
              <div className="project-links">
                <a href="" className="btn-link">View Code</a>
                
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3>Project Three</h3>
              </div>
              <p>Responsive web-based calculator.</p><br></br>
              <div className="project-links">
                <a href="" className="btn-link">View Code</a>
               
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section id="contact" className="contact">
        <div className="container">
          <h2>Get In Touch</h2>
          <p>I'd love to hear from you. Feel free to reach out!</p>
          <div className="contact-links">
            <a href="mailto:mshamsuddeen@gmail.com">Email</a>
            <a href="https://github.com/Shamsuddeen13design">GitHub</a>
            <a href="https://wa.me/2348127380151">Whatsapp</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
