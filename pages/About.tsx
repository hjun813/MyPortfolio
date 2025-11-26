import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES, SKILLS, SKILLS2, TOOLS, HERO_INFO } from '../constants';
import profileImg from '../assets/profile.jpg';

const About: React.FC = () => {
  const allSkills = [...SKILLS, ...SKILLS2, ...TOOLS];

  return (
    <div className="container mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </div>

        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Text Card */}
          <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-2xl p-8 lg:p-12 shadow-sm border border-slate-100 dark:border-slate-800 h-full">
            <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-100">Who am I?</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg mb-6">
              {HERO_INFO.description}
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
              단순한 기능 구현에 그치지 않고, '왜?' 라는 질문을 던지며 근본적인 문제를 해결하는 데 집중합니다. 중앙대학교 소프트웨어공학과를 졸업하고, 크래프톤 정글 과정을 통해 알고리즘과 운영체제(Pintos) 등 컴퓨터 공학의 깊이 있는 기초를 다졌습니다.
              운전 중 사용성을 고려한 음성 채팅 앱 'CarryON'을 개발하며 STT 응답 지연 시간을 단축시킨 경험이 있으며, 음악 협업 툴 'WaveFlow'에서는 비동기 처리로 인한 데이터 무결성 문제를 동기 처리 구조로 개선하여 해결했습니다.
              NHN Pebble 플랫폼 팀 인턴 경험을 통해 현업의 백오피스 개발 프로세스를 익혔으며, 사용자를 생각하는 풀스택 개발자로 성장하고 싶습니다.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex items-center justify-center h-full">
            <div className="relative w-full aspect-square max-w-[300px]">
              <div className="absolute inset-0 bg-primary-200 rounded-2xl rotate-6 opacity-50"></div>
              <img
                src={profileImg}
                alt="Profile"
                className="relative w-full h-full object-cover rounded-2xl shadow-xl rotate-0 transition-transform hover:-rotate-2 duration-300"
              />
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-slate-800 dark:text-slate-100">Technical Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Frontend', 'Backend', 'DevOps', 'Tools'].map((category) => (
              <div key={category} className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-lg font-bold text-primary-600 dark:text-primary-400 mb-4">{category}</h4>
                <ul className="space-y-3">
                  {allSkills.filter(s => s.category === category).map((skill, idx) => (
                    <li key={idx} className="flex items-center text-slate-600 dark:text-slate-300">
                      <div className="mr-3 text-slate-400 w-5 h-5 flex items-center justify-center">{skill.icon}</div>
                      <span className="font-medium text-sm">{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-slate-800">Experience Journey</h3>
          <div className="relative border-l-2 border-primary-100 ml-3 space-y-12 pb-4">
            {EXPERIENCES.map((exp, idx) => (
              <div key={exp.id} className="relative pl-8">
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-600 border-4 border-white shadow-sm"></div>

                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                  <h4 className="text-xl font-bold text-slate-900">{exp.role}</h4>
                  <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full mt-2 sm:mt-0 w-fit">
                    {exp.period}
                  </span>
                </div>
                <h5 className="text-lg font-medium text-slate-700 mb-3">{exp.company}</h5>
                <p className="text-slate-600 leading-relaxed bg-white p-4 rounded-lg border border-slate-100">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div >
    </div >
  );
};

export default About;