export const Input = {
  baseStyle: {
    field: {
      _placeholder: {
        color: 'neutral.300',
      },
      _disabled: {
        backgroundColor: 'neutral.100',
      },
    },
  },
  sizes: {
    lg: {
      field: {
        fontSize: '1rem',
        lineHeight: '150%',
        letterSpacing: '0.05em',
        p: '0.75rem 1rem',
        borderRadius: '0.25rem',
      },
    },
  },
  defaultProps: {
    size: 'lg',
    focusBorderColor: 'blue.500',
    errorBorderColor: 'danger.700',
  },
}
