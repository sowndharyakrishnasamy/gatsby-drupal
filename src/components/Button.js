import React from "react";

import "../css/main.css"

const Button = (props) =>{
    const link = props.data.uri.split(':');
        if(props.btntype === "primary"){
            return(
             <div className ="primary-btn">
             <a href={link[1]}>{props.data.title}</a>
             <div className="new_arrow lg"><span className="arrow_line"><span></span></span></div>
             </div>
            ) 
         }
         else if(props.btntype === "secondary"){
            return(
                <div className ="secondary-btn">
                <a href={link[1]}>{props.data.title}</a>
                <div className="new_arrow lg"><span className="arrow_line"><span></span></span></div>
                </div>
               ) 
         }
   
}
export default Button 