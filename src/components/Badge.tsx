import { ReactNode } from "react";
import { ReactComponent as RemoveIcon } from "../assets/icons/icon-remove.svg";

type TProps = {
  children: ReactNode;
  variant?: "base" | "rounded" | "clearable";
  colorTheme?: "light" | "dark" | "primary";
  onClick?: () => void;
  onClear?: () => void;
};

export const Badge = ({
  variant = "base",
  colorTheme = "light",
  children,
  onClear,
  onClick,
}: TProps) => {
  return (
    <div
      className={`badge badge--${variant} badge--${colorTheme}`}
      onClick={onClick}
    >
      <span>{children}</span>
      {variant === "clearable" && (
        <div className="badge-remove" onClick={onClear}>
          <RemoveIcon />
        </div>
      )}
    </div>
  );
};
