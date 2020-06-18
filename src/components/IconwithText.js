import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "../css/main.css";
import Button from "../components/Button"
const IconwithText = () =>{
        const data = useStaticQuery(graphql`
        query {
            nodeIconWithText {
              title
              field_title
              relationships {
                field_icon_text {
                  field_title
                  field_description {
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
                }
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
            <h2>{data.nodeIconWithText.field_title}</h2>
            <div className="three-column">
                {data.nodeIconWithText.relationships.field_icon_text.map((data,key)=>{
                   return( <div key={key}>
                        <img src={data.relationships.field_image.localFile.childImageSharp.fluid.src} alt={data.field_image.alt}/>
                        <h4>{data.field_title}</h4>
                        <p dangerouslySetInnerHTML={{ __html: data.field_description.value }}/>
                     </div>
                   )
                })}
            </div>
            <div className="flex">
                <Button data={data.nodeIconWithText.field_button} btntype={data.nodeIconWithText.field_button_type}/>
               
            </div>
        </div>
        )
}
export default IconwithText

