import React from "react";
import topInfoConfig from "./configs/topInfoConfig"; // <-- Import config

const TopInfoBar = () => {
  return (
    <div className="mcd-info-bar">
      <span className="mcd-info-icon">{topInfoConfig.icon}</span>

      <div className="mcd-info-content">
        <p className="mcd-info-text">{topInfoConfig.message}</p>
      </div>
    </div>
  );
};

export default TopInfoBar;
