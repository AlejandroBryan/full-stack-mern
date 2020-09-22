
import React, { Component } from 'react'
import Blog from './Blog'




export default class BlogList extends Component{
constructor(){
    super();

    this.state={blogs:[]}

   }

   componentDidMount(){
       const options = {
        method: 'GET',
        credentials: 'origin',
        headers:{  'Content-Type': 'application/json'}
    }
    fetch('http://localhost:3031/blogs', options)
    .then(res=> this.setState({blogs: res}))
    .catch(err => err)
    }

    render(){

        return(
            <>
            
            <h1>Welcome to my Blogs</h1>
            {
            this.state.blogs.map((blog, i) =>{ 
                return(
            <Blog
            key={blog[i]._id}
            title={blog[i].title}
            body={blog[i].body}
            image={blog[i].image}
            />
             ) 
                 })
                }
             </>

        )
}







}