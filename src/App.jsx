import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header';
import Routes from './routes'
function App() {
  return (
    <Router>
      <Header />
      <Routes />
      
    </Router>
  );
}

export default App;
