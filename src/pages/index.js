import React from "react"
import Layout from "../components/layout"
import HomeBanner from "../components/HomeBanner"
import TextwithBtn from "../components/TextwithBtn"
import IconwithText from "../components/IconwithText"
import BgwithText from "../components/BgwithText"
import Blog from "../components/Blog"
import FooterBanner from "../components/FooterBanner"
const IndexPage = () => (
  <Layout>
    <HomeBanner/>
    <TextwithBtn/>
    <IconwithText/>
    <BgwithText/>
    <Blog/>
    <FooterBanner/>
  </Layout>
)

export default IndexPage
