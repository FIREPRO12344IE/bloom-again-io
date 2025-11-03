import { motion } from 'motion/react';
import { MessageSquare } from 'lucide-react';

export function QuotesSection() {
  const quotes = [
    { text: 'Together we achieve more than we ever could alone', author: 'Grade 9C Motto' },
    { text: 'Excellence is not a destination, it is a continuous journey', author: 'Class Philosophy' },
    { text: 'Brotherhood means standing together through every challenge', author: 'Our Promise' },
    { text: 'Innovation starts with believing in our collective potential', author: 'Class Vision' },
    { text: 'Success is sweetest when shared with your brothers', author: 'Our Belief' },
    { text: 'In Grade 9C, every voice matters and every dream is supported', author: 'Class Spirit' },
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
            Inspiring Quotes
          </h2>
          <p className="text-xl text-blue-100 font-['Poppins']">
            Words that inspire and unite us
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="backdrop-blur-xl bg-white/10 rounded-2xl p-8 border border-white/20 shadow-xl hover:bg-white/15 transition-all"
              whileHover={{ scale: 1.03 }}
            >
              <MessageSquare className="w-10 h-10 text-blue-400 mb-4" />
              <p className="text-xl text-white italic font-['Inter'] mb-4 leading-relaxed">
                "{quote.text}"
              </p>
              <p className="text-blue-300 font-['Poppins'] text-sm">— {quote.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
