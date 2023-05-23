import React from 'react'
import Navbar from '../../components/admin/navbar'
import axios from 'axios'
import { base_url } from '../../base_url'
export default class Skills extends React.Component{
    state = {
        skills:[],
        name:'',
        expertise_level:''
    }

    insert_skill = ()=>{
        let formData = new FormData();
        formData.append('name',this.state.name)
        formData.append('expertise_level',this.state.expertise_level)

        axios.post(base_url+'apis/insert_skills',formData)
        .then(res=>{
            if(res.data.is_inserted){
                alert("Inserted Successfully")
                this.get_all_skills()

            }else{
                alert(res.data.status)
            }
        })
        .catch(err=>{
            alert(err.message)
            console.log(err)

        })
    }

    get_all_skills = ()=>{
        axios.get(base_url+'apis/get_all_skills')
        .then(res=>{

            console.log(res.data.data)
            this.setState({skills:res.data.data})
        })
        .catch(err=>{
            
            console.log(err)
        })
    }



    delete_skill = (skill_id)=>{
        axios.get(base_url+'apis/skill/delete?skill_id='+skill_id)
        .then(res=>{
            if(res.data.is_deleted){
                this.get_all_skills()
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
        this.get_all_skills()
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
                <label htmlFor="exampleInputEmail1">Expertise Level in percentage</label>
                <input
                type="number"
                className="form-control"
                onChange={(val)=>this.setState({expertise_level:val.target.value})}
                placeholder="Enter Expertise Level in Percentage"
                />
            
                </div>
       
      
            <button type="submit" onClick={this.insert_skill} className="btn btn-primary">
                Submit
            </button>

            <br />
            <br />

        <table class="table">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Expertise Level</th>
            <th scope="col">Actions</th>
            </tr>
        </thead>
        <tbody>
            {this.state.skills.map(skill=>{
            return <tr>
            <th scope="row">{skill._id}</th>
            <td>{skill.name}</td>
            <td>{skill.expertise_level}</td>
            <td>
                <button onClick={()=>this.delete_skill(skill._id)} className='btn btn-danger'>Delete</button>
               
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