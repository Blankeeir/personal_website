export const theme = {
  colors: {
    primary: {
      50: '#FFF7ED',
      100: '#FFEDD5',
      200: '#FED7AA',
      300: '#FDBA74',
      400: '#FB923C',
      500: '#FF6B35', // Main primary color
      600: '#EA580C',
      700: '#C2410C',
      800: '#9A3412',
      900: '#7C2D12',
    },
    secondary: {
      50: '#FEF2F2',
      100: '#FEE2E2',
      200: '#FECACA',
      300: '#FCA5A5',
      400: '#F87171',
      500: '#C73E1D', // Main secondary color
      600: '#DC2626',
      700: '#B91C1C',
      800: '#991B1B',
      900: '#7F1D1D',
    },
    accent: {
      50: '#F7F3F0',
      100: '#EDE4DB',
      200: '#DBC9B7',
      300: '#C9AE93',
      400: '#B7936F',
      500: '#8B4513', // Main accent color
      600: '#7A3E11',
      700: '#69370F',
      800: '#58300D',
      900: '#47290B',
    },
    background: {
      primary: '#FFF8DC', // Cream
      secondary: '#FFFBF0',
      tertiary: '#FFF4E6',
    },
    text: {
      primary: '#3E2723', // Dark brown
      secondary: '#5D4037',
      tertiary: '#8D6E63',
      light: '#A1887F',
    },
    neutral: {
      50: '#FAFAF9',
      100: '#F5F5F4',
      200: '#E7E5E4',
      300: '#D6D3D1',
      400: '#A8A29E',
      500: '#78716C',
      600: '#57534E',
      700: '#44403C',
      800: '#292524',
      900: '#1C1917',
    }
  },
  animations: {
    duration: {
      fast: '0.2s',
      normal: '0.3s',
      slow: '0.5s',
      slower: '0.8s',
    },
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    }
  },
  spacing: {
    section: '6rem',
    container: '1200px',
  },
  borderRadius: {
    small: '0.5rem',
    medium: '1rem',
    large: '1.5rem',
  }
};

export type Theme = typeof theme;
