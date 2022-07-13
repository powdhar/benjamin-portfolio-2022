import './Styles/App.css';
import Navigation from './Components/Navigation.js';
import Header from './Components/Header.js';
import ProjectCard from './Components/ProjectCard.js'
import Contact from './Components/Contact.js'
import Footer from './Components/Footer.js'

function App() {
  return (
    <div className="App">
        <Navigation />
        <Header />
        <ProjectCard />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
