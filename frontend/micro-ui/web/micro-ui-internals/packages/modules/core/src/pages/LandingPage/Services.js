// import React, { useState } from "react";
// import { Card } from "@mcd89/finance-ui-react-components";

// const moduleIcons = {
//   // "Property Tax": "/assets/icons/property.png",
//   // "Trade License": "/assets/icons/trade.png",
//   // "Birth Certificate": "/assets/icons/birth.png",
//   // "Water & Sewerage": "/assets/icons/water.png",
//   // Add more mappings...
// };

// const ServiceGrid = () => {
//   const { data, isLoading, error } = Digit.Hooks.useCustomMDMS(
//     "dl",
//     "tenant",
//     [{ name: "citymodule" }]
//   );

//   const modules = data?.tenant?.citymodule || [];
//   const activeModules = modules.filter((m) => m.active).sort((a, b) => a.order - b.order);

//   const [expanded, setExpanded] = useState(false);
//   const visibleModules = expanded ? activeModules : activeModules.slice(0, 8);

//   if (isLoading) return <p>Loading...</p>;
//   if (error) return <p>Failed to load</p>;

//   return (
//     <section className="mcd-service-wrapper">
//       <h2 className="mcd-service-title">Services</h2>

//       <div className="mcd-service-grid">
//         {visibleModules.map((item, idx) => (
//           <Card key={idx} className="service-card card-double-wave">
//             <img
//               src={moduleIcons[item.module] || "https://cdn.ksmart.lsgkerala.gov.in/common/webpage/services/property_tax.webp"}
//               alt={item.module}
//               className="service-card-icon service-card-title"
//             />
//             <span className="service-title">{item.module}</span>
//           </Card>
//         ))}
//       </div>

//       {activeModules.length > 10 && (
//         <div className="service-expand-btn-wrapper">
//           <button
//             className="service-expand-btn"
//             onClick={() => setExpanded(!expanded)}
//           >
//             {expanded ? "Show Less" : "View All Services"}
//           </button>
//         </div>
//       )}
//     </section>
//   );
// };

// export default ServiceGrid;

// import React, { useState } from "react";
// import { Card } from "@mcd89/finance-ui-react-components";
// import services from "./configs/services.json"; // ✅ JSON import
// import WaterDropIcon from "./icons/WaterDrop";
// const moduleIcons = {
  // "Property Tax": "/assets/icons/property.png",
  // "Trade License": "/assets/icons/trade.png",
  // "Birth Certificate": "/assets/icons/birth.png",
  // "Water & Sewerage": "/assets/icons/water.png",
// };

// const ServiceGrid = () => {
  // ✅ FIX: use imported JSON
  // const modules = services || [];

//   const activeModules = modules
//     .filter((m) => m.active)
//     .sort((a, b) => a.order - b.order);

//   const [expanded, setExpanded] = useState(false);
//   const visibleModules = expanded ? activeModules : activeModules.slice(0, 8);

//   return (
//     <section className="mcd-service-wrapper">
//       <h2 className="mcd-service-title">Services</h2>

//       <div className="mcd-service-grid">
//         {visibleModules.map((item, idx) => (
//           <Card key={idx} className="service-card card-double-wave">
//              {/* 🔹 Water Drop Icon (COMMON FOR ALL CARDS) */}

//             <img
//               src={
//                 moduleIcons[item.module] ||
//                 item.bannerImage ||
//                 "https://cdn.ksmart.lsgkerala.gov.in/common/webpage/services/property_tax.webp"
//               }
//               alt={item.module}
//               className="service-card-icon service-card-title"
//             />
//             <div className="service-wave-drop">
//               <WaterDropIcon size={22} />
//             </div>
//             <span className="service-title">{item.module}</span>
//           </Card>
//         ))}
//       </div>

//       {activeModules.length > 10 && (
//         <div className="service-expand-btn-wrapper">
//           <button
//             className="service-expand-btn"
//             onClick={() => setExpanded(!expanded)}
//           >
//             {expanded ? "Show Less" : "View All Services"}
//           </button>
//         </div>
//       )}
//     </section>
//   );
// };

// export default ServiceGrid;