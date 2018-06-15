import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import './index.css'
import Footer from '../components/Footer'

import pattern from './concrete_seamless.png'

const SiteWrapper = styled.div`
  background-image: url(${pattern});
`

const Layout = ({ children, data }) => (
  <SiteWrapper>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {
          name: 'description',
          content:
            'Web Developer / Front End Developer - Personal website Quirin Koch',
        },
        {
          name: 'theme-color',
          content: '#4dc27c',
        },
        {
          name: 'short_name',
          content: 'Quirin Koch',
        },
      ]}
    />
    <div>{children()}</div>
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
  }
`
