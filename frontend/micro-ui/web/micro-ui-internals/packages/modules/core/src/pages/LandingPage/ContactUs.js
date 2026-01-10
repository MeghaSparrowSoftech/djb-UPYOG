import React from "react";
import HeaderBar from "./HeaderBar";
import Footer from "./footer";
import WaterDropIcon from "./icons/WaterDrop";
const ContactUs = () => {
  return (
    <React.Fragment>
      <HeaderBar />

      {/* ================= SECTION 1 ================= */}
      <section className="djb-contact-section section-top">
        <div className="djb-two-column">

          {/* LEFT: LEGACY DJB INFO */}
          <div className="djb-left">
            <h3 className="section-title">Official Helpline & Directory</h3>

            {/* <p className="legacy-address">
              <strong>DELHI JAL BOARD (HQ)</strong><br />
              Varunalaya Ph-II<br />
              Jhandewalan, Karol Bagh<br />
              New Delhi – 110005
            </p> */}

            <h4>
              FOR WATER BILLS, WATER PROBLEMS, WATER TANKER, WATER LOGGING,
              SEWER PROBLEMS AND ILLEGAL BORING RELATED COMPLAINTS, CONTACT:
            </h4>

            {/* <div className="legacy-highlight">
              <strong>Helpline:</strong> 1916 / 1800117118 (Toll Free)<br />
              <strong>Email:</strong>{" "}
              <a href="mailto:grievances-djb@delhi.gov.in">
                grievances-djb@delhi.gov.in
              </a>
              <br />
              <strong>WhatsApp:</strong>{" "}
              <a href="https://wa.me/919650291021" target="_blank" rel="noreferrer">
                9650291021
              </a>
            </div> */}

            <ul className="legacy-list">
              <li>
                <WaterDropIcon size={16} />
                <a href="tel:23538495">23538495</a></li>
              <li>
                <WaterDropIcon size={16} />
                <a href="tel:23634469">23634469</a></li>
              <li>
                <WaterDropIcon size={16} />
                <a href="tel:23513073">23513073</a></li>
              <li>
                <WaterDropIcon size={16} />
                <a href="tel:23527679">23527679</a></li>
              <li>
                <WaterDropIcon size={16} />
                <a href="https://wa.me/919650291021" target="_blank" rel="noreferrer">
                  9650291021 (WhatsApp No.)
                </a>
              </li>
              <li>
                <WaterDropIcon size={16} />
                <a href="tel:8383068300">8383068300</a>{" "}
                (Control Command Centre Helpline)
                <span className="new-tag"> NEW</span>
              </li>
              <li>
                <WaterDropIcon size={16} />
                <a href="https://wa.me/918383068300" target="_blank" rel="noreferrer">
                  8383068300
                </a>{" "}
                (WhatsApp for water logging / tanker issues)
                <span className="new-tag"> NEW</span>
              </li>
            </ul>

            {/* <h4>
              FOR BILLING, READING, WRONG BILL, ACCESS BILL,
              NEW WATER CONNECTION, ETC.
            </h4> */}

            <p>Please contact Concern ZRO or Concern Jt./Dy. Director:</p>

            <p className="legacy-links">
              <a href="/assets/zro-directory.pdf" target="_blank" rel="noreferrer">
                📄 Click for Concern ZRO / Jt./Dy. Director Numbers (PDF)
              </a>
            </p>

            <p className="legacy-links">
              <a href="/directory">📘 DIRECTORY</a>
            </p>
          </div>

          {/* RIGHT: CONTACT FORM */}
          <div className="djb-right">
            <h3 className="section-title">Write to Us</h3>

            <form className="djb-contact-form">
              <div className="form-row">
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
              </div>

              <input type="text" placeholder="Subject" />
              <textarea placeholder="Message" rows="5" />

              <button type="submit" className="djb-submit-btn">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* ================= SECTION 2 ================= */}
      <section className="djb-contact-section section-bottom">
        <div className="djb-two-column">

          {/* LEFT: CONTACT INFORMATION (3-COLUMN GRID) */}
          <div className="djb-left">
            <h3 className="section-title">Contact Information</h3>

            <div className="info-grid">

              <div className="info-box">
                <div className="icon">📍</div>
                <h4>Address</h4>
                <p>
                  DELHI JAL BOARD (HQ)<br />
                  Varunalaya Ph-II, Jhandewalan,<br />
                  Karol Bagh, New Delhi – 110005
                </p>
              </div>

              <div className="info-box">
                <div className="icon">📞</div>
                <h4>Call Center</h4>
                <p>
                  1916 / 1800117118<br />
                  WhatsApp: 9650291021
                </p>
              </div>

              <div className="info-box">
                <div className="icon">✉️</div>
                <h4>Email Us</h4>
                <p>djb-helpdesk@nic.in</p>
              </div>

            </div>
          </div>

          {/* RIGHT: MAP */}
          <div className="djb-right">
            <h3 className="section-title">Locate Us</h3>

            <div className="djb-map">
              <iframe
                title="Delhi Jal Board Location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d448073.27597634436!2d76.4833054!3d28.6725173!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0290b748ea31%3A0x3262145d8635b05a!2sDelhi%20Jal%20Board!5e0!3m2!1sen!2sin!4v1766336407906!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </section>



      <Footer />
    </React.Fragment>
  );
};

export default ContactUs;
