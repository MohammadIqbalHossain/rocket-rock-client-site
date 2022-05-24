import { Route, Routes, useLocation } from 'react-router-dom';
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
import MakeAdmin from './components/Dashboard/MakeAdmin';
import RequireAdmin from './components/Auth/RequireAdmin';
import AdminAddProduct from './components/Dashboard/AdminAddProduct';
import ManageProducts from './components/Dashboard/ManageProducts';
import Footer from './components/Shared/Footer';
import MisssionSpecialist from './components/Home/OurEngineers/MisssionSpecialist';
import OurEngineers from './components/Home/OurEngineers/OurEngineers';
import SystemEngineer from './components/Home/OurEngineers/SystemEngineer';

function App() {

  const { pathname } = useLocation();;

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>

        <Route path='/ourEngineers' element={<OurEngineers />}>

        <Route index element={<MisssionSpecialist />}></Route>
        <Route path="/ourEngineers/system-enginner" element={<SystemEngineer />}></Route>

        </Route>

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

          <Route path="dashboard/makeAdmin" element={<RequireAuth>
            <RequireAdmin>
              <MakeAdmin />
            </RequireAdmin>
          </RequireAuth>}></Route>

          <Route path="dashboard/add-a-product" element={<RequireAuth>
            <RequireAdmin>
              <AdminAddProduct />
            </RequireAdmin>
          </RequireAuth>}></Route>

          <Route path="dashboard/manage-products" element={<RequireAuth>
            <RequireAdmin>
              <ManageProducts />
            </RequireAdmin>
          </RequireAuth>}></Route>

          <Route path="dashboard/my-profile" element={<MyProfile />}></Route>
        </Route>

      </Routes>
        {
          pathname === "/" &&  <Footer />
        }
      <ToastContainer />
    </div>
  );
}

export default App;
