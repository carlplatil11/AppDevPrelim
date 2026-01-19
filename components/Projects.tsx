interface Project {
  title: string;
  description: string;
  category: "Featured" | "Article" | "Podcast" | "Video";
  date: string;
  source: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: "Project Name 1 - Key Achievement",
    description: "This project demonstrates my core skills and technical foundation. Replace with your actual project description and highlight impact.",
    category: "Featured",
    date: "February 16, 2024",
    source: "Featured Work",
    link: "https://your-project-link.com"
  },
  {
    title: "Project Name 2 - Growth & Learning",
    description: "Through this project, I learned new concepts and overcame challenges. Share what you learned and how you grew from this experience.",
    category: "Article",
    date: "January 20, 2024",
    source: "Medium",
    link: "https://your-project-link.com"
  },
  {
    title: "Project Name 3 - Future Aspirations",
    description: "This project represents where I'm heading next—pushing boundaries and exploring new technologies in my field.",
    category: "Podcast",
    date: "January 15, 2024",
    source: "My Podcast",
    link: "https://your-project-link.com"
  }
];

const categoryIcons = {
  "Featured": "⭐",
  "Article": "📝",
  "Podcast": "🎙️",
  "Video": "📹"
};

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-20 max-w-6xl mx-auto">
      <div className="space-y-6">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500"
          >
            <div className="flex gap-4 items-start">
              {/* Icon */}
              <div className="text-3xl flex-shrink-0 pt-1">
                {categoryIcons[project.category as keyof typeof categoryIcons]}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-500">
                  <span className="inline-block px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded">
                    {project.category}
                  </span>
                  <span>•</span>
                  <span>{project.date}</span>
                  <span>•</span>
                  <span>{project.source}</span>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex-shrink-0 text-gray-400 dark:text-gray-600 group-hover:text-blue-600 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
