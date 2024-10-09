import { Point } from "typings";

/**
 * Represents a prediction result containing keypoints.
 *
 * @interface Prediction
 * @property {Array<Point>} keypoints - An array of keypoints representing the prediction.
 */
export interface Prediction {
  keypoints: Array<Point>;
}
