
import { BrowserRouter, Route, Switch,  } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import Signup from './components/Signup';
import Login from './components/Login';

// Dashboard import
import Nav_dash from './components/Nav_dash';
import Clients from './pages/Dashboard/Clients';
import Hotels from './pages/Dashboard/Hotels';
import Owners from './pages/Dashboard/Owners';
import Rooms_dashboard from './pages/Dashboard/Rooms';

// Home import
import Home from './pages/Home/Home';
import Rooms from './pages/Home/Rooms';
import SingleRoom from './pages/Home/SingleRoom';
import Error from './pages/Home/Error';
import About from './pages/Home/About';
import Footer from './components/Home/Footer';
import Contact from './pages/Home/Contact';
import Booknow from './pages/Home/Booknow';

function App() {
  const user = localStorage.getItem("token") 

  return (

    <BrowserRouter>

    <Switch>
       {user && <Route exact path="/" component={Home} /> }

      
       <Route exact path="/" component={Home} />
       
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/rooms/" component={Rooms}/>
          <Route exact path="/rooms/:slug" component={SingleRoom} />
          <Route exact path="/booknow/:slug" component={Booknow} />
       

        <Route exact path="/dashboard" component={Nav_dash} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/dashboard/clients" component={Clients} />
        <Route exact path="/dashboard/hotels" component={Hotels} />
        <Route exact path="/dashboard/owners" component={Owners} />
        <Route exact path="/dashboard/rooms"  component={Rooms_dashboard} />
        <Route exact path="/login" component={Login} />
       {/* <Route path="/" component= redirect ="/login" />}/> */}
          </Switch>

    </BrowserRouter>
    
  );
}
export default App;  