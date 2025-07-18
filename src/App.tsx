import { createSignal, createEffect, Show } from 'solid-js'
import Sidebar from './components/Sidebar'
import SplashScreen from './components/SplashScreen'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import ProjectsPage from './components/ProjectsPage'
import InterestsPage from './components/InterestsPage'
import './fontawesome'
import './App.css'

function App() {
  const [showSplash, setShowSplash] = createSignal(true)
  const [activeSection, setActiveSection] = createSignal('home')
  const [isDarkMode, setIsDarkMode] = createSignal(false)

  // Load theme from localStorage
  createEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setIsDarkMode(true)
    }
  })

  // Save theme to localStorage and update document class
  createEffect(() => {
    if (isDarkMode()) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  })

  const renderContent = () => {
    switch (activeSection()) {
      case 'about':
        return <AboutPage />
      case 'projects':
        return <ProjectsPage />
      case 'interests':
        return <InterestsPage />
      default:
        return <HomePage />
    }
  }

  return (
    <>
      <Show when={showSplash()}>
        <SplashScreen onComplete={() => setShowSplash(false)} />
      </Show>
      
      <Show when={!showSplash()}>
        <div class={`min-h-screen transition-colors duration-300 ${
          isDarkMode() 
            ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
            : 'bg-gradient-to-br from-slate-100 via-slate-50 to-amber-50'
        }`}>
          <Sidebar 
            activeSection={activeSection()} 
            setActiveSection={setActiveSection}
            isDarkMode={isDarkMode()}
            toggleTheme={() => setIsDarkMode(!isDarkMode())}
          />
          
          <main class="lg:ml-64 min-h-screen">
            <div class="p-4 lg:p-8">
              <div class="max-w-6xl mx-auto">
                {renderContent()}
              </div>
            </div>
          </main>
        </div>
      </Show>
    </>
  )
}

export default App
