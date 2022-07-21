export const Tabs = {
  sizes: {
    sm: {
      tab: {
        py: '0.5rem',
        fontSize: '0.875rem',
        lineHeight: '100%',
        letterSpacing: '0.1em',
      },
    },
  },
  variants: {
    double: {
      tab: {
        flex: 1,
        bg: 'neutral.50',
        color: 'neutral.600',
        fontWeight: 'normal',
        _hover: {
          bg: 'neutral.0',
        },
        _selected: {
          bg: 'blue.500',
          color: 'neutral.0',
          fontWeight: 'bold',
        },
        _first: {
          borderLeftRadius: '0.25rem',
        },
        _last: {
          borderRightRadius: '0.25rem',
        },
      },
    },
    triple: {
      tab: {
        flex: 1,
        bg: 'neutral.50',
        color: 'neutral.600',
        fontWeight: 'normal',
        _hover: {
          bg: 'neutral.0',
        },
        _selected: {
          bg: 'blue.500',
          color: 'neutral.0',
          fontWeight: 'bold',
        },
        _first: {
          borderLeftRadius: '0.25rem',
        },
        _last: {
          borderRightRadius: '0.25rem',
        },
        _even: {
          borderLeft: '1px solid',
          borderRight: '1px solid',
          borderColor: 'neutral.200',
        },
      },
    },
  },
  defaultProps: {
    size: 'sm',
    variant: 'double',
  },
}
