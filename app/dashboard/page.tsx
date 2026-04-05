"use client";

import { useState } from "react";
import { posts } from "@/data/mockData";
import { PostCard } from "@/components/cards/PostCard";

export default function Dashboard() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const categories = ["All", "Placements", "Internships", "Campus Life"];

  const filteredPosts = posts.filter((post) => {
  const matchesCategory =
    filter === "All" || post.category === filter;

  const matchesSearch = post.title
    .toLowerCase()
    .includes(search.toLowerCase());

  return matchesCategory && matchesSearch;
});
  return (
    <div className="px-4 md:px-8 py-6 space-y-8 max-w-6xl mx-auto">

      {/* Heading */}
      <h1 className="text-2xl md:text-3xl font-bold">Dashboard</h1>
        {/* Search */}
        <input
            type="text"
            placeholder="Search posts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/2 px-4 py-2 rounded-xl border bg-white dark:bg-zinc-900 dark:border-zinc-800 outline-none text-sm md:text-base"
        />
      {/* Filters */}
      <div className="flex gap-2 md:gap-3 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-xl border transition ${
              filter === cat
                ? "bg-[#C9A227] text-white"
                : "hover:bg-gray-100 dark:hover:bg-zinc-800"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {filteredPosts.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            category={post.category}
          />
        ))}
      </div>

    </div>
  );
}