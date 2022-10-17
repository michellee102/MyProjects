import './App.css';
import QuizzerLogo from './components/QuizzerLogo';
import QuizzerStart from './components/QuizzerStart';
import DecisionPanel from './components/DecisionPanel';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <QuizzerLogo />

        <Switch>
          <Route exact path="/" component={QuizzerStart} />
          <Route exact path="/decision" component={DecisionPanel} />
        </Switch>

      </div>
    </Router>

  );
}

export default App;
