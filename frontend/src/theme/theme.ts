export const lightTheme = {
  colors: {
    background: '#F5F7FA',
    surface: '#FFFFFF',
    primary: '#2563EB',
    secondary: '#1E2A5E',
    text: '#1F2937',
    textSecondary: '#666666',
    border: '#D1D5DB',
    error: '#DC2626',
    buttonText: '#FFFFFF',
  },
};

export const darkTheme = {
  colors: {
    background: '#111827',
    surface: '#1F2937',
    primary: '#60A5FA',
    secondary: '#93C5FD',
    text: '#F9FAFB',
    textSecondary: '#D1D5DB',
    border: '#374151',
    error: '#F87171',
    buttonText: '#FFFFFF',
  },
};

export type AppTheme = typeof lightTheme;