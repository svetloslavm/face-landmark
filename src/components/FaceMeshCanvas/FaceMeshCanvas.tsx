import { resolution } from "consts";
import { forwardRef, Ref } from "react";

interface FaceMeshCanvasProps {
  ref: Ref<HTMLCanvasElement>;
}

/**
 * A React functional component that renders a canvas element for face mesh visualization.
 * This component uses `forwardRef` to pass a ref to the underlying canvas element.
 *
 * @component
 * @param {FaceMeshCanvasProps} props - The properties passed to the canvas element.
 * @param {React.Ref<HTMLCanvasElement>} ref - The ref to be forwarded to the canvas element.
 * @returns {JSX.Element} A canvas element with the provided props and resolution.
 */
export const FaceMeshCanvas = forwardRef<
  HTMLCanvasElement,
  FaceMeshCanvasProps
>((props, ref) => <canvas ref={ref} {...props} {...resolution} />);
