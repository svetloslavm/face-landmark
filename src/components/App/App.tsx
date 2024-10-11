import React, { useRef } from "react";
import { FaceMeshCanvas, WebCamera } from "components";
import { runDetector } from "utils";

import "index.css";

import "@tensorflow/tfjs";

/**
 * The `App` component is the main component of the application.
 * It sets up a video feed and a canvas for face mesh detection.
 *
 * @component
 *
 * @returns {JSX.Element} The rendered component.
 *
 * @example
 * <App />
 *
 * @remarks
 * This component uses a `WebCamera` component to capture video input and a `FaceMeshCanvas` component to render the face mesh.
 * It utilizes a `useRef` hook to reference the canvas element and a `handleVideoLoad` function to start the face mesh detector
 * when the video is loaded and ready.
 *
 * @function handleVideoLoad
 * @param {React.SyntheticEvent<HTMLVideoElement>} videoNode - The synthetic event containing the video element.
 * @returns {void}
 *
 * @remarks
 * The `handleVideoLoad` function checks if the video is ready and then runs the face mesh detector using the video and canvas elements.
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
    <>
      <WebCamera onLoadedData={handleVideoLoad} />
      <FaceMeshCanvas ref={ref} />
    </>
  );
};
