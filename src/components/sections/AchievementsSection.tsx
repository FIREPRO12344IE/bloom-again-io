import { motion } from 'motion/react';
import { Trophy, Award, Star, Users, Heart, Lightbulb } from 'lucide-react';

export function AchievementsSection() {
  const achievements = [
    { icon: Trophy, title: 'Academic Excellence Award', description: 'Outstanding performance in all subjects', color: 'from-yellow-400 to-orange-500' },
    { icon: Users, title: 'Best Class Spirit', description: 'Exemplary teamwork and unity', color: 'from-blue-400 to-purple-500' },
    { icon: Star, title: 'Science Fair Winners', description: 'First place in school science competition', color: 'from-green-400 to-cyan-500' },
    { icon: Award, title: 'Sports Championship', description: 'Inter-class sports tournament champions', color: 'from-red-400 to-pink-500' },
    { icon: Heart, title: 'Community Service Award', description: 'Outstanding contribution to school community', color: 'from-pink-400 to-rose-500' },
    { icon: Lightbulb, title: 'Innovation Challenge', description: 'Creative problem-solving competition winners', color: 'from-purple-400 to-indigo-500' },
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
            Our Achievements
          </h2>
          <p className="text-xl text-blue-100 font-['Poppins']">
            Celebrating our success and milestones
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20 shadow-xl hover:bg-white/15 transition-all"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${achievement.color} flex items-center justify-center mb-4 mx-auto`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-['Poppins'] text-white mb-3 text-center">{achievement.title}</h3>
                <p className="text-blue-200 text-center">{achievement.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
