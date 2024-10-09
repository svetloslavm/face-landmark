import { FC, SyntheticEvent } from "react";
import Webcam from "react-webcam";

import { resolution } from "consts";

interface WebCameraProps {
  onLoadedData: (video: SyntheticEvent<HTMLVideoElement>) => void;
}

/**
 * WebCamera component that renders a webcam feed using specified video constraints.
 *
 * @component
 * @param {Object} props - Component props
 * @param {function} props.onLoadedData - Callback function to handle the event when the webcam data is loaded
 *
 * @example
 * <WebCamera onLoadedData={handleLoadedData} />
 *
 * @typedef {Object} WebCameraProps
 * @property {function} onLoadedData - Callback function to handle the event when the webcam data is loaded
 */
export const WebCamera: FC<WebCameraProps> = ({ onLoadedData }) => {
  const webcamOptions = {
    videoConstraints: {
      facingMode: "user",
      width: resolution.width,
      height: resolution.height,
    },
    audio: false,
  };

  return (
    <Webcam
      width={resolution.width}
      height={resolution.height}
      onLoadedData={onLoadedData}
      {...webcamOptions}
    />
  );
};
