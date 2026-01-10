import React from "react";
import statsConfig from "./configs/StatsConfig"; // <-- import stats data

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="stats-container">
        {statsConfig.map((item, i) => (
          <div key={i} className="stats-card pattern-paper">
            {/* Wavy abstract lines */}
            <div className="wave-lines"></div>

            <h2 className="stats-value">{item.value}</h2>
            <h4 className="stats-title">{item.title}</h4>
            <p className="stats-desc">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
