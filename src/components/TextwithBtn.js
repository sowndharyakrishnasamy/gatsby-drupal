import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "../css/main.css";
import Button from "../components/Button";
const TextwithBtn = () =>{
        const data = useStaticQuery(graphql`
        query {
            nodeTextWithBtn {
              title
              field_title
              body {
                value
              }
              field_image {
                alt
              }
              relationships {
                field_image {
                  localFile {
                    childImageSharp {
                      fluid {
                        src
                      }
                    }
                  }
                }
              }
              field_image_description {
                value
              }
              field_subtitle
              field_sub_description {
                value
              }
              field_button {
                title
                uri
              }
              field_button_type
            }
          }          
        `)
    return(
        <div className="container-max-width bottom-50">
        <h1>{data.nodeTextWithBtn.field_title}</h1>
        <p dangerouslySetInnerHTML={{ __html: data.nodeTextWithBtn.body.value }}/>
        <hr/>
        <div className="simple-wrapper">
            <img src={data.nodeTextWithBtn.relationships.field_image.localFile.childImageSharp.fluid.src} alt={data.nodeTextWithBtn.field_image.alt}/>
            <p dangerouslySetInnerHTML={{ __html: data.nodeTextWithBtn.field_image_description.value }}/>
        </div>
        <hr/>
        <h2>{data.nodeTextWithBtn.field_subtitle}</h2>
        <p className="bottom-50" dangerouslySetInnerHTML={{ __html: data.nodeTextWithBtn.field_sub_description.value }}/>
        <div className="flex">
             <Button data={data.nodeTextWithBtn.field_button} btntype={data.nodeTextWithBtn.field_button_type} />   
        </div>
    </div>
    )
}
export default TextwithBtn
