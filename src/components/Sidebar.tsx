interface SidebarProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

function Sidebar(props: SidebarProps) {
  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '👤' },
    { id: 'projects', label: 'Projects', icon: '💼' },
    { id: 'interests', label: 'Interests', icon: '❤️' }
  ]

  return (
    <aside class="fixed left-0 top-0 h-full w-64 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 shadow-xl z-10">
      <div class="p-6">
        {/* Profile Section */}
        <div class="text-center mb-8">
          <div class="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
            ☕
          </div>
          <h2 class="text-white text-xl font-bold">Carlo Barnardo</h2>
          <p class="text-slate-400 text-sm">BSc IT Student & Cybersecurity Enthusiast</p>
        </div>

        {/* Navigation */}
        <nav class="space-y-2">
          {navItems.map((item) => (
            <button
              onClick={() => props.setActiveSection(item.id)}
              class={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 text-left ${
                props.activeSection === item.id
                  ? 'bg-amber-600 text-white shadow-lg'
                  : 'text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              <span class="text-xl">{item.icon}</span>
              <span class="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Contact Info */}
        <div class="absolute bottom-6 left-6 right-6">
          <div class="flex justify-center space-x-4">
            <a href="mailto:carlo.barnardo@gmail.com" class="text-slate-400 hover:text-amber-500 transition-colors" title="Email">
              📧
            </a>
            <a href="tel:0783902780" class="text-slate-400 hover:text-amber-500 transition-colors" title="Phone">
              📞
            </a>
            <a href="https://www.linkedin.com/in/carlo-barnardo-563874aa/" class="text-slate-400 hover:text-amber-500 transition-colors" title="LinkedIn">
              💼
            </a>
            <a href="https://github.com/IncredibleZuess" class="text-slate-400 hover:text-amber-500 transition-colors" title="GitHub">
              🐙
            </a>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
