import React from "react"
import Layout from "../components/layout"
import ContactUsHeader from "../components/ContactUsHeader"
import Textwith2Button from "../components/Textwith2Button"
import ContactContent from "../components/ContactContent"

const ContactUs = ({data}) =>{
    return(<Layout>
        <ContactUsHeader/>
        <Textwith2Button/>
        {data.allNodeContactContent.edges.map((data,index)=>{
              return ( <ContactContent data={data.node} key={index}/>)
        })}
    </Layout>)
}
export default ContactUs

export const query = graphql `
query MyQuery {
    allNodeContactContent {
      edges {
        node {
          title
          field_title
          relationships {
            field_title_and_description {
              field_title
              field_description {
                value
              }
            }
          }
        }
      }
    }
  }
  `