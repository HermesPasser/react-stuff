import './App.css';
import Home from './screens/Home';
import Users from './screens/Users';
import About from './screens/About';
import UsersDetails from './screens/UserDetails';
import { 
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
} from 'react-router-dom'

function App() {

  return (
    <div>
      <Router>
		<Link to='/users'>Users</Link>
		<span> - </span>
		<Link to='/about'>About</Link>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/users" component={Users} />
			<Route path="/users/:id/details" component={UsersDetails} />
			<Route path="/about" component={About} />
		</Switch>
      </Router>
    </div>
  )
}

export default App;
