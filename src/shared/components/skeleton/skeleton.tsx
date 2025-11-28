import * as styles from "./skeleton.css";

interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  variant?: "rectangular" | "circular";
  className?: string;
}

export const Skeleton = ({
  width = "100%",
  height = "1rem",
  variant = "rectangular",
  className,
}: SkeletonProps) => {
  const widthValue = typeof width === "number" ? `${width}px` : width;
  const heightValue = typeof height === "number" ? `${height}px` : height;

  const shapeClass = variant === "circular" ? styles.circular : styles.rectangular;

  return (
    <div
      className={`${styles.skeleton} ${shapeClass}${className ? ` ${className}` : ""}`}
      style={{ width: widthValue, height: heightValue }}
    />
  );
};

export default Skeleton;
