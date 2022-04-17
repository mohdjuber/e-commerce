import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header';
import TopWear from './components/TopWear';
import BottomWear from './components/BottomWear';
import Cosmetics from './components/Cosmetics';
import FootWear from './components/FootWear';
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={TopWear} />
        <Route path='/bottomwear' component={BottomWear} />
        <Route path='/cosmetics' component={Cosmetics} />
        <Route path='/footwear' component={FootWear} />
      </Switch>
    </Router>
  );
}

export default App;
