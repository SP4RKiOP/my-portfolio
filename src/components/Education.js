import React from 'react';
import '../styles/Education.css';

const Education = () => {
  return (
    <section>
      <h2 className="section-title">Education</h2>
      <div className="education">
        <div className="degree">
          <h3>B.Tech (Computer Science Engineering)</h3>
          <p>Amity University</p>
        </div>
        <div className="degree">
          <h3>Intermediate</h3>
          <p>DAV Public School, Koyla Nagar Dhanbad (2017)</p>
        </div>
        <div className="degree">
          <h3>Matriculation</h3>
          <p>DAV Public School, Koyla Nagar Dhanbad (2015)</p>
        </div>
        {/* Add more education details as needed */}
      </div>
    </section>
  );
};

export default Education;
