import React from 'react'
import Navbar from '../../components/admin/navbar'
import Axios from 'axios'
import { base_url } from '../../base_url'
export default class Education extends React.Component {
    state = {
        date:'',
        title:'',
        at:'',
        description:'',
        educations:[]
    }

    insert_education = ()=>{
        let formData = new FormData()
        formData.append('date',this.state.date)
        formData.append('title',this.state.title)
        formData.append('at',this.state.at)
        formData.append('description',this.state.description)
        Axios.post(base_url+'apis/insert_education',formData)
        .then(res=>{
            if(res.data.is_inserted){
                alert("Inserted successfully")
                this.get_all_educations()
            }else{
                alert(res.data.status)
            }
        })
        .catch(err=>{
            console.log(err)
            alert(err.message)
        })
        
    }


    get_all_educations = ()=>{
        Axios.get(base_url+'apis/get_all_educations')
        .then(res=>{
            this.setState({educations:res.data.data})
        })
        .catch(err=>{
            console.log(err)
        })
    }

    delete_education = (education_id)=>{
        Axios.get(base_url+'apis/education/delete?education_id='+education_id)
        .then(res=>{
            if(res.data.is_deleted){
                this.get_all_educations()
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
        this.get_all_educations()
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


             <button onClick={this.insert_education} type="submit" className="btn btn-primary">
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
                {this.state.educations.map(data=>{
                    return <tr>
                    <th scope="row">{data._id}</th>
                    <td>{data.date}</td>
                    <td>{data.title}</td>
                    <td>{data.at}</td>
    
                    <td>
                        <button onClick={()=>this.delete_education(data._id)} className='btn btn-danger'>Delete</button>
                        
    
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