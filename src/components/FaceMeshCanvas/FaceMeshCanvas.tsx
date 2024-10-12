import { resolution } from "consts";
import { forwardRef, Ref } from "react";

interface FaceMeshCanvasProps {
  ref: Ref<HTMLCanvasElement>;
}

/**
 * A React functional component that renders a canvas element for face mesh visualization.
 * This component uses `forwardRef` to pass a ref to the underlying canvas element.
 *
 * @param props - The properties passed to the canvas element.
 * @returns A canvas element with the provided props and resolution.
 */
export const FaceMeshCanvas = forwardRef<
  HTMLCanvasElement,
  FaceMeshCanvasProps
>((props, ref) => <canvas ref={ref} {...props} {...resolution} />);
