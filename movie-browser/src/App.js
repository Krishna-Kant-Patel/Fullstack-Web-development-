
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/Aboutus';
import { Switch, Route } from 'react-router-dom';


function App() {
  return (

    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact>
        <Home />
        </Route>
        <Route path="/about" Component={About}/>
        <About />
        
      </Switch>
      
      
    </div>
  );
}

export default App;
