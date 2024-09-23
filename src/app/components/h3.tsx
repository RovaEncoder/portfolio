import { CodeProps } from "../types";
import { withHeadingId } from "./utils";

export function H3({ children }: CodeProps) {
  return (
    <h3 className="text-lg font-bold mb-1 group flex flex-row gap-1">
      <span className="invisible group-hover:visible -mx-5 text-gray-600 border-b-2 border-indigo-500 ">
        #
      </span>
      <span className="mx-6">{withHeadingId(children)}</span>
    </h3>
    // <h3 className="group font-bold text-lg my-8 relative">
    //   {withHeadingId(children)}
    // </h3>
  );
}
