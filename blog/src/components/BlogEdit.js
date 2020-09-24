import React, { Component } from 'react'
import axios from 'axios'

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
      conponentDidMount() {
       axios('https://localhost:3031/blogs/:id/edit'+this.props.match.params.id, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(blogs => console.log(blogs))
  
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
  
      const blog= {
          title: this.state.title,
          body: this.state.body,
          image: this.state.image
      }
  
      console.log(blog)
  
      fetch('http://localhost:3031/blogs/edit/'+this.props.match.params.id)
      .then(res => res.json())
      .then(blogs => console.log(blogs))
  
      window.location = '/'
  }
render(){
    return(
        <div>
           <h3>Create a new Blog</h3>
          <form onSubmit={this.onSubmit} className="ui form">

         <div className="field">
           <label>title</label>
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
             <label>body</label>
             <textarea value={this.state.body}
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