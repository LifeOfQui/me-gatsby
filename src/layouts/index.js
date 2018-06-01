import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Header from '../components/Header/index'
import './index.css'
import Footer from "../components/Footer";

import pattern from './concrete_seamless.png'

const SiteWrapper = styled.div`
    background-image: url(${pattern});
`

const Layout = ({ children, data }) => (
  <SiteWrapper>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[{ name: 'description', content: 'My personal website' }]}
    />
    <Header data={data} />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 1250,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
      <Footer />
  </SiteWrapper>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
    background: imageSharp(id: { regex: "/hero/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes_withWebp
      }
    }
  }
`
