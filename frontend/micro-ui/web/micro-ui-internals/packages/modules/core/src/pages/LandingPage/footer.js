import React from "react";
import { useHistory } from "react-router-dom";
import footerConfig from "./configs/footerConfig";

const Footer = () => {
  const history = useHistory();
  const { logos, contact, government, information, feedback, bottom } = footerConfig;

  return (
    <footer className="footer-wrapper">
      {/* TOP LOGOS SECTION */}
      <div className="footer-logos">
        {logos.map((src, idx) => (
          <img key={idx} src={src} alt="" />
        ))}
      </div>

      {/* MAIN FOOTER GRID */}
      <div className="footer-grid">
        {/* COLUMN 1 */}
        <div>
          <h3>{contact.title}</h3>
          <p>
            {contact.lines.map((line, idx) => (
              <React.Fragment key={idx}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>

          <button
            className="contact-btn"
            onClick={() => {
              window.location.href = `/${window?.contextPath}/contact-us`;
            }}
          >
            {contact.buttonText}
          </button>
        </div>

        {/* COLUMN 2 */}
        <div>
          <h3>{government.title}</h3>
          {government.items.map((item, idx) => (
            <p key={idx}>{item}</p>
          ))}
        </div>

        {/* COLUMN 3 */}
        <div>
          <h3>{information.title}</h3>
          {information.items.map((item, idx) => (
            <p key={idx}>{item}</p>
          ))}
        </div>

        {/* COLUMN 4 */}
        <div>
          <h3>{feedback.title}</h3>
          <button className="feedback-btn">{feedback.buttonText}</button>

          {/* 
          <h3 className="install-title">{feedback.installTitle}</h3>
          {feedback.appImages?.map((src, idx) => (
            <img key={idx} src={src} className="app-img" alt="" />
          ))}
          */}
        </div>
      </div>

      {/* BOTTOM COPYRIGHT SECTION */}
      <div className="footer-bottom">
        {/* 
        <p className="footer-text">
          {bottom.text}
        </p>
        */}
        <hr className="footer-separator" />

        <p className="copyright">
          {bottom.copyright}
          <br />
          {bottom.designedBy}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
