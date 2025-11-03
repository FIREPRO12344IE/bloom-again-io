import { motion } from 'motion/react';
import { Heart, Lightbulb, Award, Users } from 'lucide-react';

export function AboutSection() {
  const values = [
    {
      icon: Award,
      title: 'Academic Excellence',
      description: 'Striving for the highest standards in all our studies'
    },
    {
      icon: Heart,
      title: 'Strong Class Bonds',
      description: 'Building lasting friendships and supporting each other'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Thinking creatively and solving problems together'
    },
    {
      icon: Users,
      title: 'School Pride',
      description: 'Representing Emirates National School with honor'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-['Pacifico'] text-white mb-6">
            About Grade 9C
          </h2>
          <p className="text-xl text-blue-100 font-['Poppins'] max-w-3xl mx-auto leading-relaxed">
            We are Grade 9C, a dynamic class of 27 amazing students at Emirates National School. 
            Together, we embody brotherhood, innovation, and excellence. Our journey is filled with 
            learning, laughter, and lasting memories as we support each other in achieving our dreams.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl mb-12"
        >
          <h3 className="text-3xl font-['Pacifico'] text-white text-center mb-8">Our Class Spirit</h3>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border border-blue-400/30 font-['Poppins'] text-lg">
              Brotherhood
            </span>
            <span className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white border border-purple-400/30 font-['Poppins'] text-lg">
              Innovation
            </span>
            <span className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500/20 to-blue-500/20 text-white border border-pink-400/30 font-['Poppins'] text-lg">
              Excellence
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20 shadow-xl hover:bg-white/15 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-['Poppins'] text-white mb-2">{value.title}</h4>
                    <p className="text-blue-200">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
