import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Home from './components/Home/Home';
import Header from './components/Shared/Header';
import RequireAuth from './components/Auth/RequireAuth'
import Purchase from './components/Purchase/Purchase';
import Dashboard from './components/Dashboard/Dashboard';
import MyOrders from './components/Dashboard/MyOrders';
import AddReview from './components/Dashboard/AddReview';
import MyProfile from './components/Dashboard/MyProfile';
import UpdateProfile from './components/Dashboard/UpdateProfile';



import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

        <Route path='/dashboard' element={<RequireAuth>
          <Dashboard />
        </RequireAuth>}>

          <Route index element={<RequireAuth>
            <MyOrders />
          </RequireAuth>}></Route>

          <Route path="dashboard/add-a-review" element={<RequireAuth>
            <AddReview />
          </RequireAuth>}></Route>

          <Route path="dashboard/updateProfile" element={<RequireAuth>
            <UpdateProfile />
          </RequireAuth>}></Route>

          <Route path="dashboard/my-profile" element={<MyProfile />}></Route>
        </Route>

      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
