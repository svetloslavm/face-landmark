import { FC, SyntheticEvent } from "react";
import Webcam from "react-webcam";
import { resolution } from "consts";

interface WebCameraProps {
  onLoadedData: (video: SyntheticEvent<HTMLVideoElement>) => void;
}

/**
 * WebCamera component that renders a webcam feed using specified video constraints.
 *
 * @param {Object} props - Component props
 * @param {Object} props.resolution - The resolution of the webcam feed
 * @param {function} props.onLoadedData - Callback function to handle the event when the webcam data is loaded
 *
 * @example
 * <WebCamera resolution={{ width: 1280, height: 720 }} onLoadedData={handleLoadedData} />
 */
export const WebCamera: FC<WebCameraProps> = ({ onLoadedData }) => {
  const webcamOptions = {
    videoConstraints: {
      facingMode: "user",
      ...resolution,
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
