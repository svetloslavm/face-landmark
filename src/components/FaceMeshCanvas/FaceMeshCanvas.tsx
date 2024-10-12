import { forwardRef, Ref } from "react";
import { Resolution } from "typings";

interface FaceMeshCanvasProps {
  ref: Ref<HTMLCanvasElement>;
  resolution: Resolution;
}

/**
 * A React functional component that renders a canvas element for face mesh visualization.
 * This component uses `forwardRef` to pass a ref to the underlying canvas element.
 *
 * @param {FaceMeshCanvasProps} props - The properties passed to the canvas element.
 * @returns {JSX.Element} A canvas element with the provided props and resolution.
 */
export const FaceMeshCanvas = forwardRef<
  HTMLCanvasElement,
  FaceMeshCanvasProps
>((props, ref) => {
  const {
    resolution: { width, height },
  } = props;

  return <canvas ref={ref} width={width} height={height} />;
});
