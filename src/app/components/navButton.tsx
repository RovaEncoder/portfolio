"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavButton = () => {
  const pathname = usePathname();

  const text = pathname == "/experience" ? "About" : "Experience";
  const link = pathname == "/experience" ? "/" : "experience";
  return (
    <Link
      href={link}
      className="inlin-flex hover:bg-gray-100 rounded-sm p-2 text-[#004AAD] "
    >
      {text}
    </Link>
  );
};

export default NavButton;
