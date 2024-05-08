
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Contact from './components/Contact';
import { MailchimpForm } from './components/MailchimpForm';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Contact />
      <Footer />
      <MailchimpForm />
      <Newsletter />
    </div>
      

  );
}

export default App;
