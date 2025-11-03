import { motion } from 'motion/react';
import { BookOpen, Users, FileText, Sparkles } from 'lucide-react';

export function MagazineSection() {
  const editors = [
    { name: 'Chief Editor', role: 'Lead & Coordination', photo: '' },
    { name: 'Creative Director', role: 'Design & Layout', photo: '' },
    { name: 'Content Manager', role: 'Articles & Stories', photo: '' },
  ];

  const content = [
    { icon: FileText, title: 'Student Articles & Essays', description: 'Thoughtful pieces written by our classmates' },
    { icon: Sparkles, title: 'Creative Writing & Poetry', description: 'Original stories and poems' },
    { icon: BookOpen, title: 'Class News & Updates', description: 'Latest happenings in Grade 9C' },
    { icon: Users, title: 'Student Spotlights', description: 'Featuring our amazing classmates' },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-['Pacifico'] text-white mb-6">
            The 9C Chronicles
          </h2>
          <p className="text-xl text-blue-100 font-['Poppins']">
            Our class magazine - stories, creativity, and news
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl mb-12 text-center"
        >
          <div className="w-48 h-64 mx-auto bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl border-2 border-white/30 flex items-center justify-center mb-6">
            <BookOpen className="w-20 h-20 text-white/50" />
          </div>
          <h3 className="text-3xl font-['Dancing_Script'] text-white mb-4">Magazine Cover</h3>
          <p className="text-blue-200">Coming in the next edition!</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {content.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20 shadow-xl"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-['Poppins'] text-white mb-2">{item.title}</h4>
                    <p className="text-blue-200">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div>
          <h3 className="text-3xl font-['Pacifico'] text-white text-center mb-8">Our Editorial Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {editors.map((editor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20 shadow-xl text-center"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
              >
                <div className="aspect-square rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-2 border-white/30 mb-4 flex items-center justify-center overflow-hidden">
                  {editor.photo ? (
                    <img src={editor.photo} alt={editor.name} className="w-full h-full object-cover" />
                  ) : (
                    <Users className="w-16 h-16 text-white/50" />
                  )}
                </div>
                
                <h3 className="text-xl font-['Poppins'] text-white mb-2">{editor.name}</h3>
                <p className="text-blue-200">{editor.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
