"use client";

import { useState } from "react";
import Link from "next/link";
export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = () => {
        if (!email || !password) {
            alert("Please fill all fields");
            return;
        }

        alert("Login successful (mock)");
    };
    return (
        <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4">

            <div className="w-full max-w-md p-6 rounded-2xl border bg-white dark:bg-zinc-900 dark:border-zinc-800 shadow-md space-y-6">

                <h1 className="text-2xl font-bold text-center">
                    Welcome Back!
                </h1>

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
                    onClick={handleLogin}
                    className="w-full bg-[#C9A227] hover:bg-[#b8961f] text-white py-2 rounded-xl transition"
                >
                    Login
                </button>

                {/* Footer */}
                <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                    Don’t have an account?{" "}
                    <Link href="/signup" className="text-[#C9A227] hover:underline">
                        Sign up
                    </Link>
                </p>

            </div>

        </div>
    );
}