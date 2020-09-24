
import React, { Component } from 'react'
import axios from 'axios'
import Blog from './Blog'





export default class BlogList extends Component{
constructor(){
    super()

    this.state={blogs:[]}
  

   }

   componentDidMount(){
    const options = {
        url: 'http://localhost:3031/blogs',
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=UTF-8'
        },
        data: JSON.stringify()
       
        
    }
    axios(options)
    .then(response => this.setState({blogs:response.data}))
    .catch(err => console.error(err.message))
    }
   

    render(){

        return(
            <>
            
            <h1>Welcome to my Blogs</h1>
            {
           this.state.blogs.map(blog =>{ 
                return(
            <Blog
            key={blog._id}
            title={blog.title}
            image={blog.image}
            body={blog.body}
            created={blog.created}
            />
             ) 
                 })
                }
             </>

        )
}







}