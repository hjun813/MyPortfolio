import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Layers, CheckCircle, AlertCircle, X } from 'lucide-react';
import { PROJECTS } from '../constants';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const project = PROJECTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Project not found</h2>
        <button onClick={() => navigate('/projects')} className="text-primary-600 dark:text-primary-400 hover:underline">
          Back to Projects
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <Link to="/projects" className="inline-flex items-center text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 mb-8 transition-colors">
        <ArrowLeft size={16} className="mr-2" /> Back to Projects
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-800">
            <img src={project.thumbnail} alt={project.title} className="w-full h-auto object-cover" />
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex items-center space-x-3 mb-4">
              <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-semibold rounded-full">
                {project.category}
              </span>
              <span className="text-slate-400 text-sm">Role: {project.role}</span>
            </div>

            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">{project.title}</h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              {project.fullDescription}
            </p>

            <div className="flex flex-wrap gap-4">
              {project.isDemoExpired ? (
                <span className="inline-flex items-center px-6 py-3 bg-slate-300 dark:bg-slate-700 text-slate-500 dark:text-slate-400 rounded-lg font-medium cursor-not-allowed">
                  <AlertCircle size={18} className="mr-2" /> Server Expired
                </span>
              ) : (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg shadow-md hover:bg-primary-700 transition-all hover:-translate-y-1 font-medium shadow-primary-500/30 dark:shadow-primary-900/30"
                >
                  <ExternalLink size={18} className="mr-2" /> Live Demo
                </a>
              )}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all hover:-translate-y-1 font-medium"
              >
                <Github size={18} className="mr-2" /> View Code
              </a>
            </div>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="col-span-2 space-y-8">
            <section className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                <AlertCircle size={24} className="text-primary-500 mr-2" /> The Problem
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{project.problem}</p>
            </section>

            <section className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                <CheckCircle size={24} className="text-green-500 mr-2" /> The Solution
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{project.solution}</p>
            </section>
          </div>

          <div className="space-y-8">
            <section className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                <Layers size={20} className="mr-2" /> Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded text-sm text-slate-600 dark:text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            <section className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Key Features</h3>
              <ul className="space-y-2">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-slate-600 dark:text-slate-300">
                    <span className="mr-2 mt-1 w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        {/* Project Gallery */}
        {project.images && project.images.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Project Gallery</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.images.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`rounded-xl overflow-hidden shadow-md border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-shadow duration-300 cursor-pointer ${
                    // Make the first image span 2 columns on tablet/desktop if we have an odd number of images (e.g. 5) to create a nice layout
                    (project.images!.length % 3 !== 0 && idx === 0) ? 'md:col-span-2 lg:col-span-2' : ''
                    }`}
                >
                  <img src={img} alt={`${project.title} screenshot ${idx + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Full size preview"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectDetail;