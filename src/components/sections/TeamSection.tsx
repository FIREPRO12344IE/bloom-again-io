import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Users, X, Heart, Sparkles, Trophy } from 'lucide-react';

interface Student {
  id: number;
  name: string;
  photo: string;
  bio: string;
  interests: string[];
  achievements: string[];
}

export function TeamSection() {
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  const students: Student[] = Array.from({ length: 27 }, (_, i) => ({
    id: i + 1,
    name: `Student ${i + 1}`,
    photo: '',
    bio: `A dedicated and enthusiastic member of Grade 9C, always bringing positive energy to the class.`,
    interests: ['Sports', 'Technology', 'Arts', 'Science'],
    achievements: ['Academic Excellence', 'Team Player', 'Creative Thinker']
  }));

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
            Meet Our Team
          </h2>
          <p className="text-xl text-blue-100 font-['Poppins']">
            27 amazing students, one incredible class
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {students.map((student, index) => (
            <motion.div
              key={student.id}
              className="backdrop-blur-xl bg-white/10 rounded-2xl p-4 border border-white/20 shadow-xl cursor-pointer hover:bg-white/15 transition-all"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.03 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedStudent(student)}
            >
              <div className="aspect-square rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-2 border-white/30 mb-3 overflow-hidden">
                {student.photo ? (
                  <img src={student.photo} alt={student.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Users className="w-12 h-12 text-white/50" />
                  </div>
                )}
              </div>
              <h3 className="text-sm font-['Poppins'] text-white text-center">{student.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedStudent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedStudent(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 20 }}
              className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedStudent(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start mb-6">
                <div className="relative w-32 h-32 mx-auto sm:mx-0 flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl blur-xl opacity-50" />
                  <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-white/30">
                    {selectedStudent.photo ? (
                      <img 
                        src={selectedStudent.photo} 
                        alt={selectedStudent.name} 
                        className="w-full h-full object-cover" 
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                        <Users className="w-16 h-16 text-white/50" />
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex-1 text-center sm:text-left">
                  <h2 className="text-3xl font-['Dancing_Script'] text-white mb-2">{selectedStudent.name}</h2>
                  <p className="text-blue-200 font-['Poppins']">Grade 9C Student</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Heart className="w-5 h-5 text-pink-400" />
                    <h3 className="text-xl font-['Poppins'] text-white">Bio</h3>
                  </div>
                  <p className="text-blue-100">{selectedStudent.bio}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-5 h-5 text-purple-400" />
                    <h3 className="text-xl font-['Poppins'] text-white">Interests</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedStudent.interests.map((interest, i) => (
                      <span 
                        key={i}
                        className="px-4 py-2 rounded-full bg-purple-500/20 text-purple-200 border border-purple-400/30 font-['Poppins'] text-sm"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Trophy className="w-5 h-5 text-yellow-400" />
                    <h3 className="text-xl font-['Poppins'] text-white">Achievements</h3>
                  </div>
                  <ul className="space-y-2">
                    {selectedStudent.achievements.map((achievement, i) => (
                      <li key={i} className="text-blue-100 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
