import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import BackgroundImage from 'gatsby-background-image'

import { Link as ScrollLink } from 'react-scroll'

const Banner = () => {
  const data = useStaticQuery(graphql`
    query GET_BANNER_LOGO {
      desktop: contentfulData(name: { eq: "Mariachis en Puebla" }) {
        id
        name
        tag
        photo {
          description
          fluid {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
      logo: file(relativePath: { eq: "pic01.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  // Set ImageData.

  const imageData = data.desktop.photo.fluid
  const logo = data.logo.childImageSharp.fluid

  return (
    <BackgroundImage
      Tag="section"
      fluid={imageData}
      backgroundColor={`#040e18`}
      id="banner"
    >
      <section id="banner">
        <div className="content">
          <header className="fondo-azul">
            <h2>MARIACHIS EN PUEBLA</h2>
            <p>
              MARIACHI ANGELOPOLIS TE OFRECE
              <br />
              UNA PRESENTACIÓN ARTÍSTICA MEXICANA.
            </p>
          </header>
          <span className="image">
            <Img fluid={logo} alt="Logo Mariachi Angelopoliss" />
          </span>
        </div>
        <ScrollLink
          to="one"
          className="goto-next"
          activeClass="active"
          smooth={true}
          offset={50}
          duration={1500}
          spy={true}
        >
          Next
        </ScrollLink>
      </section>
    </BackgroundImage>
  )
}

export default Banner
