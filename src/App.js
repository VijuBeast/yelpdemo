/* eslint-disable jsx-a11y/alt-text */
import './App.css';
import Navigation from './components/NavigationItems'
import CardShowcase from './components/Cards'
import YelpRedmond from './components/YelpRedmond';
import { BrowserRouter as Router } from 'react-router-dom'
function App() {
  return (
    <Router>
      <Navigation />
      <img className="bg" src="https://images.pexels.com/photos/3193739/pexels-photo-3193739.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
      <h1 className="center">Find the Best Business in Town</h1>
      <CardShowcase />
      <h1 className="center">Yelp Redmond</h1>
      <YelpRedmond />
    </Router>
  );
}

export default App;
