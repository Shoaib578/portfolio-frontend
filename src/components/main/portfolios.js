import React  from "react"
import { Link } from "react-router-dom"
import { base_url } from "../../base_url"

export default class Portfolios extends React.Component {
    render(){
        return(
            <>
  {/* Portfolio page */}
  <div className="vg-page page-portfolio" id="portfolio">
    <div className="container">
      <div className="text-center wow fadeInUp">
        <div className="badge badge-subhead">Portfolio</div>
      </div>
      <h1 className="text-center fw-normal wow fadeInUp">See my work</h1>
    
      <div className="gridder my-3">



       {this.props.portfolios?.map((portfolio,index)=>{
        return <div key={index} className="grid-item apps wow zoomIn">
        <div
          className="img-place"
          data-src={base_url+'uploads/'+portfolio.picture}
          data-fancybox=""
          data-caption="<h5 class='fg-theme'>Mobile Travel App</h5> <p>Travel, Discovery</p>"
        >
          <img src={base_url+'uploads/'+portfolio.picture} alt="" style={{height:300}}/>
          <div className="img-caption">
            <h5 className="fg-theme">{portfolio.title}</h5>
            <p>{portfolio.category}</p>
          </div>
        </div>
      
     
      </div>
       })} 


      
     
      </div>
     
    </div>
  </div>

  <br />
      <br />

      {/* End gridder */}
      <div className="text-center wow fadeInUp">
        <Link to={'/portfolios'} className="btn btn-theme">
          Load More
        </Link>
      </div>
  {/* End Portfolio page */}
</>

        )
    }
}
