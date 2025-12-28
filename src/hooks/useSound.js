import { useCallback } from 'react'

// Sound URLs (we'll use public CDN or local files)
const sounds = {
  click: '/sounds/click.wav',
  startup: '/sounds/startup.wav',
  shutdown: '/sounds/shutdown.wav',
  welcome: '/sounds/welcome.wav',
  logoff: '/sounds/logoff.wav',
  error: '/sounds/error.wav',
  minimize: '/sounds/minimize.wav',
  maximize: '/sounds/maximize.wav',
  close: '/sounds/close.wav',
}

export default function useSound() {
  const playSound = useCallback((soundName) => {
    try {
      const audio = new Audio(sounds[soundName])
      audio.volume = 0.3
      audio.play().catch(() => {
        // Ignore errors if sound doesn't load
      })
    } catch (error) {
      // Ignore sound errors
    }
  }, [])

  return playSound
}
