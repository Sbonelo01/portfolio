import React from "react";
export default function Porfolio({ resumeData }) {
  return (
    <section id="portfolio">
      <div>
        <div className="row">
          <h1 style={{ fontSize: "20px" }}>Check out some of my work</h1>
          <div className="twelve columns collapsed">
            <h1>Web development</h1>

            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {resumeData.portfolio &&
                resumeData.portfolio.map((item, index) => {
                  return (
                    <div className="columns portfolio-item">
                      <a target="_blank" href={item.projectUrl}>
                        <div className="item-wrap">
                          <img
                            alt={`project image ${index}`}
                            src={item.imgurl}
                            className="item-img"
                            style={{ borderRadius: "50%" }}
                          />

                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5 style={{ color: "#f06000" }}>{item.name}</h5>
                              <p style={{ color: "#f06000" }}>
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>User experience design</h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {resumeData.portfolio &&
                resumeData.portfolio.map((item, index) => {
                  return (
                    <div className="columns portfolio-item">
                      <a target="_blank" href={item.projectUrl}>
                        <div className="item-wrap">
                          <img
                            alt={`project image ${index}`}
                            src={item.imgurl}
                            className="item-img"
                            style={{ borderRadius: "50%", onHover: "" }}
                          />

                          <div className="overlay">
                            <div
                              className="portfolio-item-meta"
                              style={{ color: "green" }}
                            >
                              <h5>{item.name}</h5>
                              <p>{item.description}</p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}
