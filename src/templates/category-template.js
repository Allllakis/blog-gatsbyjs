import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'

const CategoryTemplate = ({data}) => {
 const {allMdx: {nodes: posts}} = data
 const {allMdx: {nodes: {frontmatter: category}}} = data
  return (
   <Layout>
     <Hero />
     <Posts posts={posts} title={`category | ${category}`}/>
   </Layout>
  )
}

export const query = graphql`
query GestCategories($category: String) {
  allMdx(
    sort: {fields: frontmatter___date, order: DESC}
    filter: {frontmatter: {category: {eq: $category}}}
  ) {
    nodes {
      id
      frontmatter {
        title
        author
        category
        slug
        readTime
        date(formatString: "MMMM, Do YYYY")
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
       }
      excerpt
    }
    
  }
}
`


export default CategoryTemplate
