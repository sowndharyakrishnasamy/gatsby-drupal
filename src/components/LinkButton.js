import React from "react";

import { Link } from "gatsby"

const LinkButton = (props)=>{
     const link = props.data.uri.split(':');
    return(
        <div className="link">
        <Link to ={link[1]}>{props.data.title}</Link>
        <div className="new_arrow lg"><span className="arrow_line"><span></span></span></div> 
        </div>
    )
}
export default LinkButton