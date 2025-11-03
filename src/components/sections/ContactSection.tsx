import { motion } from 'motion/react';
import { Mail, MapPin, Phone } from 'lucide-react';

export function ContactSection() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-['Pacifico'] text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-blue-100 font-['Poppins']">
            We'd love to hear from you!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl"
        >
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-['Poppins'] text-white mb-2">Location</h3>
                <p className="text-blue-200">Emirates National School<br />Grade 9C Classroom</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-['Poppins'] text-white mb-2">Email</h3>
                <p className="text-blue-200">grade9c@emiratesnationalschool.ae</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500 to-red-600 flex items-center justify-center flex-shrink-0">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-['Poppins'] text-white mb-2">Class Representative</h3>
                <p className="text-blue-200">Available through school administration</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-blue-100 font-['Poppins'] mb-6">
              Want to collaborate or share ideas with Grade 9C?
            </p>
            <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-['Poppins'] shadow-xl hover:shadow-2xl transition-all hover:scale-105">
              Send Us a Message
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
