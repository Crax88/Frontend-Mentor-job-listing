import { ReactNode } from "react";

type TProps = {
  children: ReactNode;
  isFeatured?: boolean;
  className?: string;
};

export const Card = ({ children, isFeatured, className }: TProps) => {
  return (
    <div
      className={`card${isFeatured ? " card--featured" : ""}${
        className ? " " + className : ""
      }`}
    >
      {children}
    </div>
  );
};
