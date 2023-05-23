import React from 'react'
import Navbar from '../../components/admin/navbar'
import axios from 'axios'
import { base_url } from '../../base_url'
export default class Portfolios extends React.Component{
    state = {
        description:'',
        title:'',
        category:'',
        picture:'',
        portfolios:[]
    }


    insert_protfolio = ()=>{
        let formData = new FormData()
        formData.append('picture',this.state.picture)
        formData.append('description',this.state.description)
        formData.append('category',this.state.category)
        formData.append('title',this.state.title)
        axios.post(base_url+'apis/insert_portfolio',formData)
        .then(res=>{
            if(res.data.is_inserted){
               alert("Inserted portfolio successfully")

                this.get_all_portfolios()
            }else{
                alert(res.data.status)
            }
        })
        .catch(err=>{
            console.log(err)
            alert(err.message)
        })
        
    }

    delete_portfolio = (portfolio_id)=>{
        axios.get(base_url+'apis/delete_portfolio?portfolio_id='+portfolio_id)
        .then(res=>{
            if(res.data.is_deleted){
                this.get_all_portfolios()
            }else{
                alert(res.data.status)
            }
        })
        .catch(err=>{
            console.log(err)
            alert(err.message)

        })
    }

    get_all_portfolios = ()=>{
        axios.get(base_url+'apis/get_all_portfolios')
        .then(res=>{
            this.setState({portfolios:res.data.data})
        })
        .catch(err=>{
            console.log(err)
        })
    }

    componentDidMount(){
        this.get_all_portfolios()
    }
    render(){
        return(
            <>
            <Navbar />
              
              <div style={{width:'50%',float:'right',marginRight:'20%',marginTop:'8%',marginBottom:'5%'}}> 
              <div className="form-group">
                   <label htmlFor="exampleInputEmail1">Picture</label>
                   <input
                   type="file"
                   className="form-control"
                    onChange={(val)=>this.setState({picture:val.target.files[0]})}
                   placeholder="Select a picture"
                   />
                 
               </div>


               <div className="form-group">
               <label htmlFor="exampleInputEmail1">Title</label>
               <input
               type="text"
               className="form-control"
               onChange={(val)=>this.setState({title:val.target.value})}
               placeholder="Enter Title"
               />
           
               </div>
       <div className="form-group">
           <label htmlFor="exampleInputPassword1">Category</label>
           <input
           type="text"
           className="form-control"
           onChange={(val)=>this.setState({category:val.target.value})}
          
           placeholder="Category"
           />
       </div>


       <div className="form-group">
           <label htmlFor="exampleInputPassword1">Description</label>
           <textarea
           onChange={(val)=>this.setState({description:val.target.value})}
          
           className="form-control"
          
           placeholder="Description....."
           />
       </div>
     
       <button onClick={this.insert_protfolio} type="submit" className="btn btn-primary">
           Submit
       </button>

           <br />
           <br />

       <table class="table">
       <thead>
           <tr>
           <th scope="col">#</th>
           <th scope="col">Picture</th>
           <th scope="col">Title</th>
           <th scope="col">Category</th>

           <th scope="col">Actions</th>
           </tr>
       </thead>
       <tbody>
          {this.state.portfolios.map(portfolio=>{
            return <tr>
           <th scope="row">{portfolio._id}</th>
           <td>
            <img src={base_url+'uploads/'+portfolio.picture} style={{ width:50,height:50 }}/>
           </td>
           <td>{portfolio.title}</td>
           <td>{portfolio.category}</td>
           <td>
               <button onClick={()=>this.delete_portfolio(portfolio._id)} className='btn btn-danger'>Delete</button>
              
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