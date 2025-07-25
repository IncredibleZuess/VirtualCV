import { Fa } from 'solid-fa'
import { faHome, faUser, faBriefcase, faHeart, faSun, faMoon, faEnvelope, faPhone, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { createSignal, onMount } from 'solid-js'

interface SidebarProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

function Sidebar(props: SidebarProps) {
  const [isMenuOpen, setIsMenuOpen] = createSignal(false)
  const [isDarkMode, setIsDarkMode] = createSignal(false)
  
  // Initialize dark mode on component mount
  onMount(() => {
    // Check localStorage first, then system preference
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    const shouldBeDark = savedTheme === 'dark' || (savedTheme === null && prefersDark)
    
    setIsDarkMode(shouldBeDark)
    
    if (shouldBeDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    
    // Force a re-render to ensure the UI updates
    setTimeout(() => setIsDarkMode(shouldBeDark), 10)
  })
  
  // Toggle dark mode
  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode()
    setIsDarkMode(newDarkMode)
    
    // Force the class to be applied
    const html = document.documentElement
    if (newDarkMode) {
      html.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      html.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }
  
  const navItems = [
    { id: 'home', label: 'Home', icon: faHome },
    { id: 'about', label: 'About', icon: faUser },
    { id: 'projects', label: 'Projects', icon: faBriefcase },
    { id: 'interests', label: 'Interests', icon: faHeart }
  ]

  const handleNavClick = (section: string) => {
    props.setActiveSection(section)
    setIsMenuOpen(false) // Close mobile menu on navigation
  }

  return (
    <>
      {/* Mobile Menu Toggle Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen())}
        class="fixed top-4 left-4 z-50 p-3 rounded-lg shadow-lg transition-all duration-300 lg:hidden bg-white hover:bg-gray-50 text-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
        title="Toggle Menu"
      >
        <Fa icon={isMenuOpen() ? faTimes : faBars} class="text-lg" />
      </button>

      {/* Mobile Overlay */}
      <div 
        class={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 lg:hidden ${
          isMenuOpen() ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Sidebar */}
      <aside class={`fixed left-0 top-0 h-full shadow-xl z-40 transition-all duration-300 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 ${
        // Responsive width and positioning
        isMenuOpen() 
          ? 'w-80 translate-x-0' 
          : 'w-80 -translate-x-full lg:translate-x-0 lg:w-64'
      }`}>
        <div class="p-4 lg:p-6 h-full flex flex-col">
          {/* Theme Toggle */}
          <div class="absolute top-4 right-4">
            <button
              onClick={toggleDarkMode}
              class="p-2 rounded-lg transition-colors duration-200 bg-amber-500 hover:bg-amber-600 text-white shadow-lg border border-amber-400 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-amber-400 dark:border-slate-600"
              title={isDarkMode() ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              <Fa icon={isDarkMode() ? faSun : faMoon} class="text-lg" />
            </button>
          </div>

          {/* Profile Section */}
          <div class="text-center mb-6 lg:mb-8 mt-12 lg:mt-0">
            <div class="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl lg:text-3xl">
              ☕
            </div>
            <h2 class="text-white text-lg lg:text-xl font-bold">Carlo Barnardo</h2>
            <p class="text-xs lg:text-sm text-slate-300 dark:text-gray-300">
              BSc IT Student & Cybersecurity Enthusiast
            </p>
          </div>

          {/* Navigation */}
          <nav class="space-y-2 flex-1">
            {navItems.map((item) => (
              <button
                onClick={() => handleNavClick(item.id)}
                class={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 text-left ${
                  props.activeSection === item.id
                    ? 'bg-amber-600 text-white shadow-lg dark:bg-amber-500 dark:text-gray-900'
                    : 'text-slate-200 hover:bg-slate-700 hover:text-white dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white'
                }`}
              >
                <Fa icon={item.icon} class="text-lg lg:text-xl" />
                <span class="font-medium text-sm lg:text-base">{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Contact Info */}
          <div class="mt-6 lg:mt-auto">
            <div class="flex justify-center space-x-4 lg:space-x-6">
              <a href="mailto:carlo.barnardo@gmail.com" class="transition-colors text-slate-300 hover:text-amber-400 dark:text-gray-300 dark:hover:text-amber-400" title="Email">
                <Fa icon={faEnvelope} class="text-lg lg:text-xl" />
              </a>
              <a href="tel:0783902780" class="transition-colors text-slate-300 hover:text-amber-400 dark:text-gray-300 dark:hover:text-amber-400" title="Phone">
                <Fa icon={faPhone} class="text-lg lg:text-xl" />
              </a>
              <a href="https://www.linkedin.com/in/carlo-barnardo-563874aa/" class="transition-colors text-slate-300 hover:text-amber-400 dark:text-gray-300 dark:hover:text-amber-400" title="LinkedIn">
                <Fa icon={faLinkedin} class="text-lg lg:text-xl" />
              </a>
              <a href="https://github.com/IncredibleZuess" class="transition-colors text-slate-300 hover:text-amber-400 dark:text-gray-300 dark:hover:text-amber-400" title="GitHub">
                <Fa icon={faGithub} class="text-lg lg:text-xl" />
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
