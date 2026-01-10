import React from "react";
import HeaderBar from "./HeaderBar";
import TopInfoBar from "./TopInfoBar";
import Hero from "./Hero";
import QuickServices from "./QuickServices";
// import Services from "./Services";
// import Leadership from "./Leadership";
import NewsEvents from "./NewsEvents";
import { newsData } from "./NewsData";
import StatsSection from "./Stats";
import LatestVideos from "./LatestVideos";
import Footer from "./footer";

const videosList = [
  { url: "https://www.youtube.com/watch?v=1icZqcyOZ1E", title: "Video 1" },
  { url: "https://www.youtube.com/watch?v=ZtyrCgr6NFM", title: "Video 2" },
  { url: "https://www.youtube.com/watch?v=w-jD-ycs8D4", title: "Video 2" },


];
const LandingPage = () => {
  return (
    <div className="mcd-landing">
      
      <HeaderBar />
      <TopInfoBar />
      <Hero />
      <QuickServices />
      {/* <Services /> */}
      {/* <Leadership /> */}
      <NewsEvents news={newsData} />
      <StatsSection />
      <LatestVideos videos={videosList}  playlistUrl={"https://youtube.com/playlist?list=PLsh0qOxyZvgCHj03aX7TIRoeP1tAF02lO&si=1h6Mp5xnybG8DQWz"}/>
      <Footer />
    </div>
  );
};

export default LandingPage;