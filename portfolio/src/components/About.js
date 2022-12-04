import React from "react";
export default function About({ resumeData }) {
  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img className="profile-pic" src="images/my-pic.png" alt="" />
        </div>

        <div className="nine columns main-col">
          <h2>Short bio</h2>
          <p>{resumeData.aboutme}</p>
          {resumeData.tools.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </div>
      </div>
    </section>
  );
}
