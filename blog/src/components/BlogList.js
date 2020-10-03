
import React, { Component } from 'react'
import axios from 'axios'
import Blog from './Blog'


export default class BlogList extends Component{
constructor(){
    super()

    this.state={blogs:[]}
  

   }

   componentDidMount(){

    axios.get('http://localhost:3031/blogs/')
    .then(response => this.setState({blogs:response.data}))
    .catch(err => console.error(err.message))
    }
   

    render(){

        return(
            
            <>  
            <h1>Welcome to my Blogs</h1>
            {this.state.blogs.map(blog =>{ 
                return(<Blog
                    key={blog._id}
                    id={blog._id}
                    title={blog.title}
                    image={blog.image}
                    body={blog.body}
                    created={blog.created}
                   />)
                 })
                }      
             </>
        )
    }

}