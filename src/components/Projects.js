import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  return (
    <section>
      <h2 className="section-title">Projects</h2>
      <div className="project">
        <h3>AI Chat Web-App (Chat with your own data)</h3>
        <p>
          Using DotNet, Angular to make a webapp chat. The basic idea was to upload your own data on which the user can ask anything, and a semantic kernel with OpenAI can answer the questions.
        </p>
        <p>
          My work included creating a Python API using Azure OpenAI LLM to increase the accuracy of responses from AI.
        </p>
      </div>
      <div className="project">
        <h3>Training Web-App Program</h3>
        <p>
          Using Blazor components, semantic kernel, and prompt engineering for OpenAI. When a training document is uploaded in the web app, the AI chat starts asking questions related to the document and, in the end, shares the result reports.
        </p>
        <p>
          My work was to integrate semantic kernel and prompt engineer OpenAI to generate questions.
        </p>
      </div>
    </section>
  );
};

export default Projects;
