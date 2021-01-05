import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import Fade from 'react-reveal/Fade'

import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import BackgroundImage from 'gatsby-background-image'

const Two = () => {
  const data = useStaticQuery(graphql`
    query GET_BODAS {
      pic03: contentfulData(name: { eq: "Bodas" }) {
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

  const pic03 = data.pic03.photo.fluid
  const alt = data.pic03.tag

  const handleWhatsapp = () => {
    const num = '522226768956'
    const message = 'Hola, me gustaría más detalles sobre sus eventos en Bodas.'
    const res = message.replace(' ', '%20')
    window.open(`https://wa.me/${num}?text=${res}`)
  }

  return (
    <BackgroundImage
      Tag="section"
      className="spotlight style2 right inactive"
      fluid={pic03}
      backgroundColor={`#040e18`}
      id="two"
    >
      <section id="two" className="spotlight style2 right inactive">
        <span className="image fit main">
          <Img fluid={pic03} alt={alt} />
        </span>
        <Fade right big>
          <div className="content">
            <header>
              <h2>Bodas</h2>
              {/* <p>Nunc commodo accumsan eget id nisi eu col volutpat magna</p> */}
            </header>
            <ul>
              <li>
                Día tan especial, celebrando una nueva etapa de la vida y
                proyecto en común con tu pareja.
              </li>
              <li>
                Te acompañamos en la ceremonia religiosa o civil con buena
                música tradicional que nos identifica como mexicanos.
              </li>
              <li>
                Una buena organización, vestuarios, invitados y por supuesto
                unos buenos mariachis con el profesionalismo que nos distingue.
              </li>
              <li>
                Nos adaptamos a tu estilo de boda (naturaleza, salón, playa,
                pueblos magicos, haciendas).
              </li>
              <li>
                El mariachi llega a donde gustes, interpretamos las canciones de
                tu preferencia u ocasión.
              </li>
            </ul>
            <ul className="actions">
              <li>
                <button className="button" onClick={handleWhatsapp}>
                  Informes
                </button>
              </li>
            </ul>
          </div>
        </Fade>
        <ScrollLink
          to="three"
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

export default Two
