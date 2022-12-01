import {Route,Routes} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Protected from './components/Protected';
import { AuthContextProvider } from './context/AuthContext';
import Account from './pages/Account';
import Home from './pages/Home';
import Signin from './pages/Signin';

function App() {
  return (
    <div className="App">
    <AuthContextProvider>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/account' element={<Protected>    <Account/>  </Protected>}/>
      <Route path='/update' element={<Protected>    <Account/>  </Protected>}/>
      <Route path='*' element={<div className='text-center'><h1>Error...</h1></div>}/>
      
      
      
    </Routes>
    </AuthContextProvider>
    </div>
  );
}

export default App;
