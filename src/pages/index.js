import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from '../components/head'
const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h2>I'm Daniel, you know nothing about me.</h2>
      <p>
        Need a developer? <Link to="/contact">Contact me</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
