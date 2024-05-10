// Exemple de code utilisant i18next pour la traduction
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          // Ajoutez vos traductions en anglais ici
          welcome: 'Welcome',
          // Autres traductions
        }
      },
      fr: {
        translation: {
          // Ajoutez vos traductions en français ici
          welcome: 'Bienvenue',
          // Autres traductions
        }
      },
      // Ajoutez des ressources pour d'autres langues si nécessaire
    },
    debug: true,
    lng: 'en', // Langue par défaut
    fallbackLng: 'en', // Langue de secours si la traduction n'est pas disponible
    interpolation: {
      escapeValue: false // React already safes from xss
    }
  });

export default i18n;
