import  React from 'react'
import axios from 'axios'
import { base_url } from '../../../base_url'

export default class LoadMorePortfolios extends React.Component {
  state = {
    portfolios:[]
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
        return (
            <>
           
            <div className="vg-page page-blog">
    <div className="container">
        <div className="row widget-grid">
        
    
        </div>
    <div className="row post-grid">
      <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>


          {this.state.portfolios?.map((data,index)=>{
            return  <div key={index} className="card ml-4">
            <div className="img-place">
              <img src={base_url+'uploads/'+data.picture} alt="" style={{height:'100%'}}/>
            </div>
            <div className="caption">
              <a href="javascript:void(0)" className="post-category">
                {data.category}
              </a>
              <a href="#" className="post-title">
                {data.title}
              </a>
             
            </div>
          </div>
          })}
       
      
      
      </div>
     
     
     
    </div>
  </div>
</div>

            </>
        )
    }
}