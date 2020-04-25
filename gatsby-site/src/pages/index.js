import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to your new Gatsby site.</h1>
    <p>Build something great.</p>
    <div>
      <a href="/">Go to React app</a>
    </div>
    <Link to="/page-2">Go to page 2</Link>
  </Layout>
)

export default IndexPage
