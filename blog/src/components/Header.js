import React, { Component } from 'react'
import {Link} from 'react-router-dom'



export default class Header extends Component {
  render() {
    return (

      <nav className="ui fixed inverted menu" style={{padding: '10px'}}>
      <div className="ui container">
        <div className="header item"><i className="code icon"></i>Blog Site</div>
        <Link to="/blogs" className="item">Home</Link>
        <Link to="/blogs/new" className="item">New Post</Link>
      </div>
    </nav>
      
    )
    
  }
}