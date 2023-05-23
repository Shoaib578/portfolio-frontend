import React from 'react'
import Axios from 'axios'
import { base_url } from '../../base_url'
export default class Login extends React.Component {
    state = {
        email:"",
        password:""
    }

    login = ()=>{
        let formData = new FormData()
        formData.append("email", this.state.email)
        formData.append("password", this.state.password)
        Axios.post(base_url+"apis/login_user",formData)
        .then(res=>{
            if(res.data.is_logged_in){
                localStorage.setItem('user',JSON.stringify(res.data.user))
                window.location = "/admin"
            }else{
                alert(res.data.status)
            }
        })
        .catch(err=>{
            alert(err.message)
        })
    }

    render(){
        return(
            <div className='container' style={{width:'70%',marginTop:100}}>

                <h3>Login</h3>
             <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" onChange={(val)=>{
                    this.setState({email:val.target.value})
                }} aria-describedby="emailHelp" placeholder="Enter email"/>
                
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" onChange={(val)=>{
                    this.setState({password:val.target.value})
                }} class="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>

            <a href='/admin/reset_password'>Forgot Password? Reset Password</a>
            <br />
            <br />

            
            <button type="submit" onClick={this.login} class="btn btn-primary">Submit</button>
            </div>
        )
    }
}