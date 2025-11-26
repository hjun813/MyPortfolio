import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! This is a demo form.');
  };

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Get In Touch</h2>
        <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          궁금한 점이나 제안이 있으시다면 아래의 폼을 통해 연락주세요.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:w-1/3 space-y-8"
        >
          <div className="bg-primary-600 dark:bg-primary-700 text-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Contact</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="mt-1 mr-4 opacity-80" size={20} />
                <div>
                  <p className="text-primary-100 text-sm uppercase font-semibold tracking-wider mb-1">Email</p>
                  <a href="mailto:alex.dev@example.com" className="text-lg font-medium hover:text-white transition-colors">hyeonjun0899@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="mt-1 mr-4 opacity-80" size={20} />
                <div>
                  <p className="text-primary-100 text-sm uppercase font-semibold tracking-wider mb-1">Location</p>
                  <p className="text-lg font-medium">Seoul, South Korea</p>
                </div>
              </div>
            </div>


          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:w-2/3"
        >
          <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-900 p-8 lg:p-10 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all bg-slate-50 dark:bg-slate-800 focus:bg-white dark:focus:bg-slate-900 text-slate-900 dark:text-white"
                  placeholder="김현준"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all bg-slate-50 dark:bg-slate-800 focus:bg-white dark:focus:bg-slate-900 text-slate-900 dark:text-white"
                  placeholder="example@example.com"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all bg-slate-50 dark:bg-slate-800 focus:bg-white dark:focus:bg-slate-900 text-slate-900 dark:text-white"
                placeholder="제목을 입력해주세요"
                required
              />
            </div>
            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all bg-slate-50 dark:bg-slate-800 focus:bg-white dark:focus:bg-slate-900 text-slate-900 dark:text-white resize-none"
                placeholder="내용을 입력해주세요"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary-600 text-white font-bold py-4 rounded-lg hover:bg-primary-700 transition-colors shadow-lg shadow-primary-500/30 dark:shadow-primary-900/30"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;