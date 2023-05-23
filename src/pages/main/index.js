import React from 'react'

import About from '../../components/main/about'
import Navbar from '../../components/main/navbar'
import Welcome from '../../components/main/welcome'
import Portfolios from '../../components/main/portfolios'
import Footer from '../../components/main/footer'

import Contact from '../../components/main/contact'
import { base_url } from '../../base_url'
import axios from 'axios'
export default class Main extends React.Component {
    state = {
        email:'',
        name:'',
        title:'',
        description:'',
        cv_file:'',
        profile_image:'',
        live_in:'',
        facebook:'',
        twitter:'',
        linked_in:'',
        gender:'',
        age:'',
        skills:[],
        educations:[],
        experiences:[],
        portfolios:[]
        
    }

    get_profile =()=>{
        axios.get(base_url+'apis/get_profile_info')
        .then(res=>{
            const {email,name,title,description,profile_image,live_in,gender,age,cv_file,linked_in,facebook,twitter} = res.data.data
            console.log(res.data.data)
            this.setState({email,name,title,description,profile_image,live_in,gender,age,cv_file,linked_in,facebook,twitter})
        })
        .catch(err=>{
            console.log(err)
        })
    }
    get_all_skills = ()=>{
        axios.get(base_url+'apis/get_all_skills')
        .then(res=>{
            this.setState({skills:res.data.data})
        })
        .catch(err=>{
            console.log(err)
        })
    }

    get_educations = ()=>{
        axios.get(base_url+'apis/get_all_educations')
        .then(res=>{
            this.setState({educations:res.data.data})
        })
        .catch(err=>{
            console.log(err)
        })
    }

    get_experiences = ()=>{
        axios.get(base_url+'apis/get_all_experiences')
        .then(res=>{
            this.setState({experiences:res.data.data})
        })
        .catch(err=>{
            console.log(err)
        })
    }

    get_limited_portfolios = ()=>{
        axios.get(base_url+'apis/get_limited_portfolios?limit=6')
        .then(res=>{
            console.log(res.data.data)
            this.setState({portfolios:res.data.data})
        })
        .catch(err=>{
            console.log(err)
        })
    }
    componentDidMount(){
        this.get_profile()
        this.get_all_skills()
        this.get_educations()
        this.get_experiences()
        this.get_limited_portfolios()
    }
    render(){
        return (
            <>
             <div
            className="vg-page page-home"
            id="home"
            style={{ backgroundImage: "url(../assets/img/bg_image_1.jpg)" }}
          >
            <Navbar />
            <Welcome name={this.state.name} title={this.state.title}/>
            </div>


            <About data={{
                  email:this.state.email,
                  name:this.state.name,
                  title:this.state.title,
                  description:this.state.description,
                  cv_file:base_url+'uploads/'+this.state.cv_file,
                  profile_image:base_url+'uploads/'+this.state.profile_image,
                  live_in:this.state.live_in,
                  gender:this.state.gender,
                  age:this.state.age
                 
            }} skills={this.state.skills} experiences={this.state.experiences} educations={this.state.educations}/>
            <Portfolios  portfolios={this.state.portfolios} />
            <Contact />
            <Footer live_in={this.state.live_in} email={this.state.email} social_media={{
                facebook:this.state.facebook,
                linked_in:this.state.linked_in,
                twitter:this.state.twitter
            }}/>
            </>
        )
    }
}