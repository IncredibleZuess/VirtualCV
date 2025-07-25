function HomePage(props: { setActiveSection: (section: string) => void }) {
  return (
    <div class="space-y-6 lg:space-y-8">
      {/* Hero Section */}
      <section class="text-center py-8 lg:py-12 px-4">
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-black dark:text-white ">
          Hello, I'm <span class="text-amber-600">Carlo Barnardo</span>
        </h1>
        <div class="mb-4 lg:mb-6">
          <p class="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 text-slate-700 dark:text-white">BSc IT Student & Cybersecurity Enthusiast</p>
          <p class="text-base lg:text-lg text-slate-500 dark:text-white">North-West University • South Africa</p>
        </div>
        <p class="text-base sm:text-lg lg:text-xl mb-6 lg:mb-8 max-w-2xl mx-auto leading-relaxed text-slate-600 dark:text-slate-300">
          Passionate about cybersecurity, reverse engineering, and building innovative digital solutions. 
          Currently specializing in network security, penetration testing, and open-source development. 
          Always eager to learn and collaborate on challenging projects.
        </p>
        <div class="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 mb-6 lg:mb-8">
          <button 
            onClick={() => props.setActiveSection('projects')}
            class="px-6 py-3 rounded-lg transition-colors font-medium w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white dark:bg-zinc-600 dark:hover:bg-zinc-700 cursor-pointer"
          >
            View My Projects
          </button>
          <button 
            onClick={() => {
              window.open('https://www.linkedin.com/in/carlo-barnardo-563874aa/', '_blank')
            }}
            class="border-2 px-6 py-3 rounded-lg transition-colors font-medium w-full sm:w-auto border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white dark:border-zinc-600 dark:text-zinc-400 dark:hover:bg-zinc-600 dark:hover:text-white cursor-pointer"
          >
            Get In Touch
          </button>
        </div>
        
        {/* Professional Status */}
        <div class="rounded-xl p-4 lg:p-6 max-w-4xl mx-auto bg-gradient-to-r from-amber-50 to-orange-50 dark:from-slate-800 dark:to-slate-700">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-4 text-center">
            <div class="flex items-center justify-center space-x-2 p-2">
              <span class="text-xl text-green-500 dark:text-green-400">🟢</span>
              <span class="font-medium text-sm lg:text-base text-slate-700 dark:text-slate-200">Open to Opportunities</span>
            </div>
            <div class="flex items-center justify-center space-x-2 p-2">
              <span class="text-xl text-blue-500 dark:text-blue-400">📚</span>
              <span class="font-medium text-sm lg:text-base text-slate-700 dark:text-slate-200">Currently Studying</span>
            </div>
            <div class="flex items-center justify-center space-x-2 p-2">
              <span class="text-xl text-purple-500 dark:text-purple-400">🤝</span>
              <span class="font-medium text-sm lg:text-base text-slate-700 dark:text-slate-200">Available for Collaboration</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section class="rounded-2xl p-4 lg:p-8 shadow-lg bg-white dark:bg-slate-800">
        <h2 class="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6 text-center text-slate-800 dark:text-slate-100">What I Do</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          <div class="text-center p-4 lg:p-6">
            <div class="text-4xl mb-4">🔒</div>
            <h3 class="text-xl font-semibold mb-2 text-slate-800 dark:text-slate-100">Cybersecurity</h3>
            <p class="text-slate-600 dark:text-slate-300">Exploring offensive security tools, network scanning, and penetration testing techniques</p>
          </div>
          <div class="text-center p-6">
            <div class="text-4xl mb-4">🔍</div>
            <h3 class="text-xl font-semibold mb-2 text-slate-800 dark:text-slate-100">Reverse Engineering</h3>
            <p class="text-slate-600 dark:text-slate-300">Analyzing software and systems to understand their inner workings and vulnerabilities</p>
          </div>
          <div class="text-center p-6">
            <div class="text-4xl mb-4">💻</div>
            <h3 class="text-xl font-semibold mb-2 text-slate-800 dark:text-slate-100">Development</h3>
            <p class="text-slate-600 dark:text-slate-300">Building web applications and tools using modern frameworks and technologies</p>
          </div>
        </div>
      </section>

      {/* Recent Work Preview */}
      <section class="rounded-2xl p-8 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-slate-800 dark:to-slate-700">
        <h2 class="text-3xl font-bold mb-6 text-center text-slate-800 dark:text-slate-100">Featured Projects</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="rounded-lg p-6 shadow-md bg-white dark:bg-slate-800">
            <div class="w-full h-40 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-br from-purple-400 to-purple-600 dark:from-gray-700 dark:to-gray-600">
              <span class="text-white text-2xl">🚀</span>
            </div>
            <h3 class="text-xl font-semibold mb-2 text-slate-800 dark:text-slate-100">Project Space</h3>
            <p class="mb-4 text-slate-600 dark:text-slate-300">A space-themed game built with Godot Engine, showcasing game development skills and creativity.</p>
            <div class="flex space-x-2">
              <span class="px-3 py-1 rounded-full text-sm bg-amber-100 text-amber-800 dark:bg-gray-700 dark:text-amber-300">GDScript</span>
              <span class="px-3 py-1 rounded-full text-sm bg-amber-100 text-amber-800 dark:bg-gray-700 dark:text-amber-300">Godot</span>
            </div>
          </div>
          <div class="rounded-lg p-6 shadow-md bg-white dark:bg-slate-800">
            <div class="w-full h-40 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-br from-green-400 to-green-600 dark:from-gray-600 dark:to-gray-500">
              <span class="text-white text-2xl">🏆</span>
            </div>
            <h3 class="text-xl font-semibold mb-2 text-slate-800 dark:text-slate-100">SANReN CSC Winner</h3>
            <p class="mb-4 text-slate-600 dark:text-slate-300">First place achievement in the SANReN Cyber Security Competition, demonstrating advanced cybersecurity skills.</p>
            <div class="flex space-x-2">
              <span class="px-3 py-1 rounded-full text-sm bg-amber-100 text-amber-800 dark:bg-gray-700 dark:text-amber-300">Cybersecurity</span>
              <span class="px-3 py-1 rounded-full text-sm bg-amber-100 text-amber-800 dark:bg-gray-700 dark:text-amber-300">Competition</span>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Network */}
      <section class="rounded-2xl p-8 text-white bg-gradient-to-r from-slate-800 to-slate-900 dark:from-gray-900 dark:to-gray-800">
        <h2 class="text-3xl font-bold mb-6 text-center">Let's Connect Professionally</h2>
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div class="space-y-4">
            <h3 class="text-xl font-semibold text-amber-400">Open to Professional Opportunities</h3>
            <ul class="space-y-2 text-slate-300">
              <li class="flex items-center">
                <span class="text-amber-400 mr-2">•</span>
                <span>Internships in Cybersecurity</span>
              </li>
              <li class="flex items-center">
                <span class="text-amber-400 mr-2">•</span>
                <span>Junior Developer Positions</span>
              </li>
              <li class="flex items-center">
                <span class="text-amber-400 mr-2">•</span>
                <span>Open Source Collaborations</span>
              </li>
              <li class="flex items-center">
                <span class="text-amber-400 mr-2">•</span>
                <span>Cybersecurity Research Projects</span>
              </li>
            </ul>
          </div>
          <div class="text-center">
            <h3 class="text-xl font-semibold text-amber-400 mb-4">Connect With Me</h3>
            <div class="flex justify-center space-x-4 mb-4">
              <a href="https://www.linkedin.com/in/carlo-barnardo-563874aa/" 
                 class="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors font-medium">
                LinkedIn Profile
              </a>
              <a href="https://github.com/IncredibleZuess" 
                 class="px-6 py-3 rounded-lg transition-colors font-medium bg-gray-700 hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-500">
                GitHub Profile
              </a>
            </div>
            <p class="text-slate-400 text-sm">
              Currently building my professional network and looking for mentorship opportunities
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
