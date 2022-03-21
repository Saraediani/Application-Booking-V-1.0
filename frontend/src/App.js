import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
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
import Hotel from './pages/Home/Hotel';
import SingleRoom from './pages/Home/SingleRoom';
import Error from './pages/Home/Error';
import Footer from './components/Home/Footer';

import Booknow from './pages/Home/Booknow';

function App() {
  const user = localStorage.getItem("token") 
  return (
    <div className="App">

   <BrowserRouter>

    <Switch>
       {user && <Route exact path="/" component={Home} /> }

      
       <Route exact path="/" component={Home} />

          <Route exact path="/rooms/" component={Rooms}/>
          <Route exact path="/hotels/" component={Hotel}/>
          <Route exact path="/rooms/:slug" component={SingleRoom} />
          <Route exact path="/booknow/:slug" component={Booknow} />
       

        <Route exact path="/dashboard" component={Nav_dash} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/dashboard/clients" component={Clients} />
        <Route exact path="/dashboard/hotels" component={Hotels} />
        <Route exact path="/dashboard/owners" component={Owners} />
        <Route exact path="/dashboard/rooms"  component={Rooms_dashboard} />
        <Route exact path="/login" component={Login} />
        <Route component={Error}/>
       {/* <Route path="/" component= redirect ="/login" />}/> */}
          </Switch>
          <Footer/>
    </BrowserRouter>

    </div>
    
  );
}

export default App;
