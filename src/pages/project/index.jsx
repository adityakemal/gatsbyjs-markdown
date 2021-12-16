import { graphql, Link, use, useStaticQuery } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import {btn} from '../../styles/home.module.css'

export default function Project({data}) {
    // const data = useStaticQuery(graphql`
    // {
    //     allMarkdownRemark {
    //         nodes {
    //             html
    //             frontmatter {
    //                 title
    //             }
    //             id
    //         }
    //     }
    // }
    // `)
    console.log(data)
    const projectsData = data.projects.nodes
    const contact = data.contact.siteMetadata.contact
    return (
        <Layout>
            <div>
                <h1>project page</h1>
                <ul>
                    {
                        projectsData.map(res=>(
                            <li>
                                <Link className={btn} to={`/project/`+ res.id} key={res.id}>
                                    {res.frontmatter.title}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <b>contactme : {contact}</b>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query ProjectPage {
        projects : allMarkdownRemark(sort: {fields: frontmatter___title, order: DESC}) {
             nodes {
              html
              frontmatter {
                title
              }
              id
            }
        }
        contact : site{
            siteMetadata{
                contact
            }
        }
    }
`


