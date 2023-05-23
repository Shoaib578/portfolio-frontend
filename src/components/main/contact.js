import React from 'react'
import axios from 'axios'
import { base_url } from '../../base_url'
export default class Contact extends React.Component{
  state = {
    email:"",
    subject:"",
    body:"",
    name:""
  }

  validate = ()=>{
    if(this.state.email.length<1){
      alert("Please enter a valid email")
      return false
    }
    if(this.state.subject.length<1){
      alert("Please enter subject")
      return false
    }

    if(this.state.body.length<1){
      alert("Please enter body")
      return false
    }


    return true
  }

  send_mail = ()=>{
    const validate = this.validate()
    if(validate){

    let formData = new FormData()
    formData.append("from",this.state.email)
    formData.append("name",this.state.name)

    formData.append("subject",this.state.subject)
    formData.append("body",this.state.body)
    axios.post(base_url+'contact',formData)
    .then(res=>{
      if(res.data.sent){
        alert("Email Sent Successfully")
      }else{
        alert("Something Went Wrong")

      }
    })
    .catch(err=>{
      alert(err.message)
    })
  }

  }
  render(){
        return(
            <>
  {/*Section: Contact v.2*/}
  <section className="mb-4" style={{}} id="contact">
    {/*Section heading*/}
    <h2 className="h1-responsive font-weight-bold text-center my-4">
      Contact us
    </h2>
    {/*Section description*/}
    <div
      className="row"
      style={{
        width: "80%",
        margin: "0 auto",
        display: "flex",
        justifyContent: "center"
      }}
    >
      {/*Grid column*/}
      <div className="col-md-9 mb-md-0 mb-5">
        
          {/*Grid row*/}
          <div className="row">
            {/*Grid column*/}
            <div className="col-md-6">
              <div className="md-form mb-0">
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={(val)=>this.setState({name:val.target.value})}
                  className="form-control"
                />
                <label htmlFor="name" className="">
                  Your name
                </label>
              </div>
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-md-6">
              <div className="md-form mb-0">
                <input
                  type="text"
                  id="email"
                  onChange={(val)=>this.setState({email:val.target.value})}

                  name="email"
                  className="form-control"
                />
                <label htmlFor="email" className="">
                  Your email
                </label>
              </div>
            </div>
            {/*Grid column*/}
          </div>
          {/*Grid row*/}
          {/*Grid row*/}
          <div className="row">
            <div className="col-md-12">
              <div className="md-form mb-0">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  onChange={(val)=>this.setState({subject:val.target.value})}

                  className="form-control"
                />
                <label htmlFor="subject" className="">
                  Subject
                </label>
              </div>
            </div>
          </div>
          {/*Grid row*/}
          {/*Grid row*/}
          <div className="row">
            {/*Grid column*/}
            <div className="col-md-12">
              <div className="md-form">
                <textarea
                  type="text"
                  id="message"
                  name="message"
                  onChange={(val)=>this.setState({body:val.target.value})}
                  rows={2}
                  className="form-control md-textarea"
                  defaultValue={""}
                />
                <label htmlFor="message">Your message</label>
              </div>
            </div>
          </div>
          {/*Grid row*/}
        
        <div className="text-center text-md-left">
          <a onClick={this.send_mail} className="btn btn-theme mt-3 wow fadeInUp ml-1">Send</a>
        </div>
        <div className="status" />
      </div>
      {/*Grid column*/}
    </div>
  </section>
</>

        )
    }
}