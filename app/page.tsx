"use client";

import { motion } from "framer-motion";
import { CategoryCard } from "@/components/cards/CategoryCard";
import { PostCard } from "@/components/cards/PostCard";
import { posts } from "@/data/mockData";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-16 md:space-y-20">

      {/* HERO SECTION */}
      <div className="relative min-h-[calc(100vh-80px)] flex flex-col items-center justify-center text-center px-6 overflow-hidden">

        {/* Background Glow */}
        <div className="absolute w-[500px] h-[500px] bg-[#C9A227]/20 blur-3xl rounded-full top-[-100px] z-0" />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-5xl md:text-6xl font-bold leading-tight max-w-4xl"
        >
          Your Gateway to{" "}
          <span className="bg-gradient-to-r from-[#C9A227] to-yellow-400 bg-clip-text text-transparent">Placements</span>,{" "}
          <span className="bg-gradient-to-r from-[#C9A227] to-yellow-400 bg-clip-text text-transparent">Internships</span> & Campus Life
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative z-10 mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl"
        >
          SRM Insider brings you the latest opportunities, insights, and resources
          to help you succeed in your academic and professional journey.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="relative z-10 mt-8"
        >
          <Link href="/dashboard">
            <button className="bg-[#C9A227] hover:bg-[#b8961f] text-white px-8 py-3 rounded-xl text-lg transition shadow-lg hover:scale-105">
              Explore Now
            </button>
          </Link>
        </motion.div>

      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-zinc-700 to-transparent" />
      {/* CATEGORIES SECTION */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-6">
        <CategoryCard
          title="Placements"
          description="Prepare for top company placements with curated resources."
        />
        <CategoryCard
          title="Internships"
          description="Find the best internships to boost your career."
        />
        <CategoryCard
          title="Campus Life"
          description="Explore events, clubs, and student experiences."
        />
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-zinc-700 to-transparent" />
      <div className="max-w-5xl mx-auto px-6 space-y-6">
        <h2 className="text-2xl font-bold">Featured Posts</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              title={post.title}
              category={post.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
}