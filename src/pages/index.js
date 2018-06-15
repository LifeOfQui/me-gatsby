import React from 'react'

import Header from '../components/Header'
import PageSection from '../components/PageSection'
import AboutMe from '../components/Aboutme'

const IndexPage = ({ data }) => (
  <div>
    <Header data={data} active={'Home'} showAll={true} />
    <PageSection>
      <AboutMe data={data} />
    </PageSection>
  </div>
)

export default IndexPage

export const query = graphql`
  query SiteMeta {
    site {
      siteMetadata {
        title
      }
    }
    background: imageSharp(id: { regex: "/hero/" }) {
      sizes(
        maxWidth: 1240
        duotone: { highlight: "#4dc27c", shadow: "#000000" }
      ) {
        ...GatsbyImageSharpSizes_withWebp
      }
    }
    me: imageSharp(id: { regex: "/about-me--me/" }) {
      sizes(maxWidth: 500) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
