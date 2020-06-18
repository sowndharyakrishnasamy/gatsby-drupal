import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "../css/main.css";
import styled from "styled-components"
import LinkButton from "../components/LinkButton"
const BgwithText = () =>{
        const data = useStaticQuery(graphql`
        query{
            nodeBgWithText {
              title
              field_title
              body {
                value
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
                field_icon_with_text {
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
                  field_link {
                    title
                    uri
                  }
                }
              }
            }
          }
          
        `);
        const Bg = styled.div`
            background-size: cover;
            min-height: 500px;
            background-position: top;
            background-size: 100% 100%;
            color:#fff;
            padding-top:50px;
            background-image: url(${data.nodeBgWithText.relationships.field_image.localFile.childImageSharp.fluid.src});
        `
        return(
            <Bg>
            <div className="padding-50 bottom-50">
            <div className="container-max-width">
              <h3>{data.nodeBgWithText.field_title}</h3>
              <p dangerouslySetInnerHTML={{ __html: data.nodeBgWithText.body.value }}/>
              <div className="card-wrapper">
              {data.nodeBgWithText.relationships.field_icon_with_text.map((data,key)=>{
                  return(<div key={key}>
                      <img src={data.relationships.field_image.localFile.childImageSharp.fluid.src} alt={data.field_image.alt}/>
                      <h4>{data.field_title}</h4>
                      <p dangerouslySetInnerHTML={{ __html:data.field_description.value}}/>
                      <LinkButton data={data.field_link}/>
                  </div>)
              })}
              </div>
            </div>
          </div>
          </Bg>
        )
}
export default BgwithText