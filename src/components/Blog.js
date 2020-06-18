import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "../css/main.css";
import { Link } from "gatsby"
import LinkButton from "../components/LinkButton"
const Blog = () =>{
        const data = useStaticQuery(graphql`
        query {
            nodeBlog {
              title
              field_title
              field_button {
                title
                uri
              }
              relationships {
                field_blog_cards {
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
          }`);
        return(
            <div className="container-max-width blog">
            <div>
                <h2>{data.nodeBlog.field_title}</h2>
                <LinkButton data={data.nodeBlog.field_button}/>
            </div>
            <div className="blog-wrapper">
            {data.nodeBlog.relationships.field_blog_cards.map((data,key)=>{
                const link = data.field_link.uri.split(":");
                return(
                <div key={key}>
                    <Link to={link[1]}><img src={data.relationships.field_image.localFile.childImageSharp.fluid.src} alt={data.field_image.alt}/></Link>
                    <div>
                        <h5>{data.field_title}</h5>
                        <h4>{data.field_description.value}</h4>
                    </div>
                </div>
                )
            })}
            </div>
          </div>
        )
}

export default Blog