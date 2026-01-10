// import React from "react";
// import SearchBar from "./SearchBar";
// import SuggestedRow from "./SuggestedRow";
// import heroConfig from "./configs/HeroConfig"; // ⭐ imported config

// const Hero = () => {
//   const { bannerImage, bannerAlt, showSearchBar, showSuggestedRow, overlapImage, overlapAlt } = heroConfig;

//   return (
//     <React.Fragment>
//       {/* Hero Banner Wrapper */}
//       <section className="mcd-hero-wrapper">
//         <div className="mcd-hero-container">

//            {/* 🔹 Overlapping Image */}
//           {/* {overlapImage && (
//             <img
//               src={overlapImage}
//               alt={overlapAlt}
//               className="mcd-hero-overlap-img"
//             />
//           )} */}
//           <img
//             src={bannerImage}
//             alt={bannerAlt}
//             className="mcd-hero-main-img"
//           />
//         </div>
//       </section>

//       {/* Search bar FLOATS BELOW hero */}
//       {showSearchBar && <SearchBar />}

//       {/* Suggested Row */}
//       {showSuggestedRow && <SuggestedRow />}
//     </React.Fragment>
//   );
// };

// export default Hero;


// import React from "react";
// import SearchBar from "./SearchBar";
// import SuggestedRow from "./SuggestedRow";
// import heroConfig from "./configs/HeroConfig";

// const Hero = () => {
//   const {
//     bannerImage,
//     bannerAlt,
//     showSearchBar,
//     showSuggestedRow,
//     logoImage, // ✅ from config
//   } = heroConfig;

//   return (
//     <React.Fragment>
//       {/* Hero Banner Wrapper */}
//       <section className="mcd-hero-wrapper">
//         <div className="mcd-hero-container mcd-hero-split">

//           {/* 🔹 LEFT SECTION */}
//           <div className="mcd-hero-left">
//             {logoImage && (
//               <img
//                 src={logoImage}
//                 alt="Delhi Jal Board Logo"
//                 className="mcd-hero-logo"
//               />
//             )}

//             <p className="mcd-hero-welcome-text">Welcome to</p>
//             <h1 className="mcd-hero-title">Delhi Jal Board</h1>
//           </div>

//           {/* 🔹 RIGHT SECTION */}
//           <div className="mcd-hero-right">
//             <img
//               src={bannerImage}
//               alt={bannerAlt}
//               className="mcd-hero-main-img"
//             />
//           </div>

//         </div>
//       </section>

//       {/* Search bar FLOATS BELOW hero */}
//       {showSearchBar && <SearchBar />}

//       {/* Suggested Row */}
//       {showSuggestedRow && <SuggestedRow />}
//     </React.Fragment>
//   );
// };

// export default Hero;


import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import SuggestedRow from "./SuggestedRow";
import heroConfig from "./configs/HeroConfig";

const Hero = () => {
  const {
    bannerImage,
    bannerAlt,
    showSearchBar,
    showSuggestedRow,
    logoImage,
  } = heroConfig;

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true); // runs only once on mount
  }, []);

  return (
    <React.Fragment>
      <section className="mcd-hero-wrapper">
        <div className={`mcd-hero-container mcd-hero-split ${animate ? "hero-animate" : ""}`}>

          <div className="mcd-hero-left">
            {logoImage && (
              <img
                src={logoImage}
                alt="Delhi Jal Board Logo"
                className="mcd-hero-logo"
              />
            )}

            <p className="mcd-hero-welcome-text">Welcome to</p>
            <h1 className="mcd-hero-title">Delhi Jal Board</h1>
          </div>

          <div className="mcd-hero-right">
            <img
              src={bannerImage}
              alt={bannerAlt}
              className="mcd-hero-main-img"
            />
          </div>

        </div>
      </section>

      {showSearchBar && <SearchBar />}
      {showSuggestedRow && <SuggestedRow />}
    </React.Fragment>
  );
};

export default Hero;
