import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import CurrentlyLearning from '@/components/CurrentlyLearning';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Hero />
      <Projects />
      <CurrentlyLearning />
      <Footer />
    </main>
  );
}
