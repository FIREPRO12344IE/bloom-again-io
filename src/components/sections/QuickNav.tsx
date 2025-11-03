import { motion } from 'motion/react';
import { BookOpen, Camera, Trophy, MessageSquare, Mail, Users } from 'lucide-react';

interface QuickNavProps {
  setActiveSection: (section: string) => void;
}

export function QuickNav({ setActiveSection }: QuickNavProps) {
  const navCards = [
    { id: 'about', icon: Users, title: 'About Us', description: 'Our class story' },
    { id: 'gallery', icon: Camera, title: 'Gallery', description: 'Class memories' },
    { id: 'magazine', icon: BookOpen, title: 'Magazine', description: 'The 9C Chronicles' },
    { id: 'achievements', icon: Trophy, title: 'Achievements', description: 'Our success' },
    { id: 'quotes', icon: MessageSquare, title: 'Quotes', description: 'Inspiration' },
    { id: 'contact', icon: Mail, title: 'Contact', description: 'Get in touch' },
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-['Poppins'] text-white text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Explore Our Class
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {navCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.button
                key={card.id}
                onClick={() => setActiveSection(card.id)}
                className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20 shadow-xl hover:bg-white/15 transition-all text-left group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="mb-4 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-['Poppins'] text-white mb-2">{card.title}</h3>
                <p className="text-blue-200 text-sm">{card.description}</p>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
