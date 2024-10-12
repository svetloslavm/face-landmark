import React, { useRef } from "react";
import { FaceMeshCanvas, WebCamera } from "components";
import { runDetector } from "utils";
import { useResize } from "hooks";
import { resolution } from "consts";

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
 * - Uses the `useResize` hook to get the current window size.
 * - Determines if the device is mobile based on the window width.
 * - Handles the video load event to run the face landmark detector.
 *
 * @function
 * @name App
 */
export const App = () => {
  const ref = useRef<HTMLCanvasElement>(null);
  const windowSize = useResize();

  const isMobile = windowSize.width <= 768;

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
    <div className="appWrapper">
      <div className={`${isMobile ? "mobileLayout" : ""}`}>
        <WebCamera
          resolution={isMobile ? resolution.mobile : resolution.desktop}
          onLoadedData={handleVideoLoad}
        />
      </div>
      <div className={`${isMobile ? "mobileLayout" : ""}`}>
        <FaceMeshCanvas
          ref={ref}
          resolution={isMobile ? resolution.mobile : resolution.desktop}
        />
      </div>
    </div>
  );
};
