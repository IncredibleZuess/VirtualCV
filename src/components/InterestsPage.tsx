function InterestsPage() {
  const interests = [
    {
      category: "Cybersecurity",
      icon: "🔒",
      items: [
        {
          title: "Reverse Engineering",
          description: "Deep diving into software and systems to understand their inner workings, vulnerabilities, and security mechanisms.",
          icon: "🔍"
        },
        {
          title: "Offensive Security",
          description: "Exploring ethical hacking techniques, penetration testing tools, and network security assessment methodologies.",
          icon: "⚔️"
        },
        {
          title: "Network Security",
          description: "Building and analyzing network scanning tools, understanding protocols, and identifying potential attack vectors.",
          icon: "🌐"
        },
        {
          title: "IoT Security",
          description: "Working with Raspberry Pi and embedded systems, exploring security implications of connected devices.",
          icon: "🔌"
        }
      ]
    },
    {
      category: "Technology",
      icon: "💻",
      items: [
        {
          title: "Open Source Development",
          description: "Contributing to projects like freeCodeCamp and exploring collaborative development in the open source community.",
          icon: "🌟"
        },
        {
          title: "Web Development",
          description: "Building modern web applications with TypeScript, creating responsive designs and user-friendly interfaces.",
          icon: "🌐"
        },
        {
          title: "Python Programming",
          description: "Using Python for security tools, automation scripts, and exploring its vast ecosystem of libraries.",
          icon: "🐍"
        },
        {
          title: "Machine Learning",
          description: "Exploring AI and ML algorithms, working with data to create intelligent security applications.",
          icon: "🤖"
        }
      ]
    },
    {
      category: "Hobbies & Personal",
      icon: "🎨",
      items: [
        {
          title: "Coffee Brewing & Roasting",
          description: "Exploring different brewing methods, from pour-over to espresso, and experimenting with home coffee roasting techniques. Always searching for the perfect cup while coding.",
          icon: "☕"
        },
        {
          title: "Game Development",
          description: "Creating games and interactive experiences, currently working on Project Space. Love combining creativity with technical skills.",
          icon: "🎮"
        },
        {
          title: "Gaming",
          description: "Enjoying both indie games and AAA titles, with a special interest in understanding game security and development mechanics.",
          icon: "🕹️"
        },
        {
          title: "Reading",
          description: "Devouring cybersecurity blogs, programming books, tech articles, and the occasional fiction novel.",
          icon: "📚"
        },
        {
          title: "Photography",
          description: "Capturing moments and landscapes, especially during travels to 5 different countries and coffee shop visits around South Africa.",
          icon: "📸"
        }
      ]
    },
    {
      category: "Learning & Growth",
      icon: "📖",
      items: [
        {
          title: "Academic Excellence",
          description: "Pursuing BSc IT at North-West University, focusing on cybersecurity and software development principles.",
          icon: "🎓"
        },
        {
          title: "Community Engagement",
          description: "Active on GitHub, contributing to open source projects and sharing knowledge with the developer community.",
          icon: "🤝"
        },
        {
          title: "Continuous Learning",
          description: "Always seeking new programming challenges and opportunities to expand knowledge in emerging technologies.",
          icon: "🧠"
        },
        {
          title: "Mentoring",
          description: "Helping fellow students and sharing cybersecurity knowledge through projects and collaborative learning.",
          icon: "👨‍🏫"
        }
      ]
    }
  ]

  return (
    <div class="space-y-8">
      <section class="text-center">
        <h1 class="text-4xl font-bold text-slate-800 mb-4">My Interests</h1>
        <p class="text-xl text-slate-600 max-w-2xl mx-auto">
          Beyond coding, I have a variety of interests that keep me curious and motivated. 
          These hobbies and passions often inspire my work and help me approach problems 
          from different perspectives.
        </p>
      </section>

      {/* Interests by Category */}
      {interests.map((category) => (
        <section class="bg-white rounded-2xl p-8 shadow-lg">
          <h2 class="text-3xl font-bold text-slate-800 mb-8 text-center flex items-center justify-center">
            <span class="mr-3 text-4xl">{category.icon}</span>
            {category.category}
          </h2>
          
          <div class="grid md:grid-cols-2 gap-6">
            {category.items.map((item) => (
              <div class="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
                <div class="flex items-start space-x-4">
                  <div class="text-3xl flex-shrink-0">{item.icon}</div>
                  <div>
                    <h3 class="text-xl font-semibold text-slate-800 mb-2">{item.title}</h3>
                    <p class="text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Current Goals */}
      <section class="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8">
        <h2 class="text-3xl font-bold text-slate-800 mb-8 text-center">Current Goals</h2>
        
        <div class="grid md:grid-cols-3 gap-6">
          <div class="text-center">
            <div class="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl">🔒</span>
            </div>
            <h3 class="text-xl font-semibold text-slate-800 mb-2">Master Cybersecurity</h3>
            <p class="text-slate-600">Deepen expertise in penetration testing and security analysis</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl">🎓</span>
            </div>
            <h3 class="text-xl font-semibold text-slate-800 mb-2">Complete BSc IT</h3>
            <p class="text-slate-600">Excel in my studies at North-West University with focus on security</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl">🌟</span>
            </div>
            <h3 class="text-xl font-semibold text-slate-800 mb-2">Contribute More</h3>
            <p class="text-slate-600">Increase open source contributions and help the developer community</p>
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section class="bg-white rounded-2xl p-8 shadow-lg">
        <h2 class="text-3xl font-bold text-slate-800 mb-8 text-center">Fun Facts About Me</h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="text-center p-4">
            <div class="text-4xl mb-2">🔒</div>
            <div class="text-2xl font-bold text-amber-600">27</div>
            <div class="text-slate-600">GitHub repositories</div>
          </div>
          
          <div class="text-center p-4">
            <div class="text-4xl mb-2">🎓</div>
            <div class="text-2xl font-bold text-amber-600">BSc IT</div>
            <div class="text-slate-600">Currently studying at NWU</div>
          </div>
          
          <div class="text-center p-4">
            <div class="text-4xl mb-2">🌍</div>
            <div class="text-2xl font-bold text-amber-600">5</div>
            <div class="text-slate-600">Countries visited</div>
          </div>
          
          <div class="text-center p-4">
            <div class="text-4xl mb-2">�</div>
            <div class="text-2xl font-bold text-amber-600">1</div>
            <div class="text-slate-600">Game in development</div>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section class="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 text-center text-white">
        <h2 class="text-3xl font-bold mb-4">Let's Connect!</h2>
        <p class="text-slate-300 mb-6 max-w-2xl mx-auto">
          I love connecting with fellow cybersecurity enthusiasts, developers, and anyone passionate about technology. 
          Feel free to reach out if you want to collaborate on projects, discuss security topics, or just chat about code!
        </p>
        <div class="flex justify-center space-x-4">
          <a href="mailto:carlo.barnardo@gmail.com" class="px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-medium">
            Send Message
          </a>
          <a href="https://github.com/IncredibleZuess" class="px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-slate-800 transition-colors font-medium">
            Follow on GitHub
          </a>
        </div>
      </section>
    </div>
  )
}

export default InterestsPage
