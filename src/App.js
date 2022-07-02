import './Styles/App.css';
import Navigation from './Components/Navigation.js';
import Header from './Components/Header.js';
import Card from './Components/Card'

function App() {
  return (
    <div className="App">
        <Navigation />
        <Header />
        <Card />
    </div>
  );
}

export default App;
