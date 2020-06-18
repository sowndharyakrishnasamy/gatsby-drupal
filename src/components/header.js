import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import reqcon from "../images/reqcon.png";
import login from "../images/login.png"
import opa from "../images/opa.png";
import JSONData from "../content/menu.json";
import logo from "../images/sitelogo.png";
import search from "../images/search.png";
const Header = () => {
  const data = useStaticQuery(graphql`
  query{
    topnav:
    allMenuLinkContentMenuLinkContent(filter: {menu_name: {eq: "topnav"}}) {
      edges {
        node {
          menu_name
          link {
            title
            uri
          }
          title
        }
      }
    }
    iconnav:
    allMenuLinkContentMenuLinkContent(filter: {menu_name: {eq: "icon-menu"}}) {
      edges {
        node {
          menu_name
          link {
            title
            uri
          }
          title
        }
      }
    }
    main:
    allMenuLinkContentMenuLinkContent(filter: {menu_name: {eq: "main"}}) {
      edges {
        node {
          menu_name
          link {
            title
            uri
          }
          title
        }
      }
    }
  }
  `)
  return(
    <header>
    <div>
      <div className="top-header">
        <div className="container-max-width">
          <nav>
            <ul>
              {data.topnav.edges.map((data,index)=>{
                var link = data.node.link.uri.split(":");
                return(
                  <li key={index}><Link to={link[1]}>{data.node.title}</Link></li>
                )
              })}
            </ul>
          </nav>
          <div className="icon-header">
             <ul>
               {data.iconnav.edges.map((data,index)=>{
                 var src;
                 var link = data.node.link.uri.split(":");
                 if(data.node.title ==="Request a consultation")
                 {
                   src=<Link to={link[1]}><img src={reqcon} alt="req con"></img><p>{data.node.title}</p></Link>
                 }
                 else if (data.node.title === "Login"){
                   src=<Link to={link[1]}><img src={login} alt="login"></img><p>{data.node.title}</p></Link>
                 }
                 else{
                   src = <Link to={link[1]}><img src={opa} alt="opa"></img><p>{data.node.title}</p></Link>
                 }
                 return(
                   <li key={index}>{src}</li>
                 )
               })}
             </ul>
          </div>
        </div>
      </div>
  
      <div className="menu-header">
      <div className="container-max-width">
         <div className="logo-div">
            <Link to="/"><img src={logo} alt="Logo"></img></Link>
         </div>
         <div className="main-menu">
           <div>
             <nav className="main-nav">
               <ul>
               {JSONData.mainnav.map((data,index)=>{
                 return(<li key={index}><Link to={data.link}>{data.text}</Link><ol>
                 {
                   data.submenu.map((val,key)=>{
                     if(val.subnav !== undefined){
                      return(<li key={key}><Link to={val.link}>{val.text}</Link><ol>{
                          val.subnav.map((data,k)=>{
                            if(data.childnav !== undefined){
                            return (<li key={k}><Link to={data.link}>{data.text}</Link><ul>{
                               data.childnav.map((t,k)=>{
                                 return ( <li key={k}><Link to={t.link}>{t.text}</Link></li>)
                               })
                            }</ul></li>)
                           }
                           else{
                            return (<li key={k}><Link to={data.link}>{data.text}</Link></li>)
                           }
                           })
                      }</ol></li>)
                     }
                     else{
                      return(<li key={key}><Link to={val.link}>{val.text}</Link></li>)
                     }
                   })
                 }</ol></li>)
                  
                
               })}
               </ul>
            </nav>
           </div>
            <div>
              <img src={search} alt="search"/>
            </div>
            <div className="float-right" id="mobile-hamburger">
              <p className="hamburger"></p>
              <p className="hamburger"></p>
              <p className="hamburger"></p>
            </div>
         </div>
      </div>
    </div>
    </div>
  </header>
  )
}
export default Header
