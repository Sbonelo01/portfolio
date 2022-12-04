import React from "react";
export default function Contact({ resumeData }) {
  return (
    <section id="contact">
      <div className="row section-head">
        <div className="ten columns">
          <p className="lead">
            Feel free to contact me @{""}
            <a href={`mailto:${resumeData.personalEmail}`}>Sbonelo Mkhize</a>
          </p>
        </div>
      </div>
      {/* <div className="row">
        <aside className="eigth columns footer-widgets">
          <div className="widget">
            <h4>
              <a href={`mailto:${resumeData.personalEmail}`}>Sbonelo Mkhize</a>
            </h4>
          </div>
        </aside>
      </div> */}
    </section>
  );
}
