import React from "react"
import "../css/main.css"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
const ContactUsHeader = () =>{
    const data = useStaticQuery(graphql`
    query {
        nodeBanner {
          title
          field_title
          body {
            value
          }
          relationships {
            field_banner_bg {
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
      }`)
      const Container = styled.div`
      background-image: url(${data.nodeBanner.relationships.field_banner_bg.localFile.childImageSharp.fluid.src});
      `
    return(
    <Container>
        <div className="header-container">
            <div className="container-max-width">
                <div className="bg-wrapper">
                    {/* <ul>
                        {JSONData.breadcrumb.map((data,index) => {
                            if(data.link !== ""){
                                return (
                                    <li key={index}>
                                    <a href={data.link}>{data.content}</a>
                                    </li>
                                )
                            }
                            else{
                            return <li key={data}>{data.content}</li>
                                }
                        })}
                    </ul> */}
                    <h1>{data.nodeBanner.field_title}</h1>
                    <p dangerouslySetInnerHTML={{ __html: data.nodeBanner.body.value}}/>
                </div>
            </div>
         </div>
    </Container>
    )
}
export default ContactUsHeader