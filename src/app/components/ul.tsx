import { CodeProps } from "../types";

export function UL({ children }: CodeProps) {
  return <ul className="my-5 list-none list-inside">{children}</ul>;
}
