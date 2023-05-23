import React from "react";

export default class Sidebar extends React.Component{
  logout = ()=>{
    localStorage.removeItem('user')
    window.location = '/admin/login'
  }
    render(){
        return(
            <>
            
             {/* Sidebar */}
  <div
    className="navbar-nav  sidebar-light accordion"
    style={{backgroundColor:'#3b5998',padding:20,height:'100%',position:'absolute',}}

    id="accordionSidebar"
  >
    <br />
    <a
      className="sidebar-brand d-flex align-items-center justify-content-center mt-5"
      href="/admin/"
    >
      <div className="sidebar-brand-text mx-3">Portfolio Admin Panel</div>
    </a>
    <hr className="sidebar-divider" />
   
    <li className="nav-item " >
      <a className="nav-link" href="/admin">
        <i className="fa fa-users" />
        <span>Profile</span>
      </a>
    </li>


    <hr className="sidebar-divider" />
    
    <li className="nav-item">
      <a className="nav-link" href="/admin/portfolios">
        <i className="fa fa-product-hunt " />
        <span>Portfolios</span>
      </a>
    </li>

    <hr className="sidebar-divider" />
    
    <li className="nav-item">
      <a className="nav-link" href="/admin/skills">
        <i className="fa fa-product-hunt " />
        <span>Skills</span>
      </a>
    </li>



    <hr className="sidebar-divider" />
    <li className="nav-item">
      <a className="nav-link" href="/admin/admins">
        <i className="fa fa-users" />
        <span>Admins</span>
      </a>
    </li>
   

    <hr className="sidebar-divider" />
    <li className="nav-item">
      <a className="nav-link" href="/admin/experience">
        <i className="fa fa-users" />
        <span>Experience</span>
      </a>
    </li>


    
    <hr className="sidebar-divider" />
    <li className="nav-item">
      <a className="nav-link" href="/admin/education">
        <i className="fa fa-users" />
        <span>Education</span>
      </a>
    </li>


    <hr className="sidebar-divider" />
    <li className="nav-item">
      <a onClick={this.logout} className="nav-link" href="#">
        <i className="fa fa-sign-out" />
        <span>Logout</span>
      </a>
    </li>
    <hr className="sidebar-divider" />
  
  </div>
  {/* Sidebar */}
 
 

  
            </>
        )
    }
}