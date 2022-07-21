export const Tag = {
  parts: ['container', 'label'],
  baseStyle: {
    container: {
      borderRadius: '1rem',
    },
    label: {
      color: 'neutral.0',
      lineHeight: '100%',
    },
  },
  sizes: {
    md: {
      container: {
        minH: '1.625rem',
        fontSize: '1.125rem',
        fontWeight: 'bold',
        p: '0.25rem 0.75rem',
      },
    },
  },
  defaultProps: {
    size: 'md',
  },
}
