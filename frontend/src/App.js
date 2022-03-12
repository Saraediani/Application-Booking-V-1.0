
import { Route, Routes, Navigate } from 'react-router-dom';
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

    <Routes>
       {user && <Route path="/"  element={<Main />} />}  
      
       <Route path="/dashboard" element={<Navbar />} />
       <Route path="/signup" element={<Signup />} />
       <Route path="/dashboard/clients" element={<Clients />} />
       <Route path="/dashboard/hotels" element={<Hotels />} />
       <Route path="/dashboard/owners" element={<Owners />} />
       <Route path="/dashboard/rooms" element={<Rooms />} />
       <Route path="/login" element={<Login />}/>
       <Route path="/" element={<Navigate replace to="/login" />}/>
    </Routes>
    
  );
}
export default App;  