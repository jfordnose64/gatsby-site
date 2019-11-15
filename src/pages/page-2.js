import React from "react"
import { Link } from "gatsby"
import "../components/additional.css"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Page 2 will be the menu </p>
    <Link class="page-2" to="/">
      Go back to the homepage
    </Link>
  </Layout>
)

export default SecondPage
