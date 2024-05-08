
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Contact from './components/Contact';
import { MailchimpForm } from './components/MailchimpForm';

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Contact />
      <Footer />
      <MailchimpForm />
    </div>
      

  );
}

export default App;
