import React, { Component } from 'react'
import {Link} from 'react-router-dom'


export default class Footer extends Component{
render(){

    return (
        <footer className="ui grid centered" style={{
         width:'100%',
          padding: '10px',
          margin: '60px 0 0'
          
        
        }}>
        <div className="ui container">
        <Link to="/blogs">Home</Link>
        <p className="sixteen wide" style={{}}>@copyright, 2020</p>
        </div>
        </footer>


    )
}


}
