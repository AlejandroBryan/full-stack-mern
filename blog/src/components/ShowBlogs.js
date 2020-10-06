import {Link} from 'react-router-dom'
import React, { Component } from 'react'
import axios from 'axios'


export default class ShowBlogs extends Component{
constructor(){
    super();

    this.state = {blog:[]}

   }

   componentDidMount(){ 
    const {match : {params} } = this.props

    axios.get(`http://localhost:3031/blogs/${params.id}`)
    .then(response => this.setState({blog: response.data}))
    .catch(err => console.error(err.message))

    }

    handleDelete = e =>{
        const {match : {params} } = this.props

        axios.delete(`http://localhost:3031/blogs/${params.id}`)
          .then(() => {
            console.log('user deleted');
          });
      }

    render(){
        
       const {blog} = this.state
       console.log(blog)
            
        return(
            <div className="ui main text container">
            <div className="ui huge header">{blog.title}</div>
                 <div className="ui top attached segment">
                     <div className="item">
                        <img className="ui centered rounded image" src={blog.image} alt="blog" />
                         <div className="content">
                             <div className="meta">
                                 <span>{blog.created}</span>
                             </div>
                              <div className="description">
                                 <p>{blog.body}</p>
                              </div>
                         </div>
                     </div>
                     <button class="ui green button">
                     <Link to="/blogs/id/edit">
                     Edit
                     </Link>
                     </button>

                     <button class="ui orange button">
                     <Link to="/blogs/id/delete">
                     Delete
                     </Link>
                    
                     </button>
        
                 </div>
                 </div> ) 
                 
                }     
 

}