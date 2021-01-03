import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import Fade from 'react-reveal/Fade'

import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import BackgroundImage from 'gatsby-background-image'

const Three = () => {
  const data = useStaticQuery(graphql`
    query GET_CUMPLE {
      pic04: contentfulData(name: { eq: "Cumpleaños" }) {
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
    }
  `)

  const pic04 = data.pic04.photo.fluid
  const alt = data.pic04.tag

  return (
    <BackgroundImage
      Tag="section"
      className="spotlight style3 left inactive"
      fluid={pic04}
      backgroundColor={`#040e18`}
      id="three"
    >
      <section id="three" className="spotlight style3 left inactive">
        <span className="image fit main bottom">
          <Img fluid={pic04} alt={alt} />
        </span>
        <Fade left big>
          <div className="content">
            <header>
              <h2>Cumpleaños</h2>
              {/* <p>Accumsan integer ultricies aliquam vel massa sapien phasellus</p> */}
            </header>
            <ul>
              <li>
                El aniversario del nacimiento de esa persona tan especial o
                organización.
              </li>
              <li>
                Celebrando con fiesta, música, comida, bebidas y muchos más…
                Reunión de familiares, amigos, conocidos donde los regalos no
                deben faltar, ni mucho menos las sorpresas con mariachis.
              </li>
              <li>
                Las tradicionales mañanitas que cantaba el rey David no deben
                faltar en una fiesta de cumpleaños clásicas de nuestro país.
              </li>
              <li>
                En un ambiente familiar, social o de trabajo la música del
                mariachi es para interpretar y alegrar los corazones.
              </li>
            </ul>
            <ul className="actions">
              <li>
                <a href="/" className="button">
                  Informes
                </a>
              </li>
            </ul>
          </div>
        </Fade>
        <ScrollLink
          to="four"
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

export default Three
