import React from 'react'
import Sidebar from './sidebar'

export default class Navbar extends React.Component {
    state = {
        showSidebar: true,
    }
    render(){
        return(

            <div>


                
            <nav
            className="navbar navbar-expand navbar-light bg-navbar topbar  static-top"
            style={{ width: "100%", position: "absolute" }}
          >
            <button onClick={()=>{
                this.setState({showSidebar:!this.state.showSidebar})
            }} id="sidebarToggleTop" className="btn btn-link rounded-circle mr-3">
              <i className="fa fa-bars" />
            </button>
            <ul className="navbar-nav ml-auto">
              
           
            </ul>
          </nav>

          {this.state.showSidebar?<Sidebar />:null}

          </div>
          
        )
      
    }
}