import React from 'react'
import { User } from '@geist-ui/react'
import { useStaticQuery, graphql } from "gatsby"

const Avatar = () => {
    // querying the webp format of the avatat png image to reduce size
    const data = useStaticQuery(graphql`
    query MyQuery {
        allImageSharp(filter: {id: {eq: "5159c0b3-e057-5e08-91f6-7e37663babed"}}) {
            edges {
            node {
                id
                fixed(width: 35) {
                base64
                tracedSVG
                aspectRatio
                srcWebp
                srcSetWebp
                originalName
                }
            }
            }
        }
    }
  `)
    return (
        <User src={data.allImageSharp.edges[0].node.fixed.srcWebp} name='Chetoui Hamza'>
            <User.Link href="https://twitter.com/okuninoshi">@okuninoshi</User.Link>
        </User>
    )
}

export default Avatar

  