import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "../css/main.css";
import Button from "../components/Button"
const FooterBanner = () =>{
    const data = useStaticQuery(graphql`
    query{
        nodeFooterBanner {
          title
          field_title
          field_button {
            title
            uri
          }
          field_button_type
        }
      }
      
    `)
    return(
        <div className="footer-banner">
        <div className="container-max-width">
          <h1>{data.nodeFooterBanner.field_title}</h1>  
          <div className="flex">
                <Button data={data.nodeFooterBanner.field_button} btntype={data.nodeFooterBanner.field_button_type}/>
          </div>
        </div>
      </div>
    )
}
export default FooterBanner