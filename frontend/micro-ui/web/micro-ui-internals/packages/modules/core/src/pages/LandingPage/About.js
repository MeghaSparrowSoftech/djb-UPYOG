import React, { useState, useEffect } from "react";
import HeaderBar from "./HeaderBar";
import Footer from "./footer";
import { ABOUT } from "./configs/AboutConfig";
import OrgChart from "./orgChart/orgChart";
import { orgStructureData } from "./configs/orgStructureData";

const About = () => {
  const [activeMenu, setActiveMenu] = useState("about");
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const menu = ABOUT.sideNav.find((m) => m.key === activeMenu);
    if (menu?.defaultTab) setActiveTab(menu.defaultTab);
  }, [activeMenu]);

  useEffect(() => {
  if (activeMenu === "citizen") {
    setPdfLoading(true);
  }
}, [activeMenu]);


  const blocks = ABOUT.content[activeTab] || [];

  const [pdfLoading, setPdfLoading] = useState(true);

  


  const renderBlock = (block, index) => {
    switch (block.type) {
      /* ================= HEADINGS ================= */
      case "heading":
        return (
          <h3 key={index} className="djb-section-title">
            {block.text}
          </h3>
        );

      case "subheading":
        return (
          <h4 key={index} className="djb-sub-title">
            {block.text}
          </h4>
        );

      /* ================= PARAGRAPH ================= */
      case "paragraph":
        return (
          <p
            key={index}
            dangerouslySetInnerHTML={{ __html: block.html }}
          />
        );

      /* ================= LIST ================= */
      case "list":
        return (
          <ul key={index} className="djb-list">
            {block.items.map((item, i) => (
              <li
                key={i}
                dangerouslySetInnerHTML={{ __html: item }}
              />
            ))}
          </ul>
        );

      /* ================= STANDARD TABLE ================= */
      case "table":
        return (
          <table key={index} className="djb-table">
            <thead>
              <tr>
                {block.columns.map((c, i) => (
                  <th key={i}>{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={r}>
                  {row.map((cell, c) =>
                    typeof cell === "object" ? (
                      <td key={c} colSpan={cell.colSpan}>
                        <strong>{cell.text}</strong>
                      </td>
                    ) : (
                      <td key={c}>{cell}</td>
                    )
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        );

      /* ================= REVENUE TABLE ================= */
      case "revenueTable":
        return (
          <table key={index} className="djb-table djb-revenue-table">
            <thead>
              <tr>
                {block.columns.map((c, i) => (
                  <th key={i}>{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i}>
                  <td>{row.year}</td>
                  <td>
                    <div className="revenue-cell">
                      <span className="revenue-value">{row.value}</span>
                      <div className="revenue-bar">
                        <div className={`bar ${row.bar}`}></div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        );

      default:
        return null;
    }
  };

  return (
    <React.Fragment>
      <HeaderBar />

      <section className="djb-page-wrapper">
        <h2 className="djb-page-title">About Us</h2>

        <div className="djb-about-layout">
          <aside className="djb-side-nav">
            <div className="side-nav-title">Navigation</div>
            <ul>
              {ABOUT.sideNav.map((item) => (
                <li
                  key={item.key}
                  className={activeMenu === item.key ? "active" : ""}
                  onClick={() => setActiveMenu(item.key)}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </aside>

          <div className="djb-about-content">
            {activeMenu === "about" && (
              <React.Fragment>
                <div className="djb-tabs">
                  {ABOUT.tabs.map((tab) => (
                    <button
                      key={tab.key}
                      className={activeTab === tab.key ? "active" : ""}
                      onClick={() => setActiveTab(tab.key)}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <section className="djb-section">
                  {blocks.map(renderBlock)}
                </section>
              </React.Fragment>
            )}

            {/* {activeMenu === "org" && (
              <section className="djb-org-fullwidth">
                <OrgChart
                  data={orgStructureData}
                  title="Organizational Chart of Delhi Jal Board"
                />
              </section>
            )} */}

{activeMenu === "org" && (
  <section className="djb-org-fullwidth">
    <h3 className="djb-section-title">
      Organizational Structure of Delhi Jal Board
    </h3>

    <div className="org-image-wrapper">
      <img
        src="https://delhijalboard.delhi.gov.in/sites/default/files/Jalboard/images/org_chart_cng_0.jpg"
        alt="Delhi Jal Board Organisational Structure"
        className="org-structure-image"
      />
    </div>
  </section>
)} 
{activeMenu === "citizen" && (
  <section className="djb-section pdf-print-area">
    <div className="doc-frame">

      {/* ===== Document Header ===== */}
      <div className="doc-header">
        <div>
          <h3 className="doc-title">Citizen Charter – Delhi Jal Board</h3>
          <div className="doc-meta">
            <span>Last Updated: 2022</span>
            <span>•</span>
            <span>Format: PDF</span>
          </div>
        </div>

        <div className="pdf-toolbar no-print">
          <button
            className="pdf-btn"
            onClick={() =>
              window.open(
                "https://delhijalboard.delhi.gov.in/sites/default/files/Jalboard/pdf_files/citizen_s_charter_2022.pdf",
                "_blank"
              )
            }
          >
            🖨️ Print / Download PDF
          </button>
        </div>
      </div>

      {/* ===== Info Hint ===== */}
      <div className="doc-hint">
        For best print quality, please use the “Print / Download PDF” option.
      </div>

      {/* ===== PDF Container (iframe ALWAYS mounted) ===== */}
      <div className="pdf-container full-view">

        {/* Skeleton overlay */}
        {pdfLoading && (
          <div className="pdf-loader-overlay">
            <div className="pdf-skeleton">
              <div className="skeleton-line title"></div>
              <div className="skeleton-line"></div>
              <div className="skeleton-line"></div>
              <div className="skeleton-box"></div>
            </div>
          </div>
        )}

        {/* Iframe */}
        <iframe
          src="https://docs.google.com/gview?url=https://delhijalboard.delhi.gov.in/sites/default/files/Jalboard/pdf_files/citizen_s_charter_2022.pdf&embedded=true"
          title="Delhi Jal Board Citizen Charter 2022"
          frameBorder="0"
          onLoad={() => setPdfLoading(false)}
        />
      </div>

    </div>
  </section>
)}

{activeMenu === "who" && (
  <section className="djb-section">
    {ABOUT.content.who.map(renderBlock)}
  </section>
)}


            {activeMenu !== "about" && activeMenu !== "org" && activeMenu !== "citizen" && activeMenu !== "who" && (
              <section className="djb-section">
                <h3 className="djb-section-title">Content Coming Soon</h3>
              </section>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </React.Fragment>
  );
};

export default About;