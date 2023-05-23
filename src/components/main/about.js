import React from 'react'
import { base_url } from '../../base_url'

export default class About extends React.Component {

   
    render(){
        return (
            <>
  <div className="vg-page page-about" id="about">
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-4 py-3">
          <div className="img-place wow fadeInUp">
            <img src={this.props.data.profile_image} alt="" />
          </div>
        </div>
        <div className="col-lg-6 offset-lg-1 wow fadeInRight">
          <h1 className="fw-light">{this.props.data.name}</h1>
          <h5 className="fg-theme mb-3">{this.props.data.title}</h5>
          <p className="text-muted">
            {this.props.data.description}
          </p>
          <ul className="theme-list">
           
            <li>
              <b>Lives In:</b> {this.props.data.live_in}
            </li>
            <li>
              <b>Age:</b> {this.props.data.age}
            </li>
            <li>
              <b>Gender:</b> {this.props.data.gender}
            </li>
          </ul>
          <a href={this.props.data.cv_file} target="_blank" className="btn btn-theme-outline">Download CV</a>
        </div>
      </div>
    </div>
    <div className="container py-5">
      <h1 className="text-center fw-normal wow fadeIn">My Skills</h1>
      <div className="row py-3">
        <div className="col-md-6">
          <div className="px-lg-3">
            <h4 className="wow fadeInUp">skills</h4>


            {this.props.skills?.map((skill,index)=>{
                return <div key={index} className="progress-wrapper wow fadeInUp">
                <span className="caption">{skill.name}</span>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${skill.expertise_level}%` }}
                    aria-valuenow={skill.expertise_level}
                    aria-valuemin={0}
                    aria-valuemax={skill.expertise_level}
                  >
                    {skill.expertise_level}
                  </div>
                </div>
                </div>
            })}
           


         
          
          
          </div>
        </div>
       
      </div>
    </div>
    <div className="container pt-5">
      <div className="row">
        <div className="col-md-6 wow fadeInRight">
          <h2 className="fw-normal">Education</h2>
          <ul className="timeline mt-4 pr-md-5">


            {this.props.educations?.map((education,index)=>{
              return  <li key={index}>
              <div className="title">{education.date}</div>
              <div className="details">
                <h5>{education.title}</h5>
                <small className="fg-theme">{education.at}</small>
                <p>
                 {education.description}
                </p>
              </div>
            </li>
            })}
           
       
      
          </ul>
        </div>
        <div className="col-md-6 wow fadeInRight" data-wow-delay="200ms">
          <h2 className="fw-normal">Experience</h2>
          <ul className="timeline mt-4 pr-md-5">

            {this.props.experiences?.map((experience,index)=>{
              return  <li key={index}>
              <div className="title">{experience.date} - Current</div>
              <div className="details">
                <h5>{experience.title}</h5>
                <small className="fg-theme">{experience.at}</small>
                <p>
                 {experience.description}
                </p>
              </div>
            </li>
            })}
           
       
          </ul>
        </div>
      </div>
    </div>
  </div>
  
  <div className="vg-page page-service">
    <div className="container">
      <div className="text-center wow fadeInUp">
        <div className="badge badge-subhead">Service</div>
      </div>
      <h1 className="fw-normal text-center wow fadeInUp">What can i do?</h1>
      <div className="row mt-5">
        <div className="col-md-6 col-lg-4 col-xl-3">
          <div className="card card-service wow fadeInUp">
            <div className="icon">
              <span className="ti-paint-bucket" />
            </div>
            <div className="caption">
              <h4 className="fg-theme">Web Design</h4>
              <p>
                There are many variations of passages of Lorem Ipsum available
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3">
          <div className="card card-service wow fadeInUp">
            <div className="icon">
              <span className="ti-search" />
            </div>
            <div className="caption">
              <h4 className="fg-theme">SEO</h4>
              <p>
                There are many variations of passages of Lorem Ipsum available
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3">
          <div className="card card-service wow fadeInUp">
            <div className="icon">
              <span className="ti-vector" />
            </div>
            <div className="caption">
              <h4 className="fg-theme">UI/UX Design</h4>
              <p>
                There are many variations of passages of Lorem Ipsum available
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3">
          <div className="card card-service wow fadeInUp">
            <div className="icon">
              <span className="ti-desktop" />
            </div>
            <div className="caption">
              <h4 className="fg-theme">Web Development</h4>
              <p>
                There are many variations of passages of Lorem Ipsum available
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

        )
    }
}