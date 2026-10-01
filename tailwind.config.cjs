const typography = require('@tailwindcss/typography');
module.exports = {
 content: ['./index.html', './App.tsx', './components/**/*.{ts,tsx}', './pages/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
 plugins: [typography],
 ...{
        theme: {
          extend: {
            fontFamily: {
              heading: ['Outfit', 'sans-serif'],
              sans: ['"Source Sans 3"', 'sans-serif'],
            },
            colors: {
              warm: {
                50: '#FAFAF8',
                100: '#F5F5F0',
                200: '#EEEEE8',
                300: '#E5E5DF',
              },
              surface: {
                DEFAULT: '#F8F9FA',
                dark: '#F1F3F5',
              },
              charcoal: '#1A1A1A',
              slate: {
                body: '#4B5563',
                muted: '#6B7280',
                light: '#9CA3AF',
              },
              primary: {
                DEFAULT: '#2C5530',
                50: '#E8F0E9',
                100: '#D1E1D3',
                200: '#A3C3A7',
                300: '#75A57B',
                400: '#47874F',
                500: '#2C5530',
                600: '#264A2A',
                700: '#1F3E23',
                800: '#19321C',
                900: '#132615',
              },
              copper: {
                DEFAULT: '#B87333',
                light: '#D4915A',
                dark: '#8B5A2B',
              }
            },
            typography: {
              DEFAULT: {
                css: {
                  maxWidth: '70ch',
                  color: '#4B5563',
                  lineHeight: '1.75',
                  h1: { 
                    color: '#1A1A1A',
                    fontFamily: 'Outfit, sans-serif',
                    fontWeight: '700',
                    letterSpacing: '-0.02em',
                  },
                  h2: { 
                    color: '#1A1A1A',
                    fontFamily: 'Outfit, sans-serif',
                    fontWeight: '700',
                    letterSpacing: '-0.01em',
                  },
                  h3: { 
                    color: '#1A1A1A',
                    fontFamily: 'Outfit, sans-serif',
                    fontWeight: '600',
                  },
                  h4: { 
                    color: '#1A1A1A',
                    fontFamily: 'Outfit, sans-serif',
                    fontWeight: '600',
                  },
                  strong: { color: '#1A1A1A' },
                  a: { 
                    color: '#2C5530', 
                    '&:hover': { color: '#1F3E23' },
                    textDecoration: 'none',
                  },
                  'ul > li::marker': {
                    color: '#2C5530',
                  },
                },
              },
            },
            animation: {
              'fade-in': 'fadeIn 0.5s ease-out',
              'slide-up': 'slideUp 0.6s ease-out',
              'slide-in-right': 'slideInRight 0.5s ease-out',
              'counter': 'counter 2s ease-out forwards',
              'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
            },
            keyframes: {
              fadeIn: {
                '0%': { opacity: '0' },
                '100%': { opacity: '1' },
              },
              slideUp: {
                '0%': { opacity: '0', transform: 'translateY(20px)' },
                '100%': { opacity: '1', transform: 'translateY(0)' },
              },
              slideInRight: {
                '0%': { opacity: '0', transform: 'translateX(20px)' },
                '100%': { opacity: '1', transform: 'translateX(0)' },
              },
              pulseSubtle: {
                '0%, 100%': { opacity: '1' },
                '50%': { opacity: '0.8' },
              },
            },
            boxShadow: {
              'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
              'soft-lg': '0 10px 40px -10px rgba(0, 0, 0, 0.1), 0 2px 10px -2px rgba(0, 0, 0, 0.04)',
              'soft-xl': '0 20px 60px -15px rgba(0, 0, 0, 0.12), 0 4px 20px -2px rgba(0, 0, 0, 0.05)',
              'inner-soft': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
              'glow-primary': '0 0 40px -10px rgba(44, 85, 48, 0.3)',
              'glow-copper': '0 0 30px -10px rgba(184, 115, 51, 0.25)',
            },
            backgroundImage: {
              'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
              'gradient-subtle': 'linear-gradient(135deg, var(--tw-gradient-stops))',
              'mesh-pattern': 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%232C5530\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            },
          }
        }
      }
};
