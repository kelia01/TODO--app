import React from 'react'

const ThemeToggle = () => {
    const {theme, toggle} = useTheme();
  return (
    <button>
        {theme === 'dark' ? 'Switch to light' : 'Switch to dark'}
    </button>
  )
}

export default ThemeToggle