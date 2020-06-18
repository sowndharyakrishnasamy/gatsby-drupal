import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import "../css/main.css";
const HomeBanner = () =>{
        const data = useStaticQuery(graphql`
        query {
            nodeHomeBanner {
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
              }
            }
          }`)  
          const Home = styled.div`
          height:745px;
          background-size: cover;
          background-repeat: no-repeat;
          margin-bottom:50px;
          background-image: url(${data.nodeHomeBanner.relationships.field_image.localFile.childImageSharp.fluid.src});
          @media (max-width: 992px) {
            display: flex;
          }
          `
        return(
            <Home>
            <div className="home-banner">
            <div className="container-max-width">
            <div>
                <h1>{data.nodeHomeBanner.field_title}</h1>
                <h4 dangerouslySetInnerHTML={{ __html: data.nodeHomeBanner.body.value }}/>
            </div>
        </div>
    </div>
    </Home>
        )
    
}

export default HomeBanner   