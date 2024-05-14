import "../styles/Slide.scss";
import { useTranslation } from 'react-i18next';




const Slide = () => {
  const { t } = useTranslation(); // Utilisez useTranslation pour accéder aux traductions
  return (
    <div className="slide">
      <h1>{t('discover_world')}</h1> {/* Utilisez la traduction pour la clé 'discover_world' */}
      <h2>{t('book_now')}</h2> {/* Utilisez la traduction pour la clé 'book_now' */}
    </div>
  );
};

export default Slide;