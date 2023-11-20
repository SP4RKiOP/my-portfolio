import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  return (
    <section>
      <h2 className="section-title">Skills</h2>
      <div className="skills-container">
        <div className="skill">
          <h3>Linux CLI & Bash Scripting</h3>
        </div>
        <div className="skill">
          <h3>.Net Development</h3>
        </div>
        <div className="skill">
          <h3>Blazor, DAPR</h3>
        </div>
        <div className="skill">
          <h3>Azure Developer Associate (Az-204)</h3>
        </div>
        <div className="skill">
          <h3>DevOps Engineer Expert (Az-400)</h3>
        </div>
        <div className="skill">
          <h3>ASP.NET MVC</h3>
        </div>
        <div className="skill">
          <h3>Docker and Kubernetes</h3>
        </div>
        <div className="skill">
          <h3>MySQL, SQLite, PostgreSQL</h3>
        </div>
        <div className="skill">
          <h3>Angular</h3>
        </div>
        <div className="skill">
          <h3>ReactJS</h3>
        </div>
        <div className="skill">
          <h3>JavaScript</h3>
        </div>
        <div className="skill">
          <h3>Python Scripting, LLMs</h3>
        </div>
        {/* Add more skills as needed */}
      </div>
    </section>
  );
};

export default Skills;
