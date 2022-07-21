import { extendTheme } from '@chakra-ui/react'
import {
  Badge,
  Button,
  Checkbox,
  Divider,
  Heading,
  Input,
  Link,
  Spinner,
  Tabs,
  Tag,
  Text,
} from './components'
import { colors, fonts, shadows } from './foundations'

const breakpoints = {
  sm: '375px',
  md: '428px',
}

export const themeExtensions = {
  components: {
    Badge,
    Button,
    Checkbox,
    Divider,
    Heading,
    Input,
    Link,
    Spinner,
    Tag,
    Tabs,
    Text,
  },
  colors,
  fonts,
  shadows,
  breakpoints,
}
