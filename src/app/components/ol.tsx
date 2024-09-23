import { CodeProps } from "../types";

export function OL({ children }: CodeProps) {
  return <ol className="my-5 list-decimal list-inside">{children}</ol>;
}
