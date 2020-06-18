import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "../css/main.css";
import { Link } from "gatsby"
import footerLogo from "../images/footer_logo.png"
import Linkedin from "../images/linked-in.png"
const Footer = () =>{
    const data = useStaticQuery(graphql`
    query{
        footer:
        allMenuLinkContentMenuLinkContent(filter: {menu_name: {eq: "footer"}}) {
          edges {
            node {
              title
              link {
                title
                uri
              }
              menu_name
            }
          }
        }
      
      secondfooter:
      allMenuLinkContentMenuLinkContent(filter: {menu_name: {eq: "second-footer"}}) {
        edges {
          node {
            title
            link {
              title
              uri
            }
            menu_name
          }
        }
      }
    }
    `)
    return(
        <footer>
        <div className="container-max-width">
            <div>
                <p>
                <img src={footerLogo} alt="logo"/>
                <Link to="#"><img src={Linkedin} alt="linked in"/>Follow us on LinkedIn</Link>
                </p>
                <p className="copyright">© 2020 Sky Endowment Program</p>
            </div>
            <div className="footer-menu">
            <nav>
                <ul>
                    {data.footer.edges.map((data,index)=>{
                        const link =data.node.link.uri.split(":");
                        return <li key={index}><Link to={link[1]}>{data.node.title}</Link></li>
                    })}
                </ul>
            </nav>
            <nav>
                <ul>
                    {data.secondfooter.edges.map((data,index)=>{
                        const link = data.node.link.uri.split(":");
                        return <li key={index}><Link to={link[1]}>{data.node.title}</Link></li>
                    })}
                </ul>
            </nav>
            </div>
        </div>
    </footer>


    )
}

export default Footer