import React from "react"
import Link from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MenuContents from "../components/MenuContents"
import { underline } from "ansi-colors"
import { Helmet } from "react-helmet"

const menu = () => {
  return (
    <Layout>
      <SEO title="Menu" />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Menu</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div>
        <h3
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
            color: "seagreen",
          }}
        >
          Menu
        </h3>
        <MenuContents />
      </div>
    </Layout>
  )
}

export default menu
