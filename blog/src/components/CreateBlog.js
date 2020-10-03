
import React, { Component } from 'react'
import axios from 'axios'



export default class CreateBlog extends Component{
    constructor(){
      super()

      this.state = {
          title: '', 
          image:'',
          body: '',
      }
    
      
    } 

    onChangeTitle = e =>{
        this.setState({title: e.target.value})
    }
    onChangeImage = e =>{
        this.setState({image: e.target.value})
    }
    onChangeBody = e =>{
        this.setState({body: e.target.value})
    }
    
onSubmit = e =>{
    e.preventDefault()
    const blog = {
        title: this.state.title,
        body: this.state.body,
        image: this.state.image
    }

    console.log(blog)

    axios.post('http://localhost:3031/blogs', blog)
    .then(response => console.log(response.data))


    window.location = '/';
}

render(){
    return(
        <div className="ui container">
           <h3 style={{textAlign: 'center', fontSize:'30px'}}>Create a new Blog</h3>
          <form onSubmit={this.onSubmit} className="ui form">

         <div className="field">
           <label>Title</label>
           <input type="text" 
           value={this.state.title}
           onChange={this.onChangeTitle}
              />
              </div>
             <div className="field">
           <label>Image</label>
           <input type="text" 
           value={this.state.image}
           onChange={this.onChangeImage}
              />

             </div>
             <div className="field">
             <label>Body</label>
             <textarea 
             value={this.state.body}
             onChange={this.onChangeBody}
             />
               </div>


               <div>
               <input type="submit" value="Save" className="fluid ui button"/>
               </div>
           
           </form>
      </div>


    )
    
    
}


}