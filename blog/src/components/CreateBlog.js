
import React, { Component } from 'react'



export default class CreateBlog extends Component{
    constructor(props){
      super()
      this.onChangeBody = this.onChangeBody.bind(this)
      this.onChangeImage = this.onChangeImage.bind(this)
      this.onChangeTitle = this.onChangeTitle.bind(this)
      this.onSubmit = this.onSubmit.bind(this)
      
      this.state = {
          title: '', 
          image:'',
          body: '',
      }
    
      
    } 

    onChangeTitle(e){
        this.setState({title: e.target.value})
    }
    onChangeImage(e){
        this.setState({image: e.target.value})
    }
    onChangeBody(e){
        this.setState({body: e.target.value})
    }
    
onSubmit(e){
    e.preventDefault()
    const blog = {
        title: this.state.title,
        body: this.state.body,
        image: this.state.image
    }

    console.log(blog)


    const options = {
        method: 'POST',
        credentials: 'origin',
        headers:{'Content-Type': 'application/json'},
    }

    fetch('https://localhost:3031/blogs/new/', options, blog)
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