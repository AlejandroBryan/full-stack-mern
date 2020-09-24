import React from 'react'

const Show =(title, body, image, created)=>{
    return (
        
        <div class="ui main text container">
            <div class="ui huge header">{title}</div>
         <div class="ui top attached segment">
             <div class="item">
                <img class="ui centered rounded image" src={image}/>
                 <div className="content">
                     <div className="meta">
                         <span>{created}</span>
                     </div>
                      <div class="description">
                         <p>{body}</p>
                      </div>
                 </div>
             </div>

         </div>
         </div>


    )  
}
export default Show