import { Fa } from 'solid-fa'
import { faHome, faUser, faBriefcase, faHeart, faSun, faMoon, faEnvelope, faPhone, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { createSignal } from 'solid-js'

interface SidebarProps {
  activeSection: string
  setActiveSection: (section: string) => void
  isDarkMode: boolean
  toggleTheme: () => void
}

function Sidebar(props: SidebarProps) {
  const [isMenuOpen, setIsMenuOpen] = createSignal(false)
  
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
        class={`fixed top-4 left-4 z-50 p-3 rounded-lg shadow-lg transition-all duration-300 lg:hidden ${
          props.isDarkMode
            ? 'bg-gray-800 hover:bg-gray-700 text-white'
            : 'bg-white hover:bg-gray-50 text-gray-900'
        }`}
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
      <aside class={`fixed left-0 top-0 h-full shadow-xl z-40 transition-all duration-300 ${
        props.isDarkMode 
          ? 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900' 
          : 'bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900'
      } ${
        // Responsive width and positioning
        isMenuOpen() 
          ? 'w-80 translate-x-0' 
          : 'w-80 -translate-x-full lg:translate-x-0 lg:w-64'
      }`}>
        <div class="p-4 lg:p-6 h-full flex flex-col">
          {/* Theme Toggle */}
          <div class="absolute top-4 right-4">
            <button
              onClick={props.toggleTheme}
              class={`p-2 rounded-lg transition-colors duration-200 ${
                props.isDarkMode
                  ? 'bg-yellow-400 hover:bg-yellow-500 text-gray-900'
                  : 'bg-gray-700 hover:bg-gray-600 text-yellow-400'
              }`}
              title={props.isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              <Fa icon={props.isDarkMode ? faSun : faMoon} class="text-lg" />
            </button>
          </div>

          {/* Profile Section */}
          <div class="text-center mb-6 lg:mb-8 mt-12 lg:mt-0">
            <div class="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl lg:text-3xl">
              ☕
            </div>
            <h2 class="text-white text-lg lg:text-xl font-bold">Carlo Barnardo</h2>
            <p class={`text-xs lg:text-sm ${props.isDarkMode ? 'text-gray-400' : 'text-slate-400'}`}>
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
                    ? props.isDarkMode 
                      ? 'bg-yellow-500 text-gray-900 shadow-lg' 
                      : 'bg-amber-600 text-white shadow-lg'
                    : props.isDarkMode
                      ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                      : 'text-slate-300 hover:bg-slate-700 hover:text-white'
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
              <a href="mailto:carlodevs@gmail.com" class={`transition-colors ${
                props.isDarkMode ? 'text-gray-400 hover:text-yellow-400' : 'text-slate-400 hover:text-amber-500'
              }`} title="Email">
                <Fa icon={faEnvelope} class="text-lg lg:text-xl" />
              </a>
              <a href="tel:0783902780" class={`transition-colors ${
                props.isDarkMode ? 'text-gray-400 hover:text-yellow-400' : 'text-slate-400 hover:text-amber-500'
              }`} title="Phone">
                <Fa icon={faPhone} class="text-lg lg:text-xl" />
              </a>
              <a href="https://www.linkedin.com/in/carlo-barnardo-563874aa/" class={`transition-colors ${
                props.isDarkMode ? 'text-gray-400 hover:text-yellow-400' : 'text-slate-400 hover:text-amber-500'
              }`} title="LinkedIn">
                <Fa icon={faLinkedin} class="text-lg lg:text-xl" />
              </a>
              <a href="https://github.com/IncredibleZuess" class={`transition-colors ${
                props.isDarkMode ? 'text-gray-400 hover:text-yellow-400' : 'text-slate-400 hover:text-amber-500'
              }`} title="GitHub">
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
