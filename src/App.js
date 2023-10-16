import './index.css'
import Header from './components/Header';
import Hero from './components/Hero';
import CoverLevels from './components/CoverLevels';
import Faqs from './components/Faqs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

// import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'

library.add(fas, faTwitter, faFontAwesome)




function App() {
  return (
    <div className="App">
      <Header /> 
      <Hero />
      <CoverLevels />
      <Faqs />
      <ContactUs />
      <Footer />
      
      
    </div>
  );
}
export default App;
