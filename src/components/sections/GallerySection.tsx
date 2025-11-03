import { motion } from 'motion/react';
import { Camera } from 'lucide-react';

export function GallerySection() {
  const photos = [
    { id: 1, title: 'Class Activities', url: '' },
    { id: 2, title: 'Sports Day', url: '' },
    { id: 3, title: 'Project Presentation', url: '' },
    { id: 4, title: 'Cultural Day', url: '' },
    { id: 5, title: 'Science Fair', url: '' },
    { id: 6, title: 'Class Trip', url: '' },
    { id: 7, title: 'Awards Ceremony', url: '' },
    { id: 8, title: 'Special Events', url: '' },
    { id: 9, title: 'Candid Moments', url: '' },
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
            Our Gallery
          </h2>
          <p className="text-xl text-blue-100 font-['Poppins']">
            Capturing our favorite moments together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((image, index) => (
            <motion.div
              key={image.id}
              className="relative aspect-square rounded-2xl overflow-hidden border-2 border-white/20 shadow-xl cursor-pointer group"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {image.url ? (
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                  <Camera className="w-16 h-16 text-white/50" />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <h3 className="text-xl font-['Poppins'] text-white">{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
