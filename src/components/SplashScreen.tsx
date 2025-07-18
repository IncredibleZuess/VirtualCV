import { createSignal, onMount } from 'solid-js'

interface SplashScreenProps {
  onComplete: () => void
}

function SplashScreen(props: SplashScreenProps) {
  const [showSteam, setShowSteam] = createSignal(false)
  const [fadeOut, setFadeOut] = createSignal(false)

  onMount(() => {
    // Start steam animation after a brief delay
    setTimeout(() => setShowSteam(true), 500)
    
    // Start fade out after the animation
    setTimeout(() => setFadeOut(true), 2500)
    
    // Complete splash screen
    setTimeout(() => props.onComplete(), 3000)
  })

  return (
    <div class={`fixed inset-0 bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900 flex items-center justify-center transition-opacity duration-500 ${
      fadeOut() ? 'opacity-0' : 'opacity-100'
    }`}>
      <div class="text-center">
        {/* Coffee Cup */}
        <div class="relative mb-8">
          <div class="w-32 h-32 mx-auto relative">
            {/* Cup */}
            <div class="absolute bottom-0 w-24 h-20 bg-white rounded-b-full mx-auto left-1/2 transform -translate-x-1/2">
              <div class="absolute inset-2 bg-amber-800 rounded-b-full"></div>
            </div>
            
            {/* Handle */}
            <div class="absolute right-1 top-14 w-6 h-8 border-4 border-white rounded-full border-l-transparent"></div>
            
            {/* Steam */}
            <div class={`absolute -top-2 left-1/2 transform -translate-x-1/2 transition-opacity duration-1000 ${
              showSteam() ? 'opacity-100' : 'opacity-0'
            }`}>
              <div class="steam-line animate-pulse" style="animation-delay: 0s;">
                <div class="w-1 h-8 bg-white/60 rounded-full mx-1 animate-bounce"></div>
              </div>
              <div class="steam-line animate-pulse" style="animation-delay: 0.3s;">
                <div class="w-1 h-6 bg-white/50 rounded-full mx-1 animate-bounce" style="animation-delay: 0.2s;"></div>
              </div>
              <div class="steam-line animate-pulse" style="animation-delay: 0.6s;">
                <div class="w-1 h-10 bg-white/40 rounded-full mx-1 animate-bounce" style="animation-delay: 0.4s;"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Loading Text */}
        <h1 class="text-4xl font-bold text-white mb-4">Welcome</h1>
        <p class="text-white/80 text-lg">Brewing your portfolio...</p>
        
        {/* Loading Dots */}
        <div class="flex justify-center mt-6 space-x-1">
          <div class="w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
          <div class="w-2 h-2 bg-white/60 rounded-full animate-bounce" style="animation-delay: 0.1s;"></div>
          <div class="w-2 h-2 bg-white/60 rounded-full animate-bounce" style="animation-delay: 0.2s;"></div>
        </div>
      </div>
    </div>
  )
}

export default SplashScreen
