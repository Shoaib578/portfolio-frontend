import React from 'react'

export default class Footer extends React.Component {
    render(){
        return(
            <>
  {/* Footer */}
  <div className="vg-footer">
    <h1 className="text-center">Portfolio</h1>
    <div className="container">
      <div className="row">
        <div className="col-lg-4 py-3">
          <div className="footer-info">
            <p>Where to find me</p>
            <hr className="divider" />
            <p className="fs-large fg-white">
             {this.props?.live_in}
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 py-3">
          <div className="float-lg-right">
            <p>Follow me</p>
            <hr className="divider" />
            <ul className="list-unstyled">
              <li>
                <a href={this.props.social_media.facebook}  target="_blank">Facebook</a>
              </li>
              <li>
                <a href={this.props.social_media.twitter}  target="_blank">Twitter</a>
              </li>
              <li>
                <a href={this.props.social_media.linked_in}  target="_blank">Linked in</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 py-3">
          <div className="float-lg-right">
            <p>Contact me</p>
            <hr className="divider" />
            <ul className="list-unstyled">
              <li>{this.props?.email}</li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>{" "}
  {/* End footer */}
</>

        )
    }
}