import { ReactNode } from "react";
import { CodeProps } from "../types";

export const Code = ({ children }: CodeProps) => {
  return (
    <code
      className={`
        [p_&]:text-sm
        [p_&]:px-1
        [p_&]:py-0.5
        [p_&]:rounded-sm
        [p_&]:bg-gray-200
      `}
    >
      {children}
    </code>
  );
};
