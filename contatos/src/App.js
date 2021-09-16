import './App.css';
import Home from './screens/Home';
import Search from './screens/Search';
import PersonDetails from './screens/PersonDetails';
import PersonEdit from './screens/PersonEdit';
import PersonAdd from './screens/PersonAdd';
import store from './store'
import { Provider } from 'react-redux'
import { 
	BrowserRouter,
	Switch,
	Route,
	Link
} from 'react-router-dom'

// <ui>
// 	<li><Link to="/">Home</Link></li>
// 	<li><Link to="/search">Search</Link></li>
// 	<li><Link to="/person/:id/edit">:edit</Link></li>
// 	<li><Link to="/person/:id">:id</Link></li>
// 	<li><Link to="/person/add">Add</Link></li>
// </ui>
function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Switch>
					<Route path="/person/:id/edit" component={PersonEdit} />
					<Route path="/person/:id" component={PersonDetails} />
					<Route path="/person/add" component={PersonAdd} />
					<Route path="/search" component={Search} />
					<Route path="/" component={Home} />
				</Switch>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
