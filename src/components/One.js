import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import Fade from 'react-reveal/Fade'

import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import BackgroundImage from 'gatsby-background-image'

const One = () => {
  const data = useStaticQuery(graphql`
    query GET_HEADER_2 {
      pic02: contentfulData(name: { eq: "header dos" }) {
        id
        name
        tag
        photo {
          description
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  `)

  const pic02 = data.pic02.photo.fluid
  const alt = data.pic02.tag

  return (
    <BackgroundImage
      Tag="section"
      className="spotlight style1 bottom inactive"
      fluid={pic02}
      backgroundColor={`#040e18`}
    >
      <section id="one" className="spotlight style1 bottom inactive">
        <span className="image fit main">
          <Img fluid={pic02} alt={alt} />
        </span>
        <Fade bottom big>
          <div className="content">
            <div className="container">
              <div className="row">
                <div className="col-4 col-12-medium">
                  <header>
                    <h2>
                      Mariachis en la ciudad de Puebla y Cholula a precios
                      accesibles
                    </h2>
                  </header>
                </div>
                <div className="col-4 col-12-medium">
                  <p>
                    Elegancia para tus eventos, canciones de tu preferencia,
                    amplio repertorio y buena presentación.
                  </p>
                </div>
                <div className="col-4 col-12-medium">
                  <p>
                    Servicio profesional, puntualidad, coordinación,
                    presentación y calidad musical. Asesoría y seguimiento en la
                    participación de tu fiesta o evento.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
        <ScrollLink
          to="two"
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

export default One
