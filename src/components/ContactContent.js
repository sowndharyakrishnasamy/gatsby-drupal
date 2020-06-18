import React from "react"
import "../css/main.css"
const ContactContent = (props) =>{
    return(
        <div className="container-max-width">
                <h2>{props.data.field_title}</h2>
                <div className="card-container">

                {props.data.relationships.field_title_and_description.map((val,index)=>{
                        return (
                            <div className="card" key={index}>
                                <h5>{val.field_title}</h5>
                                <p dangerouslySetInnerHTML={{ __html:val.field_description.value}}/>
                            </div>
                        )
                })}
                </div>
         </div>
    )
}
export default ContactContent