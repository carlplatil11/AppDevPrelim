interface LearningItem {
  title: string;
  description: string;
  progress: number;
  icon: string;
}

const learningItems: LearningItem[] = [
  {
    title: "Next.js 14 & Server Components",
    description: "Mastering the latest features of Next.js including server actions and streaming",
    progress: 70,
    icon: "⚡"
  },
  {
    title: "TypeScript Advanced Patterns",
    description: "Deep diving into generics, utility types, and type-safe architecture",
    progress: 60,
    icon: "📘"
  },
  {
    title: "Web Accessibility (WCAG)",
    description: "Building inclusive experiences that work for everyone",
    progress: 50,
    icon: "♿"
  },
  {
    title: "Performance Optimization",
    description: "Core Web Vitals, lazy loading, and advanced caching strategies",
    progress: 55,
    icon: "🚀"
  }
];

export default function CurrentlyLearning() {
  return (
    <section id="learning" className="px-6 py-20 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Currently Learning
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Committed to continuous growth and staying current with technology
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {learningItems.map((item, index) => (
          <div 
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-start gap-4">
              <span className="text-4xl">{item.icon}</span>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {item.description}
                </p>
                
                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                    <span>Progress</span>
                    <span>{item.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600 dark:text-gray-400 italic">
          💡 This section demonstrates a <span className="font-semibold">growth mindset</span> — 
          showing recruiters that I'm actively investing in my skills and staying ahead of industry trends.
        </p>
      </div>
    </section>
  );
}
