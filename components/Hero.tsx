'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const mailtoLink = `mailto:carl.platil@urios.edu.ph?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      window.location.href = mailtoLink;
      
      setSubmitStatus('success');
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setIsFormOpen(false);
        setSubmitStatus('idle');
      }, 1500);
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error:', error);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Decorative Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200">
        {/* Geometric Shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-400 rounded-full opacity-60 blur-3xl" style={{ transform: 'translate(30%, -30%)' }}></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-300 opacity-40" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-blue-300 opacity-30" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
        <div className="absolute top-20 left-10 w-1 h-40 bg-white opacity-40 rotate-45"></div>
        <div className="absolute top-32 left-24 w-1 h-32 bg-white opacity-40 rotate-45"></div>
        <div className="absolute top-44 left-40 w-1 h-36 bg-white opacity-40 rotate-45"></div>
        <div className="absolute top-56 left-56 w-1 h-28 bg-white opacity-40 rotate-45"></div>
        <div className="absolute bottom-40 right-32 w-20 h-20 border-4 border-white opacity-30 rotate-12"></div>
      </div>

      {/* Main Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="bg-gray-50 rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            
            {/* Header Navigation */}
            <div className="flex justify-between items-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Carl Vincent G. Platil</h2>
              <button
                onClick={() => setIsFormOpen(true)}
                className="bg-gray-900 text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800 transition"
              >
                carl.platil@urios.edu.ph
              </button>
            </div>

            {/* Main Content Grid */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              
              {/* Left Content */}
              <div className="space-y-6 relative z-10">
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  UI/UX Designer
                  <br />
                  <span className="text-outline">& Front-End Developer</span>
                </h1>

                <p className="text-gray-600 text-lg">I’m a passionate UI/UX designer with a deep focus on creating intuitive, user-centered digital experiences. From wireframing and prototyping to high-fidelity UI design, I aim to blend form and function to deliver visually stunning, easy-to-use interfaces.</p>


                {/* Decorative stars */}
                <div className="absolute -left-4 top-1/2 text-orange-300 text-4xl opacity-60">★</div>
                <div className="absolute left-20 bottom-10 text-orange-300 text-3xl opacity-60">★</div>
              </div>

              {/* Right Content - Profile Image */}
              <div className="relative flex justify-center items-center h-96">
                {/* Decorative background rectangles */}
                <div className="absolute w-80 h-96 bg-gradient-to-br from-orange-400 to-orange-500 rounded-3xl transform -rotate-3"></div>
                <div className="absolute w-80 h-96 bg-gradient-to-tl from-pink-400 to-orange-300 rounded-3xl transform rotate-3 opacity-50"></div>
                
                {/* Corner accent decorations */}
                <div className="absolute top-0 left-0 w-12 h-12 border-4 border-orange-500 rounded-br-2xl"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 border-4 border-orange-500 rounded-tl-2xl"></div>

                {/* Profile Rectangle */}
                <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden border-8 border-white shadow-2xl z-10 transform hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/profile.jpg"
                    alt="Carl Vincent G. Platil"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Floating accent elements */}
                <div className="absolute top-5 right-5 w-8 h-8 border-2 border-orange-500 rounded-full z-20"></div>
                <div className="absolute bottom-10 left-8 w-6 h-6 bg-orange-500 rounded-full z-20"></div>
                <div className="absolute top-1/2 -right-8 w-4 h-12 bg-gradient-to-r from-orange-400 to-transparent rounded-full z-0"></div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Email Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-6 md:p-8 max-w-md w-full my-8 relative overflow-hidden animate-in fade-in zoom-in duration-300 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsFormOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Send Message
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Fill out the form below and I'll get back to you soon!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Project Inquiry"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project..."
                  required
                  rows={3}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition resize-none"
                />
              </div>

              {submitStatus === 'success' && (
                <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg p-3 text-green-700 dark:text-green-400 text-sm font-medium">
                  ✓ Opening your email client...
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg p-3 text-red-700 dark:text-red-400 text-sm font-medium">
                  ✗ There was an error. Please try again.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 dark:hover:from-blue-600 dark:hover:to-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 text-center">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Emails sent to: <span className="font-semibold text-gray-700 dark:text-gray-300">carl.platil@urios.edu.ph</span>
              </p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes zoomIn {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-in {
          animation: fadeIn 0.3s ease-out, zoomIn 0.3s ease-out;
        }

        .text-outline {
          color: transparent;
          -webkit-text-stroke: 2px #111827;
          text-stroke: 2px #111827;
        }
      `}</style>
    </>
  );
}