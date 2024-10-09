import * as faceLandmarksDetection from "@tensorflow-models/face-landmarks-detection";
import { MediaPipeFaceMeshTfjsModelConfig } from "@tensorflow-models/face-landmarks-detection";
import { drawMesh } from "./drawMesh";

/**
 * Runs the face landmarks detector on a given video element and draws the results on a canvas element.
 *
 * @param {HTMLVideoElement} video - The video element to use for face detection.
 * @param {HTMLCanvasElement} canvas - The canvas element to draw the detected face landmarks.
 */

export const runDetector = async (
  video: HTMLVideoElement,
  canvas: HTMLCanvasElement
) => {
  const model = faceLandmarksDetection.SupportedModels.MediaPipeFaceMesh;
  const detectorConfig = { runtime: "tfjs" };

  const detector = await faceLandmarksDetection.createDetector(
    model,
    detectorConfig as MediaPipeFaceMeshTfjsModelConfig
  );

  const detect = async (mesh: faceLandmarksDetection.FaceLandmarksDetector) => {
    const estimationConfig = { flipHorizontal: false };
    const faces = await mesh.estimateFaces(video, estimationConfig);
    const ctx = canvas.getContext("2d");

    ctx?.clearRect(0, 0, canvas.width, canvas.height);

    if (faces.length > 0 && ctx) {
      requestAnimationFrame(() => drawMesh(faces[0], ctx));
    }

    detect(mesh);
  };

  detect(detector);
};
