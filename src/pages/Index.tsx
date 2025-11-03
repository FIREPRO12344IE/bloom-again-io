import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Award, Users, BookOpen, MessageSquare, Mail, Camera, ChevronRight, Sparkles, Heart, Trophy, Star } from 'lucide-react';

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'magazine', label: 'Magazine' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'team', label: 'Team' },
    { id: 'quotes', label: 'Quotes' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 60, 0],
            y: [0, -70, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Glassmorphism Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/10 border-b border-white/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div 
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-lg opacity-60" />
                <div className="relative w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-xl">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-white font-['Poppins'] tracking-wide">Grade 9C</h1>
                <p className="text-xs text-blue-200">Emirates National School</p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-white/20 text-white shadow-lg'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-all backdrop-blur-sm"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden backdrop-blur-xl bg-white/10 border-t border-white/20"
            >
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveSection(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                      activeSection === item.id
                        ? 'bg-white/20 text-white'
                        : 'text-white/70 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 pt-20">
        {activeSection === 'home' && <HomePage />}
        {activeSection === 'about' && <AboutPage />}
        {activeSection === 'gallery' && <GalleryPage />}
        {activeSection === 'magazine' && <MagazinePage />}
        {activeSection === 'achievements' && <AchievementsPage />}
        {activeSection === 'team' && <TeamPage />}
        {activeSection === 'quotes' && <QuotesPage />}
        {activeSection === 'contact' && <ContactPage />}
      </main>
    </div>
  );
}

// HomePage Component
function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Decorative Elements */}
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
          {/* Cursive Writing Animation Title */}
          <div className="mb-8">
            {/* Grade 9C Boys in Beautiful Cursive */}
            <motion.div
              className="relative inline-block mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-['Dancing_Script'] text-white text-[clamp(3.5rem,12vw,9rem)] leading-none relative" style={{ fontWeight: 700 }}>
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.01 }}
                >
                  Grade 9C Boys
                </motion.span>
                
                {/* Animated Handwriting Underline for "Grade 9C Boys" */}
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

            {/* Year in Clean Typography */}
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

          {/* Glassmorphism CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <RaindropButton icon={<Camera />} primary>
              View Gallery
            </RaindropButton>
            <RaindropButton icon={<BookOpen />}>
              Our Magazine
            </RaindropButton>
            <RaindropButton icon={<Award />}>
              Achievements
            </RaindropButton>
          </motion.div>

          {/* Floating Stats */}
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

      {/* Class Teacher Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl relative overflow-hidden"
          >
            {/* Decorative Gradient */}
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
                {/* Teacher Photo */}
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

                {/* Teacher Info */}
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

      {/* Quick Navigation Cards */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl sm:text-4xl font-['Poppins'] text-white text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Explore Our Journey
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Users />, title: 'About Us', description: 'Our story, values & spirit', color: 'from-blue-500 to-cyan-500' },
              { icon: <Camera />, title: 'Gallery', description: 'Memories & moments captured', color: 'from-purple-500 to-pink-500' },
              { icon: <BookOpen />, title: 'Class Magazine', description: 'The 9C Chronicles & editors', color: 'from-orange-500 to-red-500' },
              { icon: <Award />, title: 'Achievements', description: 'Our wins & accomplishments', color: 'from-green-500 to-emerald-500' },
              { icon: <MessageSquare />, title: 'Quotes Wall', description: 'Inspiring words & wisdom', color: 'from-indigo-500 to-purple-500' },
              { icon: <Mail />, title: 'Contact Us', description: 'Get in touch with 9C', color: 'from-pink-500 to-rose-500' },
            ].map((card, index) => (
              <motion.div
                key={index}
                className="group relative backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20 cursor-pointer overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
              >
                {/* Hover Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-4 shadow-lg`}>
                    <div className="text-white w-7 h-7">
                      {card.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-['Poppins'] text-white mb-2">{card.title}</h3>
                  <p className="text-blue-200 mb-4">{card.description}</p>
                  
                  <div className="flex items-center text-white group-hover:translate-x-2 transition-transform">
                    <span className="text-sm">Explore</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Raindrop Button Component
function RaindropButton({ 
  children, 
  icon, 
  primary = false 
}: { 
  children: React.ReactNode;
  icon?: React.ReactNode;
  primary?: boolean;
}) {
  return (
    <motion.button
      className={`group relative px-8 py-4 rounded-2xl overflow-hidden ${
        primary ? 'bg-gradient-to-r from-blue-500 to-purple-600' : 'backdrop-blur-xl bg-white/10 border-2 border-white/30'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Glass shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      
      {/* Raindrop effect on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/60 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: '10%',
            }}
            animate={{
              y: [0, 100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>
      
      <div className="relative flex items-center gap-2 text-white font-['Poppins']">
        {icon && <span className="w-5 h-5">{icon}</span>}
        {children}
      </div>
    </motion.button>
  );
}

// About Page
function AboutPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl sm:text-5xl font-['Poppins'] text-white text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          About Grade 9C Boys
        </motion.h1>

        <div className="space-y-8">
          {/* Class Spirit */}
          <motion.div
            className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-['Poppins'] text-white mb-6">Our Class Spirit</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Brotherhood', description: 'United as one, supporting each other through every challenge' },
                { title: 'Innovation', description: 'Constantly pushing boundaries and thinking creatively' },
                { title: 'Excellence', description: 'Striving for the best in academics and beyond' },
              ].map((value, index) => (
                <div key={index} className="backdrop-blur-lg bg-white/5 rounded-2xl p-6 border border-white/10">
                  <h3 className="text-xl text-white mb-3">{value.title}</h3>
                  <p className="text-blue-200">{value.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-['Poppins'] text-white mb-6">Our Values</h2>
            <ul className="space-y-4 text-blue-100">
              <li className="flex items-start gap-3">
                <Star className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                <span>Academic Excellence: We push ourselves to achieve the highest standards</span>
              </li>
              <li className="flex items-start gap-3">
                <Heart className="w-6 h-6 text-pink-400 flex-shrink-0 mt-1" />
                <span>Strong Class Bonds: Our friendship and support for each other is unbreakable</span>
              </li>
              <li className="flex items-start gap-3">
                <Sparkles className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <span>Innovation: We embrace creativity and new ideas</span>
              </li>
              <li className="flex items-start gap-3">
                <Trophy className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
                <span>School Pride: Representing Emirates National School with honor</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// Gallery Page
function GalleryPage() {
  const galleryImages = [
    { url: 'https://images.unsplash.com/photo-1649386525679-214da4fa6676?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc2MTg5MTIxOHww&ixlib=rb-4.1.0&q=80&w=1080', title: 'Class Activities' },
    { url: 'https://images.unsplash.com/photo-1548077880-656c402b344e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBzcG9ydHMlMjB0ZWFtfGVufDF8fHx8MTc2MTk5NTI1OXww&ixlib=rb-4.1.0&q=80&w=1080', title: 'Sports Day' },
    { url: '', title: 'Project Presentation' },
    { url: '', title: 'Cultural Day' },
    { url: '', title: 'Science Fair' },
    { url: '', title: 'Class Trip' },
    { url: '', title: 'Awards Ceremony' },
    { url: '', title: 'Special Events' },
    { url: '', title: 'Candid Moments' },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-4xl sm:text-5xl font-['Poppins'] text-white text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Our Gallery
        </motion.h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden backdrop-blur-xl bg-white/10 border border-white/20"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
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
                  <div className="text-center">
                    <Camera className="w-12 h-12 text-white/50 mx-auto mb-2" />
                    <p className="text-white/70 text-sm">Photo Placeholder</p>
                  </div>
                </div>
              )}
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-['Poppins']">{image.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Magazine Page
function MagazinePage() {
  const editors = [
    { name: 'Editor Name 1', role: 'Chief Editor', photo: '' },
    { name: 'Editor Name 2', role: 'Creative Director', photo: '' },
    { name: 'Editor Name 3', role: 'Content Manager', photo: '' },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl sm:text-5xl font-['Poppins'] text-white text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          The 9C Chronicles
        </motion.h1>

        {/* Magazine Showcase */}
        <motion.div
          className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 md:p-12 border border-white/20 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/20 border-2 border-white/30 flex items-center justify-center">
              <div className="text-center">
                <BookOpen className="w-24 h-24 text-white/50 mx-auto mb-4" />
                <p className="text-white/70">Magazine Cover</p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-['Pacifico'] text-white">The 9C Chronicles</h2>
              <p className="text-blue-100">
                Our class magazine celebrates creativity, achievements, and the incredible talent of Grade 9C Boys. 
                From insightful articles to inspiring poetry, this is where our voices come alive.
              </p>
              
              <div className="space-y-3">
                <h3 className="text-xl text-white">Featured Content:</h3>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full" />
                    Student Articles & Essays
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full" />
                    Creative Writing & Poetry
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pink-400 rounded-full" />
                    Class News & Updates
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-400 rounded-full" />
                    Student Spotlights
                  </li>
                </ul>
              </div>

              <RaindropButton icon={<BookOpen />} primary>
                Read Latest Issue
              </RaindropButton>
            </div>
          </div>
        </motion.div>

        {/* Magazine Editors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-['Poppins'] text-white text-center mb-8">Meet Our Editors</h2>
          
          <div className="grid sm:grid-cols-3 gap-6">
            {editors.map((editor, index) => (
              <motion.div
                key={index}
                className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
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
        </motion.div>
      </div>
    </div>
  );
}

// Achievements Page
function AchievementsPage() {
  const achievements = [
    { title: 'Academic Excellence Award', category: 'Academic', icon: <Award /> },
    { title: 'Best Class Spirit', category: 'School', icon: <Heart /> },
    { title: 'Science Fair Winners', category: 'Competition', icon: <Trophy /> },
    { title: 'Sports Championship', category: 'Sports', icon: <Star /> },
    { title: 'Community Service Award', category: 'Service', icon: <Sparkles /> },
    { title: 'Innovation Challenge', category: 'Technology', icon: <Award /> },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl sm:text-5xl font-['Poppins'] text-white text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Our Achievements
        </motion.h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center mb-4 shadow-lg">
                <div className="text-white w-8 h-8">
                  {achievement.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-['Poppins'] text-white mb-2">{achievement.title}</h3>
              <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 text-sm border border-blue-400/30">
                {achievement.category}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Team Page
function TeamPage() {
  const [selectedStudent, setSelectedStudent] = useState<{
    name: string;
    photo: string;
    role: string;
    bio: string;
    interests: string[];
    achievements: string[];
  } | null>(null);

  const students = Array(27).fill(null).map((_, i) => ({
    name: `Student ${i + 1}`,
    photo: i % 4 === 0 ? 'https://images.unsplash.com/photo-1618316224214-a5bac0651def?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwcG9ydHJhaXQlMjB5b3VuZyUyMG1hbnxlbnwxfHx8fDE3NjE5OTUyNTl8MA&ixlib=rb-4.1.0&q=80&w=1080' : '',
    role: 'Class Member',
    bio: `An enthusiastic and dedicated member of Grade 9C Boys, always ready to contribute to our class spirit and excellence.`,
    interests: ['Sports', 'Technology', 'Arts', 'Science'],
    achievements: ['Academic Excellence', 'Team Player', 'Leadership Skills'],
  }));

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-4xl sm:text-5xl font-['Poppins'] text-white text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Meet The Team
        </motion.h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {students.map((student, index) => (
            <motion.div
              key={index}
              className="backdrop-blur-xl bg-white/10 rounded-2xl p-4 border border-white/20 text-center cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 8) * 0.05 }}
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
              
              <h3 className="text-white font-['Poppins'] mb-1">{student.name}</h3>
              <p className="text-sm text-blue-200">{student.role}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Student Detail Modal */}
      <AnimatePresence>
        {selectedStudent && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedStudent(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
            
            {/* Modal Content */}
            <motion.div
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 shadow-2xl"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedStudent(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-lg border border-white/30 flex items-center justify-center text-white transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8">
                {/* Student Photo & Header */}
                <div className="flex flex-col sm:flex-row gap-6 mb-6">
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
                    <p className="text-blue-200 mb-4">{selectedStudent.role}</p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-blue-100 text-sm">Grade 9C Boys | 2025-2026</span>
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <div className="mb-6 backdrop-blur-lg bg-white/5 rounded-2xl p-6 border border-white/10">
                  <h3 className="text-xl font-['Poppins'] text-white mb-3 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-pink-400" />
                    About
                  </h3>
                  <p className="text-blue-100 leading-relaxed">{selectedStudent.bio}</p>
                </div>

                {/* Interests */}
                <div className="mb-6">
                  <h3 className="text-xl font-['Poppins'] text-white mb-3 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-blue-400" />
                    Interests
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedStudent.interests.map((interest, idx) => (
                      <span 
                        key={idx}
                        className="px-4 py-2 rounded-full bg-purple-500/20 text-purple-200 border border-purple-400/30 text-sm"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h3 className="text-xl font-['Poppins'] text-white mb-3 flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-orange-400" />
                    Achievements
                  </h3>
                  <div className="space-y-2">
                    {selectedStudent.achievements.map((achievement, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center gap-3 backdrop-blur-lg bg-white/5 rounded-xl p-3 border border-white/10"
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
                        <span className="text-blue-100">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Quotes Page
function QuotesPage() {
  const quotes = [
    { text: "Together we achieve more than we ever could alone.", author: "Class Motto" },
    { text: "Excellence is not a destination, it's a journey we take together.", author: "Student Quote" },
    { text: "In 9C, we don't just dream big, we achieve big.", author: "Class Spirit" },
    { text: "Brotherhood isn't just a word, it's our way of life.", author: "Student Quote" },
    { text: "When one of us succeeds, we all celebrate.", author: "Class Value" },
    { text: "Innovation starts with believing in what's possible.", author: "Student Quote" },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl sm:text-5xl font-['Poppins'] text-white text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Quotes Wall
        </motion.h1>

        <div className="grid sm:grid-cols-2 gap-6">
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              className="backdrop-blur-xl bg-white/10 rounded-2xl p-8 border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
            >
              <MessageSquare className="w-8 h-8 text-blue-400 mb-4" />
              <p className="text-lg text-white/90 italic mb-4 font-['Georgia']">"{quote.text}"</p>
              <p className="text-blue-200">— {quote.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Contact Page
function ContactPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl sm:text-5xl font-['Poppins'] text-white text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Contact Us
        </motion.h1>

        <motion.div
          className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 md:p-12 border border-white/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-['Poppins'] text-white mb-4">Get In Touch</h2>
              <p className="text-blue-100 mb-6">
                Want to connect with Grade 9C Boys? We'd love to hear from you!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-6 border border-white/10">
                <Mail className="w-8 h-8 text-blue-400 mb-3" />
                <h3 className="text-xl text-white mb-2">Email</h3>
                <p className="text-blue-200">grade9c@emiratesnational.edu</p>
              </div>

              <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-6 border border-white/10">
                <Users className="w-8 h-8 text-purple-400 mb-3" />
                <h3 className="text-xl text-white mb-2">Class</h3>
                <p className="text-blue-200">Grade 9C Boys | 2025-2026</p>
              </div>
            </div>

            <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl text-white mb-4">Follow Our Journey</h3>
              <div className="flex flex-wrap gap-3">
                <button className="px-6 py-3 rounded-xl bg-blue-500/20 text-blue-200 border border-blue-400/30 hover:bg-blue-500/30 transition-all">
                  Instagram
                </button>
                <button className="px-6 py-3 rounded-xl bg-purple-500/20 text-purple-200 border border-purple-400/30 hover:bg-purple-500/30 transition-all">
                  Twitter
                </button>
                <button className="px-6 py-3 rounded-xl bg-pink-500/20 text-pink-200 border border-pink-400/30 hover:bg-pink-500/30 transition-all">
                  Facebook
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
