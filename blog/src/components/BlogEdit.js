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
      conponentDidMount() {

        const options = {
            url: 'http://localhost:3031/blogs/edit/',
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json;charset=UTF-8'
            },
            data: JSON.stringify()
           
            
        }
       axios(options+this.props.match.params.id)
        .then(blogs => console.log(blogs))
  
      }
  
      onChangeTitle= e =>{
          this.setState({title: e.target.value})
      }
      onChangeImage= e =>{
          this.setState({image: e.target.value})
      }
      onChangeBody = e =>{
          this.setState({body: e.target.value})
      }

  
  onSubmit= e =>{
      e.preventDefault()
  
      const blog= {
          title: this.state.title,
          body: this.state.body,
          image: this.state.image
      }
  
      console.log(blog)
  
      axios.post('http://localhost:3031/blogs/edit'+this.state.match.params.id)
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