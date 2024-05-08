
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Contact from './components/Contact';
import { MailchimpForm } from './components/MailchimpForm';
import Newsletter from './components/Newsletter';
import { ProjectCard } from './components/ProjectCard';
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Contact />
      <Footer />
      <MailchimpForm />
      <Newsletter />
      <ProjectCard />
      <Projects />

    </div>
      

  );
}

export default App;
