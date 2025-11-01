export default function Index() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-sm z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-white font-bold text-xl">Grade 9C Boys</div>
          <div className="hidden md:flex gap-6">
            {['home', 'about', 'team'].map(section => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-white/80 hover:text-white capitalize transition-colors"
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="text-center max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
            Grade 9C Boys
          </h1>
          <p className="text-2xl text-blue-200 mb-4">2025–2026</p>
          <p className="text-xl text-white/80">Emirates National School</p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl">
          <h2 className="text-4xl font-bold text-white mb-6">About Us</h2>
          <p className="text-lg text-white/80 mb-4">
            We are Grade 9C Boys from Emirates National School, representing excellence and brotherhood in our academic journey.
          </p>
          <p className="text-lg text-white/80">
            Together, we strive for success and support each other in achieving our goals.
          </p>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="min-h-screen flex items-center justify-center px-4 pb-20">
        <div className="max-w-6xl">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4"></div>
                <h3 className="text-white text-center font-semibold">Student {i}</h3>
                <p className="text-white/60 text-center text-sm">Class Member</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/50 border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-white/60">© 2025 Grade 9C Boys | Emirates National School</p>
        </div>
      </footer>
    </div>
  );
}
