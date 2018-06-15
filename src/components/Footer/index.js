import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Outer = styled.footer`
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  max-width: 1250px;
  margin: 0 auto;

  ul {
    list-style: none;
    display: flex;

    li {
      margin-right: 30px;
      text-transform: uppercase;

      &:last-child {
        @media (min-width: 1280px) {
          margin-right: 0;
        }
      }

      a {
        text-decoration: none;
        color: #000;
        border-bottom: 3px solid transparent;

        &:hover {
          border-bottom: 3px solid #524763;
        }
      }
    }
  }
`

const Footer = () => (
  <Outer>
    <ul>
      <li>
        <Link to="/datenschutz">Datenschutz</Link>
      </li>
      <li>
        <Link to="/impressum">Impressum</Link>
      </li>
    </ul>
  </Outer>
)

export default Footer
