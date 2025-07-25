import { createSignal, Show } from 'solid-js'
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

  const renderContent = () => {
    switch (activeSection()) {
      case 'about':
        return <AboutPage />
      case 'projects':
        return <ProjectsPage />
      case 'interests':
        return <InterestsPage />
      default:
        return <HomePage setActiveSection={setActiveSection} />
    }
  }

  return (
    <>
      <Show when={showSplash()}>
        <SplashScreen onComplete={() => setShowSplash(false)} />
      </Show>
      
      <Show when={!showSplash()}>
        <div class="min-h-screen transition-colors duration-300 bg-gradient-to-br from-slate-100 via-slate-50 to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <Sidebar 
            activeSection={activeSection()} 
            setActiveSection={setActiveSection}
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
