import { motion } from 'motion/react';
import { Camera, BookOpen, Award, Star, Trophy } from 'lucide-react';
import { TeacherSection } from './sections/TeacherSection';
import { QuickNav } from './sections/QuickNav';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

export function Hero({ setActiveSection }: HeroProps) {
  return (
    <div className="min-h-screen">
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-10 w-20 h-20"
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Star className="w-full h-full text-yellow-400/30" />
          </motion.div>
          <motion.div
            className="absolute bottom-1/4 right-20 w-16 h-16"
            animate={{
              rotate: -360,
              y: [0, -20, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
          >
            <Trophy className="w-full h-full text-blue-400/30" />
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <motion.div
              className="relative inline-block mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-['Dancing_Script'] text-white text-[clamp(3.5rem,12vw,9rem)] leading-none relative" style={{ fontWeight: 700 }}>
                <span className="inline-block">Grade 9C Boys</span>
                
                <svg 
                  className="absolute -bottom-3 left-0 w-full h-8 overflow-visible"
                  viewBox="0 0 600 30"
                  preserveAspectRatio="none"
                  style={{ filter: 'drop-shadow(0 0 12px rgba(147, 197, 253, 0.7))' }}
                >
                  <motion.path
                    d="M 5 20 Q 80 12, 150 18 T 300 16 T 450 20 T 595 18"
                    stroke="url(#gradient-title)"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ 
                      pathLength: { duration: 2, ease: "easeInOut", delay: 0.4 },
                      opacity: { duration: 0.2, delay: 0.4 }
                    }}
                  />
                  <defs>
                    <linearGradient id="gradient-title" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#60A5FA" />
                      <stop offset="50%" stopColor="#A78BFA" />
                      <stop offset="100%" stopColor="#F472B6" />
                    </linearGradient>
                  </defs>
                </svg>
              </h1>
            </motion.div>

            <motion.p
              className="font-['Poppins'] text-blue-200/90 text-[clamp(1.25rem,3vw,2rem)] tracking-[0.2em]"
              style={{ fontWeight: 300 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              2025–2026
            </motion.p>
          </div>

          <motion.p
            className="text-xl sm:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto font-['Poppins']"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            Where Brotherhood Meets Excellence
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-['Poppins'] shadow-xl hover:shadow-2xl transition-all hover:scale-105 flex items-center gap-2">
              <Camera className="w-5 h-5" />
              View Gallery
            </button>
            <button className="px-8 py-4 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 text-white font-['Poppins'] hover:bg-white/20 transition-all hover:scale-105 flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Our Magazine
            </button>
            <button className="px-8 py-4 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 text-white font-['Poppins'] hover:bg-white/20 transition-all hover:scale-105 flex items-center gap-2">
              <Award className="w-5 h-5" />
              Achievements
            </button>
          </motion.div>

          <motion.div
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}
          >
            {[
              { number: '27', label: 'Students' },
              { number: '50+', label: 'Achievements' },
              { number: '1', label: 'Amazing Class' },
              { number: '100%', label: 'Brotherhood' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20 shadow-2xl"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-3xl sm:text-4xl font-['Poppins'] text-white mb-2">{stat.number}</div>
                <div className="text-sm text-blue-200">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <TeacherSection />
      <QuickNav setActiveSection={setActiveSection} />
    </div>
  );
}
