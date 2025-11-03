import { motion } from 'motion/react';
import { Users, Heart } from 'lucide-react';

export function TeacherSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <div className="mb-12 text-center">
              <h2 className="text-4xl sm:text-5xl font-['Pacifico'] inline-block relative">
                <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Our Class Teacher
                </span>
                <motion.div
                  className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 rounded-full mx-auto"
                  initial={{ width: '0%' }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                  style={{
                    boxShadow: '0 0 15px rgba(236, 72, 153, 0.6)',
                  }}
                />
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl blur-xl opacity-50" />
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border-4 border-white/30 shadow-2xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                  <Users className="w-32 h-32 text-white/30" />
                </div>
              </motion.div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-4xl font-['Dancing_Script'] text-white mb-2">Preeta Maam</h3>
                  <p className="text-blue-200 font-['Inter']">Class Teacher | Grade 9C</p>
                </div>

                <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-6 border border-white/10">
                  <div className="flex gap-3 mb-4">
                    <Heart className="w-6 h-6 text-pink-400 flex-shrink-0" />
                    <p className="text-lg text-white/90 italic font-['Inter']">
                      "Education is not the filling of a pail, but the lighting of a fire. Every student has the potential to shine brilliantly."
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-200 border border-blue-400/30 font-['Poppins']">
                    Inspiring Leader
                  </span>
                  <span className="px-4 py-2 rounded-full bg-purple-500/20 text-purple-200 border border-purple-400/30 font-['Poppins']">
                    Dedicated Mentor
                  </span>
                  <span className="px-4 py-2 rounded-full bg-pink-500/20 text-pink-200 border border-pink-400/30 font-['Poppins']">
                    Amazing Guide
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
