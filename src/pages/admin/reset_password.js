import React from 'react'
import Axios from 'axios'
import { base_url } from '../../base_url'
export default class ResetPassword extends React.Component{
    state = {
        email_found:false,
        email:"",
        new_password:""
    }

    check_email =()=>{
        let formData = new FormData()
        formData.append("email", this.state.email)
        formData.append("check_email",true)
       
        Axios.post(base_url+'apis/reset_password',formData)
        .then(res=>{
            if(res.data.found){
                this.setState({email_found:true})
            }else{
                this.setState({email_found:false})
                alert("Email not found")
            }
        })
        .catch(err=>{
                alert(err.message)
        })
        
    }

    reset_password = ()=>{
        let formData = new FormData()
        formData.append("email", this.state.email)
        formData.append("password", this.state.new_password)

        formData.append("check_email",false)
       
        Axios.post(base_url+'apis/reset_password',formData)
        .then(res=>{
            if(res.data.is_updated){
                alert("Password reset Successfully")
            }else{
               alert("Unable to reset password")
            }
        })
        .catch(err=>{
                alert(err.message)
        })
    }


    reset = ()=>{
        if(this.state.email_found == false){
            this.check_email()
        }else{
            this.reset_password()
        }
    }
    render(){
        return(
            <div className='container' style={{width:'70%',marginTop:100}}>

            <h3>Reset Password</h3>


         {this.state.email_found == false?<div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" onChange={(val)=>{
                this.setState({email:val.target.value})
            }} aria-describedby="emailHelp" placeholder="Enter email"/>
            
        </div>:
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" onChange={(val)=>{
                this.setState({password:val.target.value})
            }} class="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>}

     

        
        <button type="submit" onClick={this.reset} class="btn btn-primary">Submit</button>
        </div>
    )
    }
}