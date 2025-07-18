function HomePage() {
  return (
    <div class="space-y-6 lg:space-y-8">
      {/* Hero Section */}
      <section class="text-center py-8 lg:py-12 px-4">
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 dark:text-monokai-50 mb-4">
          Hello, I'm <span class="text-amber-600 dark:text-monokai-400">Carlo Barnardo</span>
        </h1>
        <div class="mb-4 lg:mb-6">
          <p class="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-700 dark:text-monokai-100 mb-2">BSc IT Student & Cybersecurity Enthusiast</p>
          <p class="text-base lg:text-lg text-slate-500 dark:text-monokai-200">North-West University • South Africa</p>
        </div>
        <p class="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-monokai-200 mb-6 lg:mb-8 max-w-2xl mx-auto leading-relaxed">
          Passionate about cybersecurity, reverse engineering, and building innovative digital solutions. 
          Currently specializing in network security, penetration testing, and open-source development. 
          Always eager to learn and collaborate on challenging projects.
        </p>
        <div class="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 mb-6 lg:mb-8">
          <button class="bg-amber-600 dark:bg-monokai-400 text-white dark:text-monokai-900 px-6 py-3 rounded-lg hover:bg-amber-700 dark:hover:bg-monokai-500 transition-colors font-medium w-full sm:w-auto">
            View My Projects
          </button>
          <button class="border-2 border-amber-600 dark:border-monokai-400 text-amber-600 dark:text-monokai-400 px-6 py-3 rounded-lg hover:bg-amber-600 dark:hover:bg-monokai-400 hover:text-white dark:hover:text-monokai-900 transition-colors font-medium w-full sm:w-auto">
            Get In Touch
          </button>
        </div>
        
        {/* Professional Status */}
        <div class="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-monokai-900 dark:to-monokai-800 rounded-xl p-4 lg:p-6 max-w-4xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-4 text-center">
            <div class="flex items-center justify-center space-x-2 p-2">
              <span class="text-green-500 dark:text-monokai-400 text-xl">🟢</span>
              <span class="text-slate-700 dark:text-monokai-100 font-medium text-sm lg:text-base">Open to Opportunities</span>
            </div>
            <div class="flex items-center justify-center space-x-2 p-2">
              <span class="text-blue-500 dark:text-monokai-500 text-xl">📚</span>
              <span class="text-slate-700 dark:text-monokai-100 font-medium text-sm lg:text-base">Currently Studying</span>
            </div>
            <div class="flex items-center justify-center space-x-2 p-2">
              <span class="text-purple-500 dark:text-monokai-800 text-xl">🤝</span>
              <span class="text-slate-700 dark:text-monokai-100 font-medium text-sm lg:text-base">Available for Collaboration</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section class="bg-white dark:bg-monokai-900 rounded-2xl p-4 lg:p-8 shadow-lg">
        <h2 class="text-2xl lg:text-3xl font-bold text-slate-800 dark:text-monokai-50 mb-4 lg:mb-6 text-center">What I Do</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          <div class="text-center p-4 lg:p-6">
            <div class="text-4xl mb-4">🔒</div>
            <h3 class="text-xl font-semibold text-slate-800 dark:text-monokai-100 mb-2">Cybersecurity</h3>
            <p class="text-slate-600 dark:text-monokai-200">Exploring offensive security tools, network scanning, and penetration testing techniques</p>
          </div>
          <div class="text-center p-6">
            <div class="text-4xl mb-4">🔍</div>
            <h3 class="text-xl font-semibold text-slate-800 dark:text-monokai-100 mb-2">Reverse Engineering</h3>
            <p class="text-slate-600 dark:text-monokai-200">Analyzing software and systems to understand their inner workings and vulnerabilities</p>
          </div>
          <div class="text-center p-6">
            <div class="text-4xl mb-4">💻</div>
            <h3 class="text-xl font-semibold text-slate-800 dark:text-monokai-100 mb-2">Development</h3>
            <p class="text-slate-600 dark:text-monokai-200">Building web applications and tools using modern frameworks and technologies</p>
          </div>
        </div>
      </section>

      {/* Recent Work Preview */}
      <section class="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-monokai-900 dark:to-monokai-800 rounded-2xl p-8">
        <h2 class="text-3xl font-bold text-slate-800 dark:text-monokai-50 mb-6 text-center">Featured Projects</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-white dark:bg-monokai-900 rounded-lg p-6 shadow-md">
            <div class="w-full h-40 bg-gradient-to-br from-purple-400 to-purple-600 dark:from-monokai-800 dark:to-monokai-700 rounded-lg mb-4 flex items-center justify-center">
              <span class="text-white text-2xl">🚀</span>
            </div>
            <h3 class="text-xl font-semibold text-slate-800 dark:text-monokai-100 mb-2">Project Space</h3>
            <p class="text-slate-600 dark:text-monokai-200 mb-4">A space-themed game built with Godot Engine, showcasing game development skills and creativity.</p>
            <div class="flex space-x-2">
              <span class="px-3 py-1 bg-amber-100 dark:bg-monokai-800 text-amber-800 dark:text-monokai-400 rounded-full text-sm">GDScript</span>
              <span class="px-3 py-1 bg-amber-100 dark:bg-monokai-800 text-amber-800 dark:text-monokai-400 rounded-full text-sm">Godot</span>
            </div>
          </div>
          <div class="bg-white dark:bg-monokai-900 rounded-lg p-6 shadow-md">
            <div class="w-full h-40 bg-gradient-to-br from-green-400 to-green-600 dark:from-monokai-700 dark:to-monokai-600 rounded-lg mb-4 flex items-center justify-center">
              <span class="text-white text-2xl">🏆</span>
            </div>
            <h3 class="text-xl font-semibold text-slate-800 dark:text-monokai-100 mb-2">SANReN CSC Winner</h3>
            <p class="text-slate-600 dark:text-monokai-200 mb-4">First place achievement in the SANReN Cyber Security Competition, demonstrating advanced cybersecurity skills.</p>
            <div class="flex space-x-2">
              <span class="px-3 py-1 bg-amber-100 dark:bg-monokai-800 text-amber-800 dark:text-monokai-400 rounded-full text-sm">Cybersecurity</span>
              <span class="px-3 py-1 bg-amber-100 dark:bg-monokai-800 text-amber-800 dark:text-monokai-400 rounded-full text-sm">Competition</span>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Network */}
      <section class="bg-gradient-to-r from-slate-800 to-slate-900 dark:from-monokai-950 dark:to-monokai-900 rounded-2xl p-8 text-white">
        <h2 class="text-3xl font-bold mb-6 text-center">Let's Connect Professionally</h2>
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div class="space-y-4">
            <h3 class="text-xl font-semibold text-amber-400 dark:text-monokai-400">Open to Professional Opportunities</h3>
            <ul class="space-y-2 text-slate-300 dark:text-monokai-200">
              <li class="flex items-center">
                <span class="text-amber-500 dark:text-monokai-400 mr-2">•</span>
                <span>Internships in Cybersecurity</span>
              </li>
              <li class="flex items-center">
                <span class="text-amber-500 dark:text-monokai-400 mr-2">•</span>
                <span>Junior Developer Positions</span>
              </li>
              <li class="flex items-center">
                <span class="text-amber-500 dark:text-monokai-400 mr-2">•</span>
                <span>Open Source Collaborations</span>
              </li>
              <li class="flex items-center">
                <span class="text-amber-500 dark:text-monokai-400 mr-2">•</span>
                <span>Cybersecurity Research Projects</span>
              </li>
            </ul>
          </div>
          <div class="text-center">
            <h3 class="text-xl font-semibold text-amber-400 dark:text-monokai-400 mb-4">Connect With Me</h3>
            <div class="flex justify-center space-x-4 mb-4">
              <a href="https://www.linkedin.com/in/carlo-barnardo-563874aa/" 
                 class="bg-blue-600 dark:bg-monokai-500 hover:bg-blue-700 dark:hover:bg-monokai-600 px-6 py-3 rounded-lg transition-colors font-medium">
                LinkedIn Profile
              </a>
              <a href="https://github.com/IncredibleZuess" 
                 class="bg-gray-700 dark:bg-monokai-800 hover:bg-gray-800 dark:hover:bg-monokai-700 px-6 py-3 rounded-lg transition-colors font-medium">
                GitHub Profile
              </a>
            </div>
            <p class="text-slate-400 dark:text-monokai-300 text-sm">
              Currently building my professional network and looking for mentorship opportunities
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
