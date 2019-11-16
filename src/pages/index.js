import React from "react"
import { Link } from "gatsby"
import "../components/additional.css"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Social from "../components/social"
import { Helmet } from "react-helmet"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Helmet>
      <meta charSet="utf-8" />
      <title>Home</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <div class="container">
      <h1 class="mainHeader">Welcome to the Frog Pond!</h1>
      <p>
        Mauris non placerat ante. Vestibulum pulvinar tellus sed velit
        tristique, quis rhoncus dolor pulvinar. Suspendisse nec laoreet magna.
        Sed vel nibh at erat blandit consectetur.
      </p>
      <p>
        Curabitur ac nibh dolor. Nunc sed est sed ex suscipit lacinia et id
        odio. Vivamus posuere massa et risus rhoncus aliquam. Quisque
        pellentesque ornare ex, sed elementum lectus vulputate et.
      </p>
      <Social />
    </div>
    <p class="linkcon">
      <div class="buttonshome">
        <Link
          class="page-2"
          to="/page-2/"
          style={{ color: "black", textDecoration: "none" }}
        >
          About Us
        </Link>
        <Link
          to="/menu"
          class="page-2"
          style={{ color: "black", textDecoration: "none" }}
        >
          Menu
        </Link>
      </div>
    </p>
  </Layout>
)

export default IndexPage
