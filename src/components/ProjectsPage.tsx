function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "VirtualCV Portfolio",
      description: "This very website! A modern portfolio built with SolidJS and Tailwind CSS, featuring a coffee-themed splash screen and responsive design. Showcases my work and personal projects.",
      image: "☕",
      technologies: ["SolidJS", "Vite", "Tailwind", "TypeScript"],
      github: "https://github.com/IncredibleZuess/VirtualCV",
      demo: "#",
      status: "Completed"
    },
    {
      id: 2,
      title: "Project Space",
      description: "One of my first serious game development projects, currently in progress. A space-themed game using Godot Engine, focusing on creativity and technical skills to create an engaging gaming experience. All powered by spacetrader.io and made possible with the help of the Godot community.",
      image: "🚀",
      technologies: ["GDScript", "Godot", "Game Development", "Creative", "API"],
      github: "https://github.com/IncredibleZuess/projectspace",
      demo: "#",
      status: "In Progress"
    },
    {
      id: 3,
      title: "3D Map Visualization",
      description: "A 3D mapping application built with Godot Engine, focusing on interactive map visualization and navigation systems.",
      image: "🗺️",
      technologies: ["GDScript", "Godot", "3D Graphics", "Visualization"],
      github: "https://github.com/IncredibleZuess/3dmap",
      demo: "#",
      status: "Completed"
    },
    {
      id: 4,
      title: "315 Texting App",
      description: "A Python-based texting application developed for university coursework (CMPG 315), demonstrating messaging functionality and user interface design.",
      image: "�",
      technologies: ["Python", "GUI", "Messaging", "University Project"],
      github: "https://github.com/IncredibleZuess/315TextingApp",
      demo: "#",
      status: "Completed"
    },
    {
      id: 5,
      title: "NWU VIP Project 2024",
      description: "A Kotlin-based project developed as part of the NWU Communication Skills program, showcasing mobile development skills and collaborative programming.",
      image: "�",
      technologies: ["Kotlin", "Mobile Development", "Android", "University"],
      github: "https://github.com/IncredibleZuess/NWU-VIPProject2024",
      demo: "#",
      status: "Hope to refine and complete"
    },
    {
      id: 6,
      title: "SANReN CSC Challenges",
      description: "Solutions and challenges from the SANReN Cyber Security Competition where I achieved first place, demonstrating advanced cybersecurity skills.",
      image: "🏆",
      technologies: ["Cybersecurity", "Competition", "Problem Solving", "Security"],
      github: "https://github.com/IncredibleZuess/SANReN-CSC-2023-Challenges",
      demo: "#",
      status: "Completed"
    },
    {
      id: 7,
      title: "CMPG213 Semester Project",
      description: "A comprehensive semester project for CMPG213 course, showcasing programming fundamentals and project development skills. This was a big learning experience in software development. Although this project is regarded as a failure, it taught me valuable lessons in coding and project management.",
      image: "🎓",
      technologies: ["Programming", "University Project", "Software Development"],
      github: "https://github.com/IncredibleZuess/CMPG213-Semester-Project-2014",
      demo: "#",
      status: "Completed"
    },
    {
      id: 8,
      title: "Developer Portfolio",
      description: "My first developer portfolio website built with JavaScript, showcasing early web development skills and project presentation.",
      image: "💼",
      technologies: ["JavaScript", "Portfolio", "Web Development", "HTML/CSS"],
      github: "https://github.com/IncredibleZuess/Portfolio",
      demo: "#",
      status: "Completed"
    },
    {
      id: 9,
      title: "Personal Blog Website",
      description: "My personal website built with TypeScript to share insights, experiences, and technical knowledge with the community.",
      image: "📝",
      technologies: ["TypeScript", "Blog", "Web Development", "Content"],
      github: "https://github.com/IncredibleZuess/PersonalBlog",
      demo: "#",
      status: "Completed"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800'
      case 'In Progress':
        return 'bg-blue-100 text-blue-800'
      case 'Planning':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div class="space-y-8">
      <section class="text-center">
        <h1 class="text-4xl font-bold text-slate-800 mb-4">My Projects</h1>
        <p class="text-xl text-slate-600 max-w-2xl mx-auto">
          Here's a collection of projects I've worked on, ranging from cybersecurity tools 
          to web development. Each project represents a learning journey and exploration 
          of different technologies, with a focus on security and innovation.
        </p>
      </section>

      {/* Filter Section */}
      <section class="bg-white rounded-2xl p-6 shadow-lg">
        <div class="flex flex-wrap justify-center gap-4">
          <button class="px-4 py-2 bg-amber-600 text-white rounded-lg font-medium">All Projects</button>
          <button class="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg font-medium hover:bg-slate-300 transition-colors">Game Development</button>
          <button class="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg font-medium hover:bg-slate-300 transition-colors">Web Development</button>
          <button class="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg font-medium hover:bg-slate-300 transition-colors">University Projects</button>
          <button class="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg font-medium hover:bg-slate-300 transition-colors">Cybersecurity</button>
        </div>
      </section>

      {/* Projects Grid */}
      <section class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {/* Project Image/Icon */}
            <div class="h-48 bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
              <span class="text-6xl">{project.image}</span>
            </div>
            
            {/* Project Content */}
            <div class="p-6">
              <div class="flex justify-between items-start mb-3">
                <h3 class="text-xl font-bold text-slate-800">{project.title}</h3>
                <span class={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>
              
              <p class="text-slate-600 mb-4 line-clamp-3">{project.description}</p>
              
              {/* Technologies */}
              <div class="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span class="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Action Buttons */}
              <div class="flex space-x-3">
                <a
                  href={project.github}
                  class="flex-1 text-center py-2 px-4 border-2 border-amber-600 text-amber-600 rounded-lg hover:bg-amber-600 hover:text-white transition-colors font-medium"
                >
                  Code
                </a>
                <a
                  href={project.demo}
                  class="flex-1 text-center py-2 px-4 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-medium"
                >
                  Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section class="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 text-center">
        <h2 class="text-3xl font-bold text-slate-800 mb-4">Want to See More?</h2>
        <p class="text-slate-600 mb-6 max-w-2xl mx-auto">
          These are just a few highlights from my portfolio. I'm always working on new projects 
          and exploring different technologies. Check out my GitHub for more code samples and contributions.
        </p>
        <a
          href="https://github.com/IncredibleZuess"
          class="inline-flex items-center px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-medium"
        >
          <span class="mr-2">🐙</span>
          Visit My GitHub
        </a>
      </section>
    </div>
  )
}

export default ProjectsPage
