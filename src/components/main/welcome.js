import React from 'react'

export default class Welcome extends React.Component{
    render(){
        return(
            <>
            
            <div className="caption-header text-center wow zoomInDown">
              <h5 className="fw-normal">Welcome</h5>
              <h1 className="fw-light mb-4">
                I'm <b className="fg-theme">{this.props.name?this.props.name:"N/N"}</b> 
              </h1>
              <div className="badge">{this.props.title?this.props.title:'N/N'}</div>
            </div>
          
        
            
            </>
        )
    }
}