import { triangulation } from "consts";
import { Point, Prediction } from "typings";

/**
 * Draws a path on the canvas context using the provided points.
 *
 * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
 * @param {Array<Point>} points - An array of points to define the path.
 * @param {boolean} closePath - Whether to close the path or not.
 */
const drawPath = (
  ctx: CanvasRenderingContext2D,
  points: Array<Point>,
  closePath: boolean
) => {
  const region = new Path2D();
  region.moveTo(points[0].x, points[0].y);

  for (let i = 1; i < points.length; i++) {
    const point = points[i];
    region.lineTo(point.x, point.y);
  }

  if (closePath) region.closePath();

  ctx.strokeStyle = "aqua";
  ctx.lineWidth = 0.5;
  ctx.stroke(region);
};

/**
 * Clears the entire canvas.
 *
 * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
 */
const clearCanvas = (ctx: CanvasRenderingContext2D) => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
};

/**
 * Draws key points on the canvas context.
 *
 * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
 * @param {Array<Point>} keyPoints - An array of key points to draw.
 */
const drawKeyPoints = (
  ctx: CanvasRenderingContext2D,
  keyPoints: Array<Point>
) => {
  for (const keyPoint of keyPoints) {
    ctx.beginPath();
    ctx.arc(keyPoint.x, keyPoint.y, 1, 0, 3 * Math.PI);
    ctx.fillStyle = "aqua";
    ctx.fill();
  }
};

/**
 * Draws triangles on the canvas based on the triangulation data.
 * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
 * @param {Array<Point>} keyPoints - An array of key points to use for drawing triangles.
 */
const drawTriangles = (
  ctx: CanvasRenderingContext2D,
  keyPoints: Array<Point>
) => {
  for (let i = 0; i < triangulation.length / 3; i++) {
    const points = [
      keyPoints[triangulation[i * 3]],
      keyPoints[triangulation[i * 3 + 1]],
      keyPoints[triangulation[i * 3 + 2]],
    ];
    drawPath(ctx, points, true);
  }
};

/**
 * Draws a mesh on the canvas based on the prediction data.
 * @param {Prediction} prediction - The prediction data containing key points.
 * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
 */
export const drawMesh = (
  prediction: Prediction,
  ctx: CanvasRenderingContext2D
) => {
  if (!prediction || !prediction.keypoints) return;

  clearCanvas(ctx);
  drawTriangles(ctx, prediction.keypoints);
  drawKeyPoints(ctx, prediction.keypoints);
};
