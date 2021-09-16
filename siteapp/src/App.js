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
import Form from './screens/Form';

function App() {

  return (
    <div>
      <Router>
		<Link to='/'>Home</Link>
		<span> - </span>
		<Link to='/users'>Users</Link>
		<span> - </span>
		<Link to='/about'>About</Link>
		<span> - </span>
		<Link to='/form'>Form</Link>
		<Switch>
			<Route path="/users/:id/details" component={UsersDetails} />
			<Route path="/users" component={Users} />
			<Route path="/about" component={About} />
			<Route path="/form" component={Form} />
			<Route path="/" component={Home} />
		</Switch>
      </Router>
    </div>
  )
}

export default App;
