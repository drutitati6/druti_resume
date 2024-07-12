import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFlag } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
function App() {
  return (
    <div className="container">
      <header>
        <h1>DRUTI TATIPARTI</h1>
        <div className="contact-info">
          <p><FontAwesomeIcon icon={faEnvelope} /> drutitati@gmail.com</p>
          <p><FontAwesomeIcon icon={faGithub} /> <a href="https://github.com/drutitati6" target="_blank" rel="noopener noreferrer">https://github.com/drutitati6</a></p>
          <p><FontAwesomeIcon icon={faFlag} /> Indian</p>
        </div>
      </header>
      
      <section className="objective">
        <h2>Objective</h2>
        <p>To be associated with a growing organization that provides me with the scope to enhance my skills as per the latest trends and to become a team that progressively work towards the growth of the organization.</p>
      </section>
      
      <div className="two-column">
        <div className="column left-column">
          <section className="education">
            <h2>Educational Qualifications</h2>
            <div className="school">
              <h3>B.Tech Computer Science and Engineering</h3>
              <p className="institution">Gokaraju Rangaraju Institute of Engineering and Technology, Hyderabad, India</p>
              <p className="date">November 2021 - August 2025</p>
              <p className="grade">CGPA: 8.96</p>
            </div>
            <div className="school">
              <h3>Intermediate</h3>
              <p className="institution">Narayana Junior College, Hyderabad</p>
              <p className="date">June 2019 - April 2021</p>
              <p className="grade">CGPA: 9.68</p>
            </div>
            <div className="school">
              <h3>Matriculation</h3>
              <p className="institution">Dr.KKR Gowtham School, Hyderabad</p>
              <p className="date">Completed in May 2019</p>
              <p className="grade">CGPA: 8.53</p>
            </div>
          </section>
          
          <section className="skills">
            <h2>Technical Competencies</h2>
            <ul>
              <li>Languages: C, Java</li>
              <li>Databases: SQL, DBMS</li>
              <li>Web Technologies: HTML, CSS, Javascript</li>
              <li>Frameworks: ReactJS, NodeJS</li>
              <li>Database storage: MongoDB</li>
            </ul>
          </section>
        </div>
        
        <div className="column right-column">
          <section className="personal-skills">
            <h2>Personal Competencies</h2>
            <div className="strengths">
              <h3>Strengths:</h3>
              <ul>
                <li>Adaptable</li>
                <li>Efficient</li>
              </ul>
            </div>
            <div className="soft-skills">
              <h3>Soft Skills:</h3>
              <ul>
                <li>Time Management</li>
                <li>Communication skills</li>
              </ul>
            </div>
          </section>
          
          <section className="projects">
            <h2>Projects</h2>
            <div className="project">
              <h3>Money-Tracker-App</h3>
              <a href="https://github.com/drutitati6/money-tracker-app">https://github.com/drutitati6/money-tracker-app</a>
              <p>Developed using MERN stack development</p>
              <h3>Registration form</h3>
              <a href="https://github.com/drutitati6/registration-form">https://github.com/drutitati6/registration-form</a>
              <p>Developed using MERN stack development</p>
            </div>
          </section>
          
          <section className="certifications">
            <h2>Certifications</h2>
            <ul>
              <li>Smart Interviews - smart coder</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
