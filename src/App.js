import './Styles/App.css';
import Navigation from './Components/Navigation.js';
import Header from './Components/Header.js';
import ProjectCard from './Components/ProjectCard.js'
import Contact from './Components/Contact.js'

function App() {
  return (
    <div className="App">
        <Navigation />
        <Header />
        <ProjectCard />
        <Contact />
    </div>
  );
}

export default App;
