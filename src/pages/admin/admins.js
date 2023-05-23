import React from 'react'
import Navbar from '../../components/admin/navbar'
import Axios from 'axios'
import { base_url } from '../../base_url'


export default class Admins extends React.Component{
    state = {
        email:"",
        password:"",
        name:"",
        users:[]
    }

    create_admin = ()=>{
        let formData = new FormData()
        formData.append("email",this.state.email)
        formData.append("password",this.state.password)
        formData.append("name",this.state.name)
        Axios.post(base_url+'apis/register_user',formData)
        .then(res=>{
            if(res.data.is_inserted){
                alert("Admin Registered Successfully")
                this.get_all_admins()
            }else{
                alert(res.data.status)
            }
        })
        .catch(err=>{
            console.log(err.message)
        })

    }

    get_all_admins = ()=>{
        Axios.get(base_url+'apis/get_all_users')
        .then(res=>{
            this.setState({users:res.data.data})
        })
        .catch(err=>{
            console.log(err.message)
        })
    }

    delete_admin = (user_id)=>{
        Axios.get(base_url+'apis/user/delete?user_id='+user_id)
        .then(res=>{
            if(res.data.is_deleted){
                this.get_all_admins()
            }else{
                alert(res.data.status)
            }
        })
        .catch(err=>{
            alert(err.message)
        })
    }

    componentDidMount(){
        this.get_all_admins()
    }
    render(){
        return(
            <>
             <Navbar />
               
               <div style={{width:'50%',float:'right',marginRight:'20%',marginTop:'8%',marginBottom:'5%'}}> 
               <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input
                    type="text"
                    className="form-control"
                    onChange={(val)=>this.setState({name:val.target.value})}
                    placeholder="Enter Name"
                    />
                  
                </div>


                <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                type="email"
                onChange={(val)=>this.setState({email:val.target.value})}

                className="form-control"
               
                placeholder="Enter email"
                />
            
                </div>
        <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
            type="password"
            className="form-control"
            onChange={(val)=>this.setState({password:val.target.value})}
            
            placeholder="Password"
            />
        </div>
      
        <button type="submit" onClick={this.create_admin} className="btn btn-primary">
            Submit
        </button>

            <br />
            <br />

        <table class="table">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Actions</th>
            </tr>
        </thead>
        <tbody>

            {this.state.users.map((user) =>{
                return  <tr>
                <th scope="row">{user._id}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                    <button onClick={()=>this.delete_admin(user._id)} className='btn btn-danger'>Delete</button>
                    <a href={'/admin/admin/edit/'+user._id} className='btn btn-primary'>Edit</a>
    
                </td>
                </tr>
            })}
           
        
            </tbody>
            </table>

        </div>
        
            
            </>
        )
    }
}