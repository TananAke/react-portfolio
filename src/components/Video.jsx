import { useEffect, useRef, useState } from "react";
// import testVideo from "./testVideo.mp4";

import slide from '../assets/slide.mp4'

export default function Video() {
  const ref = useRef(null);
  const [focus, setFocus] = useState(false);

  const loop = () => {
    ref.current.play();
  };

  const onEndedLoop = () => {
    if (focus) loop(); // when ended check if its focused then loop
  };

  useEffect(() => {
    if (focus) loop(); // when focused then loop
  }, [focus]);

  return (
    <div className="App">
      <h2>Loop video with hover ReactJS!</h2>
      <video
        id="video"
        ref={ref}
        style={{ width: "300px" }}
        autoPlay
        onMouseOver={() => setFocus(true)}
        onMouseOut={() => setFocus(false)}
        muted={true}
        src={slide}
        onEnded={onEndedLoop}
      ></video>
    </div>
  );
}