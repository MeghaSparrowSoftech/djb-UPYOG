import React, { useMemo } from "react";
import services from "./configs/services.json";

// 🔀 Fisher–Yates shuffle (does NOT mutate original array)
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const SuggestedRow = ({ limit = 3 }) => {
  const suggestedServices = useMemo(() => {
    return shuffleArray(
      services.filter((s) => s.active)
    ).slice(0, limit);
  }, []);

  return (
    <div className="mcd-suggested-wrapper">
      <span className="mcd-suggested-label">Suggested:</span>

      {suggestedServices.map((service) => (
        <button
          key={service.code}
          className="mcd-suggested-btn"
        >
          {service.module}
        </button>
      ))}
    </div>
  );
};

export default SuggestedRow;
