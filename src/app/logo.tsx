"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function Logo() {
  const pathname = usePathname();
  return (
    <span className="text-md md:text-lg whitespace-nowrap font-bold">
      {pathname === "/" ? (
        <span className="cursor-default pr-2">Christ Abessolo</span>
      ) : (
        <Link
          href="/"
          className="hover:bg-gray-100  p-2 rounded-sm -ml-2 transition-[background-color]"
        >
          Christ Abessolo
        </Link>
      )}
    </span>
  );
}
