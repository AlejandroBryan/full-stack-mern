import React from 'react';
import 'semantic-ui-css/semantic.min.css';

const Blog =({id, body, image, title, date})=>{
    return (
        <div className="ui main text container">
    <div className="ui huge header">Blog Site</div>
 <div className="ui top attached segment">
<div className="ui divided items">
  <div className="item">
     <div className="image">
       <img src="{image}" alt="blog articles"/>
     </div>
     <div className="content">
       <h2 className="header">{title}</h2>
       <div className="meta">
         <span className="cinema">{date}</span>
       </div>
       <div className="description">
         <p>{body.substring(0, 100)}</p>
       </div>
       <div className="extra">
         <a href="/blogs/_id/edit" className="ui floated basic violet button">
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

export default Blog