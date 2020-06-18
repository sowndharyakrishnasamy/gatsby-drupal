import React from "react"
import "../css/main.css"
import { useStaticQuery, graphql } from "gatsby"
import Button from "../components/Button"
const Textwith2Button = () =>{
    const data = useStaticQuery(graphql`
    query {
        nodeText2Btn {
          title
          field_title
          body {
            value
          }
          field_description {
            value
          }
          field_buttons {
            title
            uri
          }
        }
      }`)
    return(
        <div className="container-max-width contact-wrapper">
        <hr/>
        <p dangerouslySetInnerHTML={{ __html: data.nodeText2Btn.body.value}}/>
        <hr/>
        <h2>{data.nodeText2Btn.field_title}</h2>
        <p dangerouslySetInnerHTML={{ __html: data.nodeText2Btn.field_description.value}}/>
        <div className="btn-wrapper">
            {data.nodeText2Btn.field_buttons.map((data,index)=>{
                if(index === 0){
                    return(<Button data={data} key={index} btntype="primary"/>)
                }
                else{
                    return(<Button data={data} key={index} btntype="secondary"/>)
                }
            })}
        </div>
        <hr/>
        </div>
    )
}
export default Textwith2Button