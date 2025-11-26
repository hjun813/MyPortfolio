import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, ExternalLink, Filter } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', 'Web', 'App', 'Backend', 'Side Project'];

  const filteredProjects = filter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">My Projects</h2>
        <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          프로젝트를 통해 다양한 기술 스택을 경험하고, 개발자로서 성장을 추구합니다.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${filter === cat
              ? 'bg-primary-600 text-white shadow-md'
              : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700'
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={project.id}
              className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:border-primary-100 transition-all duration-300 group flex flex-col h-full"
            >
              <div className="relative overflow-hidden h-48 bg-slate-200">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-sm">
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="p-3 bg-white rounded-full hover:scale-110 transition-transform text-slate-900" title="View Code">
                    <Github size={20} />
                  </a>
                  {project.isDemoExpired ? (
                    <span className="p-3 bg-slate-200 cursor-not-allowed rounded-full text-slate-400" title="Server Expired">
                      <ExternalLink size={20} />
                    </span>
                  ) : (
                    <a href={project.demoUrl} target="_blank" rel="noreferrer" className="p-3 bg-white rounded-full hover:scale-110 transition-transform text-primary-600" title="Live Demo">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary-700 shadow-sm">
                  {project.category}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>

                <Link
                  to={`/projects/${project.id}`}
                  className="w-full text-center py-2 border border-primary-200 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors font-medium text-sm"
                >
                  자세히 보기
                </Link>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Projects;