"use client";
import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>

      <nav className="flex items-center justify-between max-w-6xl mx-auto px-6 py-4 
backdrop-blur-md bg-white/70 dark:bg-zinc-900/70 
border-b border-white/20 dark:border-zinc-800 
sticky top-0 z-50">

        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-wide hover:text-[#C9A227] transition">
          SRM Insider
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="relative group">
            <span className="hover:text-[#C9A227] transition">Home</span>
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#C9A227] transition-all group-hover:w-full"></span>
          </Link>
          <Link href="/dashboard" className="relative group">
            <span className="hover:text-[#C9A227] transition">Dashboard</span>
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#C9A227] transition-all group-hover:w-full"></span>
          </Link>

          <Link href="/login" className="relative group">
            <span className="hover:text-[#C9A227] transition">Login</span>
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#C9A227] transition-all group-hover:w-full"></span>
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
        <div className="md:hidden flex flex-col items-center py-4 border-b bg-white dark:bg-zinc-900 divide-y divide-gray-300 dark:divide-zinc-700">
          <Link href="/" onClick={() => setIsOpen(false)} className="w-full text-center py-2">
            Home
          </Link>

          <Link href="/dashboard" onClick={() => setIsOpen(false)} className="w-full text-center py-2">
            Dashboard
          </Link>

          <Link href="/login" onClick={() => setIsOpen(false)} className="w-full text-center py-2">
            Login
          </Link>
        </div>
      )}

    </div>
  );
}