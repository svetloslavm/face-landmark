import React, { useRef } from "react";
import { FaceMeshCanvas, WebCamera } from "components";
import { runDetector } from "utils";

import "index.css";

import "@tensorflow/tfjs";

/**
 * The `App` component is the main entry point of the application.
 * It sets up a video feed and a canvas for face landmark detection.
 *
 * @returns {JSX.Element} The rendered component.
 *
 * @component
 * @example
 * return <App />
 *
 * @remarks
 * - Uses the `useRef` hook to reference the canvas element.
 * - Handles the video load event to run the face landmark detector.
 *
 * @function
 * @name App
 */
export const App = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  const handleVideoLoad = async (
    videoNode: React.SyntheticEvent<HTMLVideoElement>
  ) => {
    const video = videoNode.currentTarget;
    if (video.readyState !== 4) return;

    if (ref.current) {
      await runDetector(video, ref.current);
    }
  };

  return (
    <div className="container">
      <WebCamera onLoadedData={handleVideoLoad} />
      <FaceMeshCanvas ref={ref} />
    </div>
  );
};
