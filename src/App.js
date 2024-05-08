
import './App.css';
import { Navbar } from 'react-bootstrap';
import Banner from './components/Banner'
import Footer from './components/Footer';
import Contact from './components/Contact';
import { MailchimpForm } from './components/MailchimpForm';
import Newsletter from './components/Newsletter';
import { ProjectCard } from './components/ProjectCard';
import Projects from "./components/Projects";
import { Skills } from './components/Skill';

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
      <Skills />

    </div>
      

  );
}

export default App;
