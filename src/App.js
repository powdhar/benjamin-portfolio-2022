import './Styles/App.css';
import Navigation from './Components/Navigation.js';
import Header from './Components/Header.js';
import Card from './Components/Card.js'
import Contact from './Components/Contact.js'

function App() {
  return (
    <div className="App">
        <Navigation />
        <Header />
        <Card />
        <Contact />
    </div>
  );
}

export default App;
