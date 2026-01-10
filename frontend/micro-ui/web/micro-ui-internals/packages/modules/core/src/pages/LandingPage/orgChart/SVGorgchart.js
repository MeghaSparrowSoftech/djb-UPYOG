import React from "react";
import { computeLayout, buildLinks } from "./svglayout";
// import "./svgOrgChart.css";

const SvgOrgChart = ({ data }) => {
  const { nodes } = computeLayout(data);
  const links = buildLinks(nodes);

  // Calculate bounds
  const minX = Math.min(...nodes.map(n => n.x));
  const maxX = Math.max(...nodes.map(n => n.x + n.width));
  const minY = Math.min(...nodes.map(n => n.y));
  const maxY = Math.max(...nodes.map(n => n.y + n.height));

  const padding = 80;

  const viewBox = `
    ${minX - padding}
    ${minY - padding}
    ${maxX - minX + padding * 2}
    ${maxY - minY + padding * 2}
  `;

  return (
    <div className="orgchart-viewport">
      <svg
        viewBox={viewBox}
        preserveAspectRatio="xMidYMin meet"
        className="orgchart-svg"
      >
        {links.map((d, i) => (
          <path
            key={i}
            d={d}
            stroke="#0b5fa5"
            strokeWidth="2"
            fill="none"
          />
        ))}

        {nodes.map(n => (
          <g key={n.id}>
            <rect
              x={n.x}
              y={n.y}
              rx="6"
              ry="6"
              width={n.width}
              height={n.height}
              className="svg-node"
            />
            <text
              x={n.x + n.width / 2}
              y={n.y + n.height / 2}
              textAnchor="middle"
              dominantBaseline="middle"
              className="svg-text"
            >
              {n.title}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
};


export default SvgOrgChart;
