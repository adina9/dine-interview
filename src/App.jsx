import { Switch, Route } from 'react-router-dom'
import { Home } from './pages/Home';
import { About } from './pages/About';

export function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/about' component={About}/>
        <Route path='/' component={Home}/>
      </Switch>
    </div>
  );
}


