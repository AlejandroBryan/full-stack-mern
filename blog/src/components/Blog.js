
import React from 'react';
import { withRouter} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';



const Blog =({title, body, created, image, id}) =>{
  
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
         <span className="cinema">{created.substring(0, 10)}</span>
       </div>
       <div className="description">
         <p>{body.substring(0, 245)}.....</p>
       </div>
       <div className="extra">
       
       
        <a href={`/blogs/${id}`} className="ui floated basic violet button" >
           Read More 
           <i className="right chevron icon"></i>
           </a>
           
       </div>
     </div>
   </div>
</div>
</div>
 
</div>
    )

}

export default withRouter(Blog)