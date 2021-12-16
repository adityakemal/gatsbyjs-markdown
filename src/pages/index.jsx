import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import {btn} from '../styles/home.module.css'
import Img from 'gatsby-image'

export default function Home({data}) {
  console.log(data)
  const {description, title} = data.site.siteMetadata
  const {src, base64} = data.file.childImageSharp.fluid
  return (
      <Layout >
        <section>
            <h1>code in gatsby</h1>
            {/* <img src={src} alt="slack" />  */}
            <Img fluid={data.file.childImageSharp.fluid}/>
            <p>learn now or tomorow</p>
            <Link className={btn} to='/project'>go to project</Link>
            <h2>{title} - {description}</h2>
        </section>
      </Layout >
  )
}

export const query = graphql`
  query SiteInfo {
      site {
          siteMetadata {
            description
            title
            copyright
          }
      }
      file(relativePath: {eq: "slack.png"}) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
  }
`
