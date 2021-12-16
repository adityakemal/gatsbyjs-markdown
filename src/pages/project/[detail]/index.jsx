import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Layout from '../../../components/Layout'

export default function Detail({params}) {
    const {detail} = params
    const data = useStaticQuery(graphql`
    {
        markdownRemark(id: {eq: "4cbf6b50-3645-5bb4-8965-b2e8ffa98c3f"}) {
          html
          frontmatter {
            title
          }
        }
      }
    `
    )
    const {title} = data.markdownRemark.frontmatter
    const htmlData = data.markdownRemark.html

    return (
        <Layout>
            <h2>{title}</h2>
            <div dangerouslySetInnerHTML={{__html:htmlData}}></div>
        </Layout>
    )
}

