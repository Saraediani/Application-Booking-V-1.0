
import { BrowserRouter, Route, Switch,  } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import Signup from './components/Signup';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Clients from './pages/Clients';
import Hotels from './pages/Hotels';
import Owners from './pages/Owners';
import Rooms from './pages/Rooms';

function App() {
  const user = localStorage.getItem("token") 

  return (

    <BrowserRouter>

    <Switch>
       {user && <Route exact path="/" component={Main} /> }
      
       <Route exact path="/dashboard" component={Navbar} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/dashboard/clients" component={Clients} />
        <Route exact path="/dashboard/hotels" component={Hotels} />
        <Route exact path="/dashboard/owners" component={Owners} />
        <Route exact path="/dashboard/rooms"  component={Rooms} />
        <Route exact path="/login" component={Login} />
       {/* <Route path="/" component= redirect ="/login" />}/> */}
    </Switch>
    </BrowserRouter>
    
  );
}
export default App;  