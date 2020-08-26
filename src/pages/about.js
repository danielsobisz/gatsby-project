import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from '../components/head'

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        velit voluptas fugit, ea error saepe qui quis aut deleniti tempora
        laudantium illo odio tenetur eveniet blanditiis ipsam libero animi
        facere sunt modi, iste non consequatur!
      </p>
      <Link to="/contact">Contact</Link>
    </Layout>
  )
}

export default AboutPage
