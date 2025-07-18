import { createSignal, Show } from 'solid-js'
import './App.css'
import SplashScreen from './components/SplashScreen'
import Sidebar from './components/Sidebar'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import ProjectsPage from './components/ProjectsPage'
import InterestsPage from './components/InterestsPage'

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
        return <HomePage />
    }
  }

  return (
    <>
      <Show when={showSplash()}>
        <SplashScreen onComplete={() => setShowSplash(false)} />
      </Show>
      
      <Show when={!showSplash()}>
        <div class="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-amber-50">
          <Sidebar activeSection={activeSection()} setActiveSection={setActiveSection} />
          
          <main class="ml-64 p-8">
            <div class="max-w-6xl mx-auto">
              {renderContent()}
            </div>
          </main>
        </div>
      </Show>
    </>
  )
}

export default App
