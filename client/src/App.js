
import {Route,Routes} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import './App.css';
import Navbar from './components/Navbar';
import Protected from './components/Protected';
import { AuthContextProvider } from './context/AuthContext';
import Account from './pages/Account';
import Details from './pages/Details';
import Home from './pages/Home';
import Signin from './pages/Signin';
import "react-toastify/dist/ReactToastify.css";
import 'aos/dist/aos.css'

function App() {
  
  return (
    <div className="App">
    <AuthContextProvider>
    <Navbar/>
    <ToastContainer position="top-center" />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/details/:id' element={<Details/>}/>
      <Route path='/account' element={<Protected>    <Account/>  </Protected>}/>
      <Route path='/update/:id' element={<Protected>    <Account/>  </Protected>}/>
   

      <Route path='*' element={<div className='text-center'><h1>Error...</h1></div>}/>
      
      
      
    </Routes>
    </AuthContextProvider>
    </div>
  );
}

export default App;
