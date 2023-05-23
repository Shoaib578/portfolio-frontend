import React from 'react'
import Navbar from '../../components/admin/navbar'
import { base_url } from '../../base_url'
import axios from 'axios'
export default class Experience extends React.Component {
    state = {
        date:'',
        title:'',
        at:'',
        description:'',
        experiences:[]
    }

    insert_experience = ()=>{
        let formData = new FormData()
        formData.append('date',this.state.date)
        formData.append('title',this.state.title)
        formData.append('at',this.state.at)
        formData.append('description',this.state.description)
        axios.post(base_url+'apis/insert_experience',formData)
        .then(res=>{
            if(res.data.is_inserted){
                alert("Inserted Successfully")
                this.get_all_experiences()
            }else{
                alert(res.data.status)
            }
        })
        .catch(err=>{
            alert(err.message)
        })
        
    }


    get_all_experiences = ()=>{
        axios.get(base_url+'apis/get_all_experiences')
        .then(res=>{
            this.setState({experiences:res.data.data})
        })
        .catch(err=>{
           
            console.log(err)
        })
    }

    delete_experience = (experience_id)=>{
        axios.get(base_url+'apis/experience/delete?experience_id='+experience_id)
        .then(res=>{
            if(res.data.is_deleted){
                this.get_all_experiences()
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
        this.get_all_experiences()
    }

    render(){
        return(
            <>
             
            <Navbar />
               
               <div style={{width:'50%',float:'right',marginRight:'20%',marginTop:'8%',marginBottom:'5%'}}> 

            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Date</label>
                <input
                type="date"
                className="form-control"
                onChange={(val)=>this.setState({date:val.target.value})}
                placeholder="Enter Date"
                />
               
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Title</label>
                <input
                type="text"
                className="form-control"
                onChange={(val)=>this.setState({title:val.target.value})}
              
                placeholder="Title"
                />

            </div>


            <div className="form-group">
                <label htmlFor="exampleInputPassword1">At</label>
                <input
                type="text"
                className="form-control"
                onChange={(val)=>this.setState({at:val.target.value})}
              
                placeholder="At"
                />

            </div>



            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Description</label>
                <textarea
                type="text"
                className="form-control"
                onChange={(val)=>this.setState({description:val.target.value})}
              
                placeholder="Description..."
                />

            </div>


             <button type="submit" onClick={this.insert_experience} className="btn btn-primary">
                Add
            </button>


            <br />
            <br />

            <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Date</th>
                <th scope="col">Title</th>
                <th scope="col">At</th>

                <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
            {this.state.experiences.map(data=>{
                    return <tr>
                    <th scope="row">{data._id}</th>
                    <td>{data.date}</td>
                    <td>{data.title}</td>
                    <td>{data.at}</td>
    
                    <td>
                        <button onClick={()=>this.delete_experience(data._id)} className='btn btn-danger'>Delete</button>
                        
    
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