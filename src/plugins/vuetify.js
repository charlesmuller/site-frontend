// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#1565C0', // Azul principal
          secondary: '#42A5F5', // Azul claro para contraste
          accent: '#1E88E5', // Azul para botões e elementos de destaque
          info: '#2196F3', // Azul informativo
          success: '#4CAF50', // Verde para sucesso
          warning: '#FFC107', // Amarelo para avisos
          error: '#FF5252', // Vermelho para erros
          background: '#FFFCF5', // Azul muito claro para fundo
        },
      },
      dark: {
        colors: {
          primary: '#1E88E5',
          secondary: '#1565C0',
          accent: '#82B1FF',
          info: '#29B6F6',
          success: '#66BB6A',
          warning: '#FFA726',
          error: '#EF5350',
          background: '#0D47A1',
        },
      },
    },
  },
});