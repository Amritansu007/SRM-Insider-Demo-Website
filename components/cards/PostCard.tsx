"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
type Props = {
    id: string;
    title: string;
    category: string;
};

export function PostCard({ id, title, category }: Props) {
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("bookmarks") || "[]");
        setSaved(stored.includes(id));
    }, [id]);

    const toggleSave = () => {
        let stored = JSON.parse(localStorage.getItem("bookmarks") || "[]");

        if (stored.includes(id)) {
            stored = stored.filter((item: string) => item !== id);
            setSaved(false);
        } else {
            stored.push(id);
            setSaved(true);
        }

        localStorage.setItem("bookmarks", JSON.stringify(stored));
    };

    return (
        <div className="group p-5 rounded-2xl border bg-white dark:bg-zinc-900 dark:border-zinc-800 transition-all duration-300 hover:shadow-xl hover:border-[#C9A227]/40 hover:-translate-y-2 relative overflow-hidden">

            <div className="absolute inset-0 bg-[#C9A227]/0 group-hover:bg-[#C9A227]/5 transition duration-300" />

            <span className="relative z-10 text-xs text-[#C9A227] font-medium">
                {category}
            </span>

            <h3 className="relative z-10 mt-2 text-lg font-semibold">
                {title}
            </h3>

            <div className="relative z-10 mt-4 flex justify-between items-center">
                <Link
                    href={`/post/${id}`}
                    className="text-sm text-[#C9A227] hover:underline"
                >
                    Read more →
                </Link>
                <button
                    onClick={toggleSave}
                    className={`text-sm px-3 py-1 rounded-lg transition ${saved
                            ? "bg-[#C9A227] text-white"
                            : "border hover:bg-gray-100 dark:hover:bg-zinc-800"
                        }`}
                >
                    {saved ? "Saved ✓" : "Save"}
                </button>
            </div>
        </div>
    );
}