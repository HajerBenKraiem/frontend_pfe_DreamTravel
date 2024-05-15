import Navbar from "../components/Navbar"
import Slide from "../components/Slide"
import Categories from "../components/Categories"
import Listings from "../components/Listings"
import Footer from "../components/Footer"
import { useTranslation } from 'react-i18next';

import MapComponent from '../components/MapComponent';
const HomePage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Navbar />
    
      <Slide />
     
      <Categories />
      <Listings />
      {/* <MapComponent /> */}
      <Footer />
    </>
  )
}

export default HomePage