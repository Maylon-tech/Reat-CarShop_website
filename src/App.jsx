import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'

import Footer from './components/Footer';
import Header from './components/header/Header';
import Routes from './routes'

function App() {
  return (
    <Router>
      <Header />
      <Routes />
      <Footer />
    </Router>
  );
}

export default App;
