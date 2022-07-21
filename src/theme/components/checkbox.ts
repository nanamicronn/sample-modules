export const Checkbox = {
  parts: ['control'],
  baseStyle: {
    control: {
      border: '1px solid',
      borderRadius: '0.25rem',
      _focus: { boxShadow: 'none' },
      _hover: {
        bg: 'blue.100',
        _disabled: {
          bg: 'neutral.300',
        },
      },
      _checked: {
        bg: 'blue.500',
        borderColor: 'blue.500',
        _hover: {
          bg: 'blue.600',
          borderColor: 'blue.600',
        },
        _disabled: {
          bg: 'neutral.300',
          borderColor: 'neutral.300',
          hover: 'none',
          color: 'neutral.600',
        },
      },
      _disabled: {
        bg: 'neutral.300',
        borderColor: 'neutral.300',
      },
    },
  },
  sizes: {
    xl: {
      control: {
        w: 6,
        h: 6,
      },
      label: { fontSize: 'lg' },
      icon: { fontSize: '0.625rem' },
    },
  },
  defaultProps: {
    size: 'xl',
  },
}
