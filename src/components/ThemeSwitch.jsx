/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui'

export const ToggleSwitch = ({ variant }) => {
  const [colorMode, setColorMode] = useColorMode()

  const toggleMode = () => {
    setColorMode(colorMode === 'dark' ? 'light' : 'dark')
  }

  return (
    <button
      onClick={toggleMode}
      sx={{
        appearance: 'none',
        display: 'inline-block',
        textAlign: 'center',
        lineHeight: 'inherit',
        textDecoration: 'none',
        fontSize: 'inherit',
        fontWeight: 'bold',
        m: 0,
        px: 3,
        py: 2,
        border: 0,
        borderRadius: 4,
        variant: `buttons.${variant}`,
      }}
    >
      {colorMode === 'default' ? 'light' : colorMode}
    </button>
  )
}

export default ToggleSwitch
