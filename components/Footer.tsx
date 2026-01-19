export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="px-6 py-12 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Let's Connect
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Open to opportunities and collaborations
            </p>
          </div>
          
          <div className="flex gap-6">
            <a 
              href="mailto:contact@jamrii.com" 
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Email
            </a>
            <a 
              href="https://github.com/jamrii" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              RTR Rap Battle League
            </a>
            <a 
              href="https://linkedin.com/in/jamrii" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Videokeman
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
