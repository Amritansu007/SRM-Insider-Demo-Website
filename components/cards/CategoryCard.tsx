type Props = {
  title: string;
  description: string;
};

export function CategoryCard({ title, description }: Props) {
  return (
    <div className="group p-6 rounded-2xl border bg-white dark:bg-zinc-900 dark:border-zinc-800 transition-all duration-300 hover:shadow-xl hover:border-[#C9A227]/40 hover:-translate-y-2 cursor-pointer relative overflow-hidden">
      
      {/* subtle glow */}
      <div className="absolute inset-0 bg-[#C9A227]/0 group-hover:bg-[#C9A227]/5 transition duration-300" />

      <h3 className="relative z-10 text-xl font-semibold mb-2 text-[#C9A227]">
        {title}
      </h3>

      <p className="relative z-10 text-sm text-gray-600 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
}