import { Fa } from 'solid-fa'
import { faHome, faUser, faBriefcase, faHeart, faSun, faMoon, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

interface SidebarProps {
  activeSection: string
  setActiveSection: (section: string) => void
  isDarkMode: boolean
  toggleTheme: () => void
}

function Sidebar(props: SidebarProps) {
  const navItems = [
    { id: 'home', label: 'Home', icon: faHome },
    { id: 'about', label: 'About', icon: faUser },
    { id: 'projects', label: 'Projects', icon: faBriefcase },
    { id: 'interests', label: 'Interests', icon: faHeart }
  ]

  return (
    <aside class={`fixed left-0 top-0 h-full w-64 shadow-xl z-10 transition-colors duration-300 ${
      props.isDarkMode 
        ? 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900'
    }`}>
      <div class="p-6">
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
        <div class="text-center mb-8">
          <div class="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
            ☕
          </div>
          <h2 class="text-white text-xl font-bold">Carlo Barnardo</h2>
          <p class={`text-sm ${props.isDarkMode ? 'text-gray-400' : 'text-slate-400'}`}>
            BSc IT Student & Cybersecurity Enthusiast
          </p>
        </div>

        {/* Navigation */}
        <nav class="space-y-2">
          {navItems.map((item) => (
            <button
              onClick={() => props.setActiveSection(item.id)}
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
              <Fa icon={item.icon} class="text-xl" />
              <span class="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Contact Info */}
        <div class="absolute bottom-6 left-6 right-6">
          <div class="flex justify-center space-x-4">
            <a href="mailto:carlo.barnardo@gmail.com" class={`transition-colors ${
              props.isDarkMode ? 'text-gray-400 hover:text-yellow-400' : 'text-slate-400 hover:text-amber-500'
            }`} title="Email">
              <Fa icon={faEnvelope} class="text-lg" />
            </a>
            <a href="tel:0783902780" class={`transition-colors ${
              props.isDarkMode ? 'text-gray-400 hover:text-yellow-400' : 'text-slate-400 hover:text-amber-500'
            }`} title="Phone">
              <Fa icon={faPhone} class="text-lg" />
            </a>
            <a href="https://www.linkedin.com/in/carlo-barnardo-563874aa/" class={`transition-colors ${
              props.isDarkMode ? 'text-gray-400 hover:text-yellow-400' : 'text-slate-400 hover:text-amber-500'
            }`} title="LinkedIn">
              <Fa icon={faLinkedin} class="text-lg" />
            </a>
            <a href="https://github.com/IncredibleZuess" class={`transition-colors ${
              props.isDarkMode ? 'text-gray-400 hover:text-yellow-400' : 'text-slate-400 hover:text-amber-500'
            }`} title="GitHub">
              <Fa icon={faGithub} class="text-lg" />
            </a>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
