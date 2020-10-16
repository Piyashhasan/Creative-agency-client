import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from './Components/HOME/Home/Home';
import Login from './Components/LOGIN/Login';
import Dashboard from './Components/DASHBOARD/Dashboard/Dashboard';
import Order from './Components/DASHBOARD/Order/Order';
import Review from './Components/DASHBOARD/Review/Review';
import ServiceList from './Components/DASHBOARD/Service-list/ServiceList';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AdminServiceList from './Components/DASHBOARD/ServiceList/AdminServiceList';
import AddService from './Components/DASHBOARD/AddService/AddService';
import MakeAdmin from './Components/DASHBOARD/MakeAdmin/MakeAdmin';

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>

          <Route path="/home">
              <Home />
          </Route>
          
          <Route path="/login">
              <Login></Login>
          </Route>

          <Route path='/dashboard'>
            <Dashboard></Dashboard>
          </Route>

          <Route path='/order'>
            <Order></Order>
          </Route>
          
          <Route path='/review'>
            <Review></Review>
          </Route>

          <Route path='/serviceList'>
            <ServiceList></ServiceList>
          </Route>

          <Route path='/adminService'>
            <AdminServiceList></AdminServiceList>
          </Route>

          <Route path='/addService'>
            <AddService></AddService>
          </Route>

          <Route path='/makeAdmin'>
            <MakeAdmin></MakeAdmin>
          </Route>

          <Route exact path="/">
              <Home></Home>
          </Route>

          <Redirect path="/"/>
        </Switch>

      </Router>
    </UserContext.Provider>
  );
}

export default App;
