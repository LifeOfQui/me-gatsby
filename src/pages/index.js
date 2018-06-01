import React from 'react'

import SpartanRaceGrid from '../components/SpartanRaceGrid'
import PageSection from '../components/PageSection'
import AboutMe from '../components/Aboutme'
import HighlightElement from "../components/HighlightElement";
import YoutubeElement from "../components/YoutubeElement";

const IndexPage = ({ data }) => (
  <div>
    <PageSection>
      <AboutMe data={data} />
    </PageSection>

    <PageSection>
      <SpartanRaceGrid />
    </PageSection>

      <PageSection>
          <YoutubeElement />
      </PageSection>

    <PageSection>
      <HighlightElement data={data} />
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
    me: imageSharp(id: { regex: "/about-me--me/" }) {
      sizes(maxWidth: 500) {
        ...GatsbyImageSharpSizes
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
