import React from 'react'
import Main from './pages/main'

import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link,
  redirect
} from "react-router-dom";
import LoadMorePortfolios from './pages/main/load_more_portfolios';
import Profile from './pages/admin/profile';
import Admins from './pages/admin/admins';
import Experience from './pages/admin/experience';
import Education from './pages/admin/education';
import Portfolios from './pages/admin/portfolios';
import Skills from './pages/admin/skills';
import Login from './pages/admin/login';
import ResetPassword from './pages/admin/reset_password';
import EditAdmin from './pages/admin/edit_admin';

let storage = localStorage.getItem('user')
let all_pathnames = [
  '/admin','/admin/portfolios','/admin/skills','/admin/experience','/admin/education','/admin/admins','/admin/admin/edit/'
]
export default class App extends React.Component {

  check_admin_login = ()=>{
    const {pathname} = window.location
    if(all_pathnames.includes(pathname.toString())){
      if(!storage){
        window.location = "/admin/login"
      }
    }

    
  }


  componentDidMount(){
    this.check_admin_login()
    
  }
  render(){
    return<Router>
    <Switch>
      <Route exact path="/"  element={<Main />}/>
      <Route exact path="/portfolios"  element={<LoadMorePortfolios />}/>

      {/* Admin Routes Start */}
      <Route exact path="/admin"  element={<Profile />}/>
      <Route exact path="/admin/login"  element={<Login />}/>
      <Route exact path="/admin/reset_password/"  element={<ResetPassword />}/>

      <Route exact path="/admin/portfolios"  element={<Portfolios />}/>
      <Route exact path="/admin/skills"  element={<Skills />}/>

      <Route exact path="/admin/experience"  element={<Experience />}/>
      <Route exact path="/admin/education"  element={<Education />}/>

      <Route exact path="/admin/admins"  element={<Admins />}/>
      <Route exact path="/admin/admin/edit/:id"  element={<EditAdmin />}/>




    </Switch>
  </Router>
    
    
  }
}