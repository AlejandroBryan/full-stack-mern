
import React, { Component } from 'react'
import axios from 'axios'





const Blogs =({image, title, body, created})=>{

    return (
        
        <div className="ui main text container">
            <div className="ui huge header">{title}</div>
         <div className="ui top attached segment">
             <div className="item">
                <img className="ui centered rounded image" src={image} alt="blog" />
                 <div className="content">
                     <div className="meta">
                         <span>{created}</span>
                     </div>
                      <div className="description">
                         <p>{body}</p>
                      </div>
                 </div>
             </div>

         </div>
         </div>


    )  
}



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
   

    render(){
        
       const {blog} = this.state

        return(
            
            <>  
            {blog.map(blogs =>{ 
                return(<Blogs
                    key={blogs.id}
                    title={blogs.title}
                    image={blogs.image}
                    body={blogs.body}
                    created={blogs.created}
                   />)
                 }
                 
                 )
                }      
             </>
        )
    }

}
