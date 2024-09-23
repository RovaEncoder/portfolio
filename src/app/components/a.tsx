import Link from "next/link";
import { ReactNode, AnchorHTMLAttributes } from "react";

interface AProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  className?: string;
  href: string;
}

export function A({ children, className = "", href, ...props }: AProps) {
  if (href[0] === "#") {
    return (
      <a
        href={href}
        className={`border-b text-gray-600 border-gray-300 transition-[border-color] ${className}`}
        {...props}
      >
        {children}
      </a>
    );
  } else {
    return (
      <Link
        href={href}
        className={`border-b text-gray-600 border-gray-300 transition-[border-color] ${className}`}
        {...props}
      >
        {children}
      </Link>
    );
  }
}
