"use client";
import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>

      <nav className="flex items-center justify-between px-6 md:px-8 py-4 
    backdrop-blur-md bg-white/70 dark:bg-zinc-900/70 
    border-b border-white/20 dark:border-zinc-800 
    sticky top-0 z-50">

        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-wide">
          SRM Insider
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="relative hover:text-[#C9A227] transition">
            Home
          </Link>
          <Link href="/dashboard" className="relative hover:text-[#C9A227] transition">
            Dashboard
          </Link>
          <Link href="/login" className="relative hover:text-[#C9A227] transition">
            Login
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-xl"
          >
            ☰
          </button>

          <ThemeToggle />
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 py-4 border-b bg-white dark:bg-zinc-900">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/dashboard" onClick={() => setIsOpen(false)}>Dashboard</Link>
          <Link href="/login" onClick={() => setIsOpen(false)}>Login</Link>
        </div>
      )}

    </div>
  );
}