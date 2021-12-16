import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Layout from '../../../components/Layout'

export default function Detail({params}) {
    const {detail} = params
    const data = useStaticQuery(graphql`
    {
        projects : allMarkdownRemark(sort: {fields: frontmatter___title, order: DESC}) {
             nodes {
              html
              frontmatter {
                title
              }
              id
            }
        }
    }
    `
    )
    const projectsData = data.projects.nodes
    // const {title} = data.markdownRemark.frontmatter
    // const htmlData = data.markdownRemark.html
    const detailData = projectsData.filter(res=> res.id == detail)
    console.log(projectsData)
    return (
        <Layout>
            <h2>{detailData[0].frontmatter.title}</h2>
            {/* <h2>{detail}</h2> */}
            <div dangerouslySetInnerHTML={{__html:detailData[0].html}}></div>
        </Layout>
    )
}

