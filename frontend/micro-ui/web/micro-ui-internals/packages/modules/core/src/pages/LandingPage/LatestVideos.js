import React from "react";

const convertToEmbedLink = (url) => {
  const videoId = url.split("v=")[1];
  return `https://www.youtube.com/embed/${videoId}`;
};

const LatestVideos = ({ videos = [], playlistUrl }) => {
  return (
    <section className="videos-section">
      <h2 className="videos-title">Latest Videos</h2>

      <div className="videos-wrapper">
        {videos.map((video, index) => (
          <div className="video-card" key={index}>
            <iframe
              src={convertToEmbedLink(video.url)}
              title={video.title}
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>

      {/* ⭐ New Button Added (No logic changed) */}
      {playlistUrl && (
        <a
          href={playlistUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="playlist-btn"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
            alt="YouTube"
            className="yt-icon"
          />
          View Full Playlist
        </a>
      )}
    </section>
  );
};

export default LatestVideos;

// import React from "react";

// const convertToEmbedLink = (url) => {
//   const videoId = url.split("v=")[1];
//   return `https://www.youtube.com/embed/${videoId}`;
// };

// const LatestVideo = ({ videoUrl, title = "Latest Video" }) => {
//   return (
//     <section className="videos-section">
//       <h2 className="videos-title">{title}</h2>

//       <div className="video-card single-video">
//         <iframe
//           src={convertToEmbedLink(videoUrl)}
//           title={title}
//           allowFullScreen
//         ></iframe>
//       </div>
//     </section>
//   );
// };

// export default LatestVideo;
