import React from "react";
export default function About({ resumeData }) {
  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img className="profile-pic" src="images/my-pic.png" alt="" />
        </div>

        <div className="nine columns main-col">
          <h2>About {resumeData.name.slice(0, 7)}</h2>
          <p>{resumeData.aboutme}</p>

          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{resumeData.name}</span>
                <br />
                <span>{resumeData.address}</span>
                <br />
                <span>{resumeData.website}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
