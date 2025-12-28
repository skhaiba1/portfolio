import { useState, useEffect } from 'react'
import LoadingScreen from './components/LoadingScreen'
import UserSelection from './components/UserSelection'
import WelcomeScreen from './components/WelcomeScreen'
import Desktop from './components/Desktop'
import useSound from './hooks/useSound'

function App() {
  const [currentScreen, setCurrentScreen] = useState('loading')
  const playSound = useSound()

  useEffect(() => {
    // Loading screen -> User selection after 3 seconds
    if (currentScreen === 'loading') {
      const timer = setTimeout(() => {
        setCurrentScreen('userSelection')
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [currentScreen])

  const handleUserSelect = () => {
    playSound('click')
    setCurrentScreen('welcome')
    playSound('welcome')

    // Welcome screen -> Desktop after 2 seconds
    setTimeout(() => {
      setCurrentScreen('desktop')
      playSound('startup')
    }, 2000)
  }

  const handleRestart = () => {
    playSound('shutdown')
    setCurrentScreen('loading')
  }

  const handleLogOff = () => {
    playSound('logoff')
    setCurrentScreen('userSelection')
  }

  return (
    <>
      {currentScreen === 'loading' && <LoadingScreen />}
      {currentScreen === 'userSelection' && <UserSelection onUserSelect={handleUserSelect} />}
      {currentScreen === 'welcome' && <WelcomeScreen />}
      {currentScreen === 'desktop' && <Desktop onRestart={handleRestart} onLogOff={handleLogOff} />}
    </>
  )
}

export default App
