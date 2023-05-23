import React from 'react'
import { base_url } from '../../base_url'
import axios from 'axios'
let user_id = window.location.pathname.split('/')[4]
export default class EditAdmin extends React.Component{
    state = {
        email:"",
        password:"",
        name:"",
      
    }

    get_admin_details = ()=>{
        console.log(user_id)
        axios.get(base_url+'apis/get_user_by_id?user_id='+user_id)
        .then(res=>{
            const {email,password,name} = res.data.data
            console.log(res.data.data)
            console.log(email)

            this.setState({email,password,name});
        })
        .catch(err=>{
            console.log(err)
        })
    }

    update_admin = ()=>{
        let formData = new FormData()
        formData.append('user_id',user_id)
        formData.append('name',this.state.name)
        formData.append('email',this.state.email)
        formData.append('password',this.state.password)

        axios.post(base_url+'apis/user/update',formData)
        .then(res=>{
            if(res.data.is_updated){
                this.get_admin_details()
                alert("Updated Successfully!")
            }else{
                alert(res.data.status)
            }
        })
        .catch(err=>{
            console.log(err)
            alert(err.message)
        })
    }

    componentDidMount(){
        this.get_admin_details()
    }
    render(){
        return  <div style={{width:'50%',float:'right',marginRight:'20%',marginTop:'8%',marginBottom:'5%'}}> 
        <div className="form-group">
             <label htmlFor="exampleInputEmail1">Name</label>
             <input
             type="text"
             className="form-control"
             value={this.state.name}
             onChange={(val)=>this.setState({name:val.target.value})}
             placeholder="Enter Name"
             />
           
         </div>


         <div className="form-group">
         <label htmlFor="exampleInputEmail1">Email address</label>
         <input
         type="email"
         onChange={(val)=>this.setState({email:val.target.value})}
         value={this.state.email}

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
     value={this.state.password}
     
     placeholder="Password"
     />
 </div>

 <button type="submit" onClick={this.update_admin} className="btn btn-primary">
     Submit
 </button>
</div>
    }
}