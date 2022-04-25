import { useState } from 'react'
import './App.less'
import { Button } from 'antd'
import { useThemeSwitcher } from 'react-css-theme-switcher'
import { Switch, Input } from 'antd'

function App() {
  const [isDarkMode, setIsDarkMode] = useState()
  const { switcher, currentTheme, status, themes } = useThemeSwitcher()

  const toggleTheme = (isChecked) => {
    setIsDarkMode(isChecked)
    switcher({ theme: isChecked ? themes.dark : themes.light })
  }
  // Avoid theme change flicker
  if (status === 'loading') {
    return null
  }
  return (
    <div>
      <h1>The current theme is: {currentTheme}</h1>
      <Switch checked={isDarkMode} onChange={toggleTheme} />
      <br />
      <Input
        style={{ width: 300, marginTop: 30 }}
        placeholder='I will change with the theme!'
      />
      <br />
      <Button  type={'primary'}>PRIMARY</Button>
      <Button disabled type={'primary'}>PRIMARY</Button>
      <Button type={'default'}>PRIMARY</Button>

    </div>
  )
}

export default App
