'use client';

interface Project {
  title: string;
  description: string;
  category: "Featured" | "Article" | "Podcast" | "Video";
  date: string;
  source: string;
  link?: string;
  image?: string;       // ← NEW: optional thumbnail path
}

const projects: Project[] = [
  {
    title: "E-Commerce Dashboard Redesign",
    description: "Complete UI/UX overhaul increasing user conversion by 42% through intuitive navigation and data visualization.",
    category: "Featured",
    date: "November 2025",
    source: "Client Project",
    link: "https://example.com/project1",
    image: "/images/projects/ecommerce-dashboard.jpg", // replace with real paths
  },
  {
    title: "Designing for Accessibility",
    description: "Deep-dive article on WCAG 2.2 updates, color contrast strategies, and keyboard navigation patterns.",
    category: "Article",
    date: "October 2025",
    source: "Medium",
    link: "https://medium.com/...",
    image: "/images/projects/accessibility-article.jpg",
  },
  {
    title: "AI in UI Design — Future Talk",
    description: "Podcast episode exploring how generative AI tools are reshaping prototyping and user testing workflows.",
    category: "Podcast",
    date: "September 2025",
    source: "Design Futures Pod",
    link: "https://example.com/podcast-ep123",
    image: "/images/projects/ai-podcast.jpg",
  },
  // Add 3–9 real projects with images for best impact
];

const categoryConfig = {
  Featured: { icon: "⭐", color: "amber", bg: "from-amber-50 to-yellow-50 dark:from-amber-950/40 dark:to-yellow-950/40" },
  Article:  { icon: "📝", color: "indigo", bg: "from-indigo-50 to-blue-50 dark:from-indigo-950/40 dark:to-blue-950/40" },
  Podcast:  { icon: "🎙️", color: "purple", bg: "from-purple-50 to-pink-50 dark:from-purple-950/40 dark:to-pink-950/40" },
  Video:    { icon: "📹", color: "rose", bg: "from-rose-50 to-red-50 dark:from-rose-950/40 dark:to-red-950/40" },
};

export default function Projects() {
  return (
    <section id="projects" className="px-5 sm:px-6 py-20 md:py-28 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16 md:mb-20">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
          Featured Work
        </h2>
        <p className="mt-5 text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Selected projects showcasing UI/UX craftsmanship, front-end development, and problem-solving through design.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        {projects.map((project, idx) => {
          const cat = categoryConfig[project.category];
          const color = cat.color;

          return (
            <a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                group relative block overflow-hidden rounded-2xl 
                bg-white/70 dark:bg-gray-900/70 
                backdrop-blur-sm border border-gray-200/60 dark:border-gray-800/60 
                shadow-lg hover:shadow-2xl transition-all duration-400 
                hover:-translate-y-2 hover:scale-[1.015]
              `}
            >
              {/* Image */}
              {project.image && (
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`
                      w-full h-full object-cover transition-transform duration-700 
                      group-hover:scale-110 group-hover:brightness-110
                    `}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                </div>
              )}

              {/* Content */}
              <div className="p-6 md:p-7 flex flex-col flex-grow">
                {/* Category */}
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-4xl sm:text-5xl transition-transform group-hover:rotate-12 duration-500 text-${color}-500 dark:text-${color}-400`}>
                    {cat.icon}
                  </span>
                  <span className={`
                    px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-full 
                    bg-gradient-to-r ${cat.bg}
                    text-${color}-700 dark:text-${color}-300
                    border border-${color}-200/70 dark:border-${color}-800/50
                  `}>
                    {project.category}
                  </span>
                </div>

                {/* Title with animated underline */}
                <h3 className={`
                  text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 
                  relative inline-block pb-1
                  after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-gradient-to-r 
                  after:from-${color}-500 after:to-${color}-600 dark:after:from-${color}-400 dark:after:to-${color}-500
                  after:w-0 after:transition-all after:duration-500 group-hover:after:w-full
                `}>
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3 sm:line-clamp-4 flex-grow text-base leading-relaxed">
                  {project.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mt-auto pt-5 border-t border-gray-200/70 dark:border-gray-700/50">
                  <div className="flex items-center gap-3">
                    <time>{project.date}</time>
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500" />
                    <span className="font-medium">{project.source}</span>
                  </div>

                  <svg
                    className={`w-6 h-6 text-${color}-400 group-hover:text-${color}-500 transform group-hover:translate-x-2 transition-all duration-300`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}