
import React from 'react';
import { withRouter, Link } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';



const Blog =({image, title, body, created, id}, props) =>{
  
    return (
        <div className="ui main text container">
 <div className="ui top attached segment">
<div className="ui divided items">
  <div className="item">
     <div className="image">
       <img src={image} alt="blog articles"/>
     </div>
     <div className="content">
       <h2 className="header">{title}</h2>
       <div className="meta">
         <span className="cinema">{created && created.substring(0, 10)}</span>
       </div>
       <div className="description">
         <p>{body && body.substring(0, 245)}.....</p>
       </div>
       <div className="extra">
       <Link to={`/blogs/${id}`}>
       
        <button className="ui floated basic violet button" >
           Read More 
        
           <i className="right chevron icon"></i>
           
           </button>
           </Link>
       </div>
     </div>
   </div>
</div>
</div>
 
</div>
    )

}

export default withRouter(Blog)