import { CodeProps } from "../types";

export function P({ children }: CodeProps) {
  return <p className="my-5 [blockquote_&]:my-2">{children}</p>;
}
