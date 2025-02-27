"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState,useEffect } from "react";

// Nav links array
const navLinks = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Meet the Designer", href: "/about" },
  { name: "Let's Connect", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const [showTooltip, setShowTooltip] = useState(true);//tooltip visibility

// Hide tooltip after  9 seconds
useEffect(() => {
  const timer = setTimeout(() => {
    setShowTooltip(false);
  }, 9000); // 3 seconds
  return () => clearTimeout(timer); // Cleanup the timer
}, []);

  return (
    <header className="bg-primary text-text py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <h1 className="text-xl font-bold">
          Bonnie <span className="text-accent">Graphics</span>
        </h1>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-text focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
        </button>
 {/* Tooltip Message */}
 {showTooltip && (
            <div className="absolute top-10 right-0 bg-accent text-primary text-sm px-3 py-1 rounded-md shadow-md animate-fade">
              Click here to navigate to pages
            </div>
          )}
        {/* Navigation Links */}
        <nav
          className={`absolute top-16 left-0 w-full bg-primary p-6 lg:static lg:w-auto lg:flex lg:p-0 transition-all duration-300 ${
            isOpen ? "flex flex-col" : "hidden"
          }`}
        >
          <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6">
            {navLinks.map((navlink) => (
              <li key={navlink.name}>
                <Link
                  href={navlink.href}
                  className={`${
                    pathname === navlink.href ? "text-accent" : "text-text"
                  } hover:text-accent transition duration-200`}
                  onClick={() => setIsOpen(false)} // Close menu on link click
                >
                  {navlink.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
