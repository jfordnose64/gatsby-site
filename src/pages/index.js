import React from "react"
import { Link } from "gatsby"
import "../components/additional.css"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="container">
      <h1>Welcome to the Frog Pond!</h1>
      <p>
        The Frog Pond is a colorful cafe mainstay serving huge portions of
        American chow for breakfast & lunch in casual digs.
      </p>
      <p>
        The Frog Pond is a New American Restaurant that has served the Tampa Bay
        area for over 35 years.
      </p>

      <Link to="/page-2/">Go to page 2</Link>
    </div>
  </Layout>
)

export default IndexPage
