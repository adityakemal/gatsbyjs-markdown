import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'

export default function Navbar() {
    const data = useStaticQuery(graphql`
    {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    const {title} = data.site.siteMetadata

    console.log(data)
    return (
        <nav>
            <h1>{title}</h1>
            <div className="links">
                <Link to='/'>home</Link>
                <Link to='/about'>about</Link>
                <Link to='/project'>project</Link>
            </div>
        </nav>
    )
}

