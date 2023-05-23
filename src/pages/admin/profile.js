import React from 'react'

import Sidebar from '../../components/admin/sidebar'
import Navbar from '../../components/admin/navbar'
import axios from 'axios'
import { base_url } from '../../base_url'
export default class Profile extends React.Component {
    state = {
        email:'',
        name:'',
        title:'',
        description:'',
        cv_file:'',
        profile_image:'',
        live_in:'',
        gender:'',
        database_profile_image:'',
        database_cv_file:'',
        age:0,
        profile_id :'',
        facebook:'',
        twitter:'',
        linked_in:''
    }

    get_profile =()=>{
        axios.get(base_url+'apis/get_profile_info')
        .then(res=>{
            const {email,name,title,description,profile_image,live_in,gender,age,profile_id,linked_in,facebook,twitter} = res.data.data
            let check_age = age != undefined ? age:0
            this.setState({email,name,title,description,database_profile_image:profile_image,live_in,gender,age:check_age,profile_id,facebook,linked_in,twitter})
        })
        .catch(err=>{
            console.log(err)
        })
    }

    save_changes = ()=>{
        let formData = new FormData()
        formData.append('profile_id',this.state.profile_id)

        formData.append('email',this.state.email)
        formData.append('name',this.state.name)
        formData.append('title',this.state.title)
        formData.append('live_in',this.state.live_in)
        formData.append('facebook',this.state.facebook)
        formData.append('twitter',this.state.twitter)
        formData.append('linked_in',this.state.linked_in)

        formData.append('description',this.state.description)
        formData.append('cv_file',this.state.cv_file)
        formData.append('profile_image',this.state.profile_image)
        formData.append('age',this.state.age)
        formData.append('gender',this.state.gender)

        axios.post(base_url+'apis/update_profile',formData)
        .then(res=>{
            if(res.data.is_updated){
                alert("Updated profile successfully")
                this.get_profile()
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
        this.get_profile()
    }
    render(){
        return(
            <>
            <Navbar />
               
               <div style={{width:'50%',float:'right',marginRight:'20%',marginTop:'8%',marginBottom:'5%'}}> 

            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address(Email on which user can send you email)</label>
                <input
                type="email"
                className="form-control"
                onChange={val=>this.setState({email:val.target.value})}
                value={this.state.email}
                placeholder="Enter email"
                />
               
            </div>
           

            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Profile Image</label>
                <img src={base_url+'uploads/'+this.state.database_profile_image} style={{width:50,height:50,borderRadius:100}}/>
                <input
                type="file"
                className="form-control"
                onChange={(val)=>this.setState({profile_image:val.target.files[0]})}
                 
               
                placeholder="Select your Profile Image"
                />
               
            </div>


            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Name</label>
                <input
                type="text"
                className="form-control"
                value={this.state.name}
                onChange={val=>this.setState({name:val.target.value})}
               
                placeholder="Enter Name"
                />
               
            </div>



            
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Title</label>
                <input
                type="text"
                className="form-control"
                onChange={val=>this.setState({title:val.target.value})}
                value={this.state.title}
               
                placeholder="Enter title"
                />
               
            </div>



            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Live in</label>
                <input
                type="text"
                className="form-control"
                onChange={val=>this.setState({live_in:val.target.value})}
                value={this.state.live_in}
               
                placeholder="Enter Address"
                />
               
            </div>



            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Gender</label>
                <select onChange={val=>this.setState({gender:val.target.value})}
                value={this.state.gender} className='form-control'>
                    <option value=''>Select Your gender</option>

                    <option value={'Male'}>Male</option>
                    <option value={'Female'}>Female</option>

                </select>
            </div>



            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Age</label>
                <input
                type="number"
                onChange={val=>this.setState({age:val.target.value})}
                value={this.state.age}
                className="form-control"
                
               
                placeholder="Enter Age"
                />
               
            </div>


            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Twitter</label>
                <input
                type="text"
                className="form-control"
                onChange={val=>this.setState({twitter:val.target.value})}
                value={this.state.twitter}
               
                placeholder="Enter Twitter Account Link"
                />
               
            </div>


            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Linkedin</label>
                <input
                type="text"
                className="form-control"
                onChange={val=>this.setState({linked_in:val.target.value})}
                value={this.state.linked_in}
               
                placeholder="Enter Linkedin Account Link"
                />
               
            </div>

            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Facebook</label>
                <input
                type="text"
                className="form-control"
                onChange={val=>this.setState({facebook:val.target.value})}
                value={this.state.facebook}
               
                placeholder="Enter Facebook Account Link"
                />
               
            </div>
            
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">CV</label>
                <input
                type="file"
                className="form-control"
                onChange={(val)=>this.setState({cv_file:val.target.files[0]})}
                
               
                placeholder="Select your CV"
                />
               
            </div>




            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Description</label>
                
                <textarea onChange={val=>this.setState({description:val.target.value})}
                value={this.state.description} className='form-control' placeholder='description....'></textarea>
            </div>
            
            <button type="submit" onClick={this.save_changes} className="btn btn-primary">
                Save Changes
            </button>

            </div>
            </>
        )
    }
}