import React from 'react'

import PageSection from '../components/PageSection'
import Header from '../components/Header'
import SpartanRaceGrid from '../components/SpartanRaceGrid'
import HighlightElement from '../components/HighlightElement'

const SpartanRaceSide = ({ data }) => (
  <div>
    <Header data={data} active={'SpartanRace'} showAll={false} />
    <PageSection>
      <SpartanRaceGrid />
    </PageSection>

    <PageSection>
      <HighlightElement data={data} />
    </PageSection>
  </div>
)

export default SpartanRaceSide

export const query = graphql`
  query ImagesForSpartanHighlight {
    site {
      siteMetadata {
        title
      }
    }
    backgroundSmall: imageSharp(id: { regex: "/small/" }) {
      sizes(
        maxWidth: 1240
      ) {
        ...GatsbyImageSharpSizes_withWebp
      }
    }
    andorraStart: imageSharp(id: { regex: "/andorra-start/" }) {
      sizes(maxWidth: 500) {
        ...GatsbyImageSharpSizes
      }
    }
    andorraFinish: imageSharp(id: { regex: "/andorra-finish/" }) {
      sizes(maxWidth: 500) {
        ...GatsbyImageSharpSizes
      }
    }
    andorraSnow: imageSharp(id: { regex: "/andorra-snow/" }) {
      sizes(maxWidth: 500) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
