import * as React from 'react'
import { ThemeProvider } from 'theme-ui'
import { withContexts } from '@storybook/addon-contexts/dist/preview/frameworks/react'
import { theme, ThemeSwitch } from '../src'

const topLevelContexts = [
  {
    title: 'Theme UI Components',
    components: [ThemeProvider],
    params: [
      {
        name: 'ThemeUiProvider',
        props: {
          theme: theme,
        },
        default: true,
      },
    ],
  },
]

export default {
  title: 'Theme Switch',
  component: ThemeSwitch,
  decorators: [withContexts(topLevelContexts)],
  parameters: {
    themeui: theme,
  },
}
