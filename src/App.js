
import './App.css';
import {BrowserRouter as Router , Routes , Route, useParams} from "react-router-dom" ;
import Signin from './components/Signin';
import Signup from './components/Signup';
import Account from './components/Account';
import { AuthContextProvider } from './context/Authcontext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div>
      <div className='font-bold text-3xl my-6 items text-center'>
        Firebase Auth & Context
      </div>
      <AuthContextProvider>
      
      <Routes>
        <Route path='/' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/account' element={<ProtectedRoute><Account /></ProtectedRoute>} />


      </Routes>
    
      </AuthContextProvider>
  
    </div>
   
  );
}

export default App;
