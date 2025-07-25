import { createSignal, createMemo } from 'solid-js'

function ProjectsPage() {
  const [selectedFilter, setSelectedFilter] = createSignal('All Projects')

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

  // Filter categories
  const filterCategories = ['All Projects', 'Game Development', 'Web Development', 'University Projects', 'Cybersecurity']

  // Filtered projects based on selected filter
  const filteredProjects = createMemo(() => {
    if (selectedFilter() === 'All Projects') {
      return projects
    }
    return projects.filter(project => {
      const category = getProjectCategory(project)
      return category === selectedFilter()
    })
  })

  // Function to determine project category based on technologies and title
  const getProjectCategory = (project: any) => {
    const technologies = project.technologies.join(' ').toLowerCase()
    const title = project.title.toLowerCase()
    
    if (technologies.includes('godot') || technologies.includes('game') || technologies.includes('gdscript')) {
      return 'Game Development'
    }
    if (technologies.includes('solidjs') || technologies.includes('javascript') || technologies.includes('typescript') || technologies.includes('web') || technologies.includes('html') || technologies.includes('portfolio') || technologies.includes('blog')) {
      return 'Web Development'
    }
    if (technologies.includes('university') || title.includes('cmpg') || title.includes('nwu') || technologies.includes('kotlin')) {
      return 'University Projects'
    }
    if (technologies.includes('cybersecurity') || technologies.includes('security') || title.includes('sanren')) {
      return 'Cybersecurity'
    }
    return 'Other'
  }

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
    <div class="space-y-6 lg:space-y-8 px-4">
      <section class="text-center">
        <h1 class="text-3xl lg:text-4xl font-bold text-slate-800 dark:text-white mb-3 lg:mb-4">My Projects</h1>
        <p class="text-base lg:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Here's a collection of projects I've worked on, ranging from cybersecurity tools 
          to web development. Each project represents a learning journey and exploration 
          of different technologies, with a focus on security and innovation.
        </p>
        <p class="text-sm text-slate-500 dark:text-slate-400 mt-2">
          Showing {filteredProjects().length} of {projects.length} projects
        </p>
      </section>

      {/* Filter Section */}
      <section class="bg-white dark:bg-slate-800 rounded-2xl p-4 lg:p-6 shadow-lg">
        <div class="flex flex-wrap justify-center gap-2 lg:gap-4">
          {filterCategories.map((category) => (
            <button 
              onClick={() => setSelectedFilter(category)}
              class={`px-3 py-2 lg:px-4 lg:py-2 rounded-lg font-medium text-sm lg:text-base transition-colors cursor-pointer ${
                selectedFilter() === category 
                  ? 'bg-amber-600 dark:bg-amber-500 text-white' 
                  : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 transition-all duration-300">
        {filteredProjects().length === 0 ? (
          <div class="col-span-full text-center py-12">
            <div class="text-6xl mb-4">🔍</div>
            <h3 class="text-xl font-semibold text-slate-800 dark:text-white mb-2">No projects found</h3>
            <p class="text-slate-600 dark:text-slate-300">Try selecting a different category or view all projects.</p>
          </div>
        ) : (
          filteredProjects().map((project) => (
            <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            {/* Project Image/Icon */}
            <div class="h-40 lg:h-48 bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
              <span class="text-5xl lg:text-6xl">{project.image}</span>
            </div>
            
            {/* Project Content */}
            <div class="p-4 lg:p-6">
              <div class="flex justify-between items-start mb-3">
                <h3 class="text-lg lg:text-xl font-bold text-slate-800 dark:text-white leading-tight">{project.title}</h3>
                <span class={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>
              
              <p class="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3 text-sm lg:text-base leading-relaxed">{project.description}</p>
              
              {/* Technologies */}
              <div class="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span class="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Action Buttons */}
              <div class="flex space-x-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex-1 text-center py-2 px-4 border-2 border-amber-600 text-amber-600 rounded-lg hover:bg-amber-600 hover:text-white transition-colors font-medium cursor-pointer"
                >
                  Code
                </a>
                <button
                  onClick={() => window.open(project.demo === '#' ? project.github : project.demo, '_blank')}
                  class="flex-1 text-center py-2 px-4 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-medium cursor-pointer"
                >
                  {project.demo === '#' ? 'View' : 'Demo'}
                </button>
              </div>
            </div>
          </div>
          ))
        )}
      </section>

      {/* Call to Action */}
      <section class="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-slate-700 dark:to-slate-600 rounded-2xl p-8 text-center">
        <h2 class="text-3xl font-bold text-slate-800 dark:text-white mb-4">Want to See More?</h2>
        <p class="text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
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
