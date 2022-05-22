import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Home from './components/Home/Home';
import Header from './components/Shared/Header';
import RequireAuth from './components/Auth/RequireAuth'
import Purchase from './components/Purchase/Purchase';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/purchase/:id' element={<RequireAuth>
           <Purchase />
        </RequireAuth>}>
        </Route>

      </Routes>

    </div>
  );
}

export default App;
