import React, { useState, useEffect, useRef } from "react";
import Card from "./card";
const URL =
  "https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/14a27bd0bcd0cd323b35ad79cf3b493dddf6216b/videos.json";


  //Question - play only that video which is in the viewport
const InstagramAutoPlay = () => {
  const [videos, setVideos] = useState([]);
    const [load, setLoad ] = useState(false);

  const fetchData = async function () {
    try {
      const data = await fetch(URL);
      const json = await data.json();

      setVideos(json);
    } catch (error) {}
  };

  return (
    <div className="reel-cards-container">
      {!load && <button type="submit" onClick={()=>{setLoad(true) ; fetchData()}}> load video</button> } 
      {videos.map((video : any) => {
        return <Card src={video.videoUrl} key={video.id} />;
      })}
    </div>
  );
};

export default InstagramAutoPlay;
