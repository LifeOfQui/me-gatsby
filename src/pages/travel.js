import React from 'react'

import PageSection from '../components/PageSection'
import Header from '../components/Header'
import YoutubeElement from '../components/YoutubeElement'

const TravelSite = ({ data }) => (
  <div>
    <Header data={data} active={'Travel'} showAll={false} />
    <PageSection>
      <YoutubeElement />
    </PageSection>
  </div>
)

export default TravelSite

export const query = graphql`
  query Travel {
    site {
      siteMetadata {
        title
      }
    }
    backgroundSmall: imageSharp(id: { regex: "/travel/" }) {
      sizes(
        maxWidth: 1240
      ) {
        ...GatsbyImageSharpSizes_withWebp
      }
    }
  }
`