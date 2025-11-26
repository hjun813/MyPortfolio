import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HERO_INFO, SKILLS, SKILLS2 } from '../constants';
import profileImg1 from '../assets/profile.jpg';
import profileImg2 from '../assets/profile2.jpg';
import profileImg3 from '../assets/profile3.png';
import profileImg4 from '../assets/profile4.jpg';
import profileImg5 from '../assets/profile5.png';

const Home: React.FC = () => {
  const profileImage = useMemo(() => {
    const images = [profileImg1, profileImg2, profileImg3, profileImg4, profileImg5];
    return images[Math.floor(Math.random() * images.length)];
  }, []);

  return (
    <div className="min-h-[calc(100vh-80px)]">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 lg:py-32 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 space-y-6 text-center lg:text-left"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium">
            안녕하세요! 만나서 반갑습니다.
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
            저는 <span className="text-primary-600 dark:text-primary-400">{HERO_INFO.name}</span>입니다. <br />
          </h1>
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-300 dark:text-slate-500 leading-tight">
            {HERO_INFO.title}
          </h1>
          <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            {HERO_INFO.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary-600 text-white font-medium rounded-lg shadow-lg shadow-primary-500/30 dark:shadow-primary-900/30 hover:bg-primary-700 transition-all hover:-translate-y-1"
            >
              View Projects <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-medium rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all hover:-translate-y-1"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 relative"
        >
          <div className="relative w-72 h-72 lg:w-96 lg:h-96 mx-auto">
            <div className="absolute inset-0 bg-primary-200 dark:bg-primary-900/50 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <img
              src={profileImage}
              alt="Profile"
              className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-slate-800 shadow-2xl"
            />
            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 dark:border-slate-700/50"
            >
              <span className="text-3xl">💻</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 left-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 dark:border-slate-700/50"
            >
              <span className="text-3xl">🚀</span>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Tech Stack Strip */}
      <section className="bg-white dark:bg-slate-900 py-20 border-y border-slate-100 dark:border-slate-800">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h3 className="text-center text-slate-400 font-semibold tracking-wider text-sm mb-10 uppercase">Languages</h3>
            <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
              {SKILLS.map((skill, idx) => (
                <div key={idx} className="group flex flex-col items-center gap-3 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-16 h-16 flex items-center justify-center bg-slate-50 dark:bg-slate-800 rounded-2xl group-hover:bg-white dark:group-hover:bg-slate-700 group-hover:shadow-xl group-hover:shadow-primary-500/10 transition-all duration-300 border border-slate-100 dark:border-slate-700 group-hover:border-primary-100 dark:group-hover:border-primary-900">
                    <div className="w-8 h-8 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 text-slate-600 dark:text-slate-400">
                      {skill.icon}
                    </div>
                  </div>
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-center text-slate-400 font-semibold tracking-wider text-sm mb-10 uppercase">Frameworks & Tools</h3>
            <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
              {SKILLS2.map((skill, idx) => (
                <div key={idx} className="group flex flex-col items-center gap-3 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-16 h-16 flex items-center justify-center bg-slate-50 dark:bg-slate-800 rounded-2xl group-hover:bg-white dark:group-hover:bg-slate-700 group-hover:shadow-xl group-hover:shadow-primary-500/10 transition-all duration-300 border border-slate-100 dark:border-slate-700 group-hover:border-primary-100 dark:group-hover:border-primary-900">
                    <div className="w-8 h-8 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 text-slate-600 dark:text-slate-400">
                      {skill.icon}
                    </div>
                  </div>
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;