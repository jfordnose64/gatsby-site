import React from "react"
import { Link } from "gatsby"
import "../components/additional.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutUs from "../components/aboutUs"
import { Helmet } from "react-helmet"

const SecondPage = () => (
  <Layout>
    <SEO title="About us" />
    <Helmet>
      <meta charSet="utf-8" />
      <title>About Us</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <section class="about">
      <h1 class="header">About Us</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        scelerisque massa diam, ut venenatis est mollis nec. Fusce in ipsum
        tellus. Morbi ut purus lacus. Interdum et malesuada fames ac ante ipsum
        primis in faucibus. Vivamus quis dui ligula. Pellentesque nec
        scelerisque ipsum. Aliquam pulvinar tincidunt justo, eu accumsan urna
        suscipit vitae. Mauris elementum libero ut bibendum accumsan. Morbi
        molestie id lorem ut tristique. Etiam quis dolor non dolor iaculis
        facilisis non eu neque. Mauris neque magna, eleifend vitae tincidunt
        eget, tincidunt vitae quam.{" "}
      </p>
      {/* <Link style={{ color: "black" }} class="page" to="/">
        Go back to the homepage
      </Link>
      <Link to="/menu" style={{ color: "black", textDecoration: "none" }}>
        Menu
      </Link> */}
      <AboutUs />
    </section>
  </Layout>
)

export default SecondPage
