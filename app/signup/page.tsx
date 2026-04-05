"use client";

import { useState } from "react";
import Link from "next/link";

export default function SignupPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSignup = () => {
        if (!name || !email || !password) {
            alert("Please fill all fields");
            return;
        }

        alert("Account created successfully (mock)");
    };
    return (
        <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4">

            <div className="w-full max-w-md p-6 rounded-2xl border bg-white dark:bg-zinc-900 dark:border-zinc-800 shadow-md space-y-6">

                <h1 className="text-2xl font-bold text-center">
                    Create Account
                </h1>

                {/* Name */}
                <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 rounded-xl border bg-white dark:bg-zinc-800 dark:border-zinc-700 outline-none focus:ring-2 focus:ring-[#C9A227] focus:border-[#C9A227] transition duration-200"
                />

                {/* Email */}
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 rounded-xl border bg-white dark:bg-zinc-800 dark:border-zinc-700 outline-none focus:ring-2 focus:ring-[#C9A227] focus:border-[#C9A227] transition duration-200"
                />

                {/* Password */}
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 rounded-xl border bg-white dark:bg-zinc-800 dark:border-zinc-700 outline-none focus:ring-2 focus:ring-[#C9A227] focus:border-[#C9A227] transition duration-200"
                />

                {/* Button */}
                <button
                    onClick={handleSignup}
                    className="w-full bg-[#C9A227] hover:bg-[#b8961f] text-white py-2 rounded-xl transition"
                >
                    Sign Up
                </button>
                {/* Footer */}
                <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                    Already have an account?{" "}
                    <Link href="/login" className="text-[#C9A227] hover:underline">
                        Login
                    </Link>
                </p>

            </div>

        </div>
    );
}