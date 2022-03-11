
import { Route, Routes, Navigate } from 'react-router-dom';
import Main from './components/Main';
import Signup from './components/Signup';
import Login from './components/Login';
import Navbar from './components/Navbar/Navbar';

function App() {
  const user = localStorage.getItem("token") 
  return (

    

    <Routes>
       {user && <Route path="/"  element={<Main />} />}  
      
       <Route path="/signup" element={<Signup />} />
       <Route path="/home" element={<Navbar />} />
       <Route path="/login" element={<Login />}/>
       <Route path="/" element={<Navigate replace to="/login" />}/>
    </Routes>
    
  );
}
export default App;  