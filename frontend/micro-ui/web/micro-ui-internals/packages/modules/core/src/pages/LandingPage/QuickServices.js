import React from "react";
import WaterBillIcon from "./icons/WaterBIllicon";
import NewConnectionIcon from "./icons/NewConnection";
import MutationIcon from "./icons/MutationIcon";
import RainWaterHarvestingIcon from "./icons/RWHIcon";
import AddServiceIcon from "./icons/SeviceIcon";
import GrievanceIcon from "./icons/GrievanceIcon";
const QuickServices = () => {
  const services = [
    { icon: <WaterBillIcon />, label: "Pay Your Water Bill" },
    { icon: <NewConnectionIcon />, label: "Apply for New Connection" },
    { icon: <MutationIcon />, label: "Apply for Mutation" },
    { icon: <GrievanceIcon />, label: "Apply for Grievance" },
    { icon: <AddServiceIcon />, label: "Add Service" },
    { icon: <RainWaterHarvestingIcon />, label: "Rain Water Harvesting" }
  ];

  return (
    <section className="mcd-quick-wrapper">
      <h2 className="mcd-quick-title">Quick Services</h2>

      <div className="mcd-quick-grid">
        {services.map((item, index) => (
          <div key={index} className="mcd-quick-card ">
            <div className="mcd-quick-icon">{item.icon}</div>
            <div className="mcd-quick-text">{item.label}</div>
            <div className="mcd-quick-arrow">›</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QuickServices;
