import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import Fade from 'react-reveal/Fade'

import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import BackgroundImage from 'gatsby-background-image'

const Four = () => {
  const data = useStaticQuery(graphql`
    query GET_SERENATA {
      pic05: contentfulData(name: { eq: "Serenatas" }) {
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

  const pic05 = data.pic05.photo.fluid
  const alt = data.pic05.tag

  const handleWhatsapp = () => {
    const num = '522226768956'
    const message =
      'Hola, me gustaría más detalles sobre su servicio de serenata.'
    const res = message.replace(' ', '%20')
    window.open(`https://wa.me/${num}?text=${res}`)
  }

  return (
    <BackgroundImage
      Tag="section"
      className="spotlight style3 right inactive"
      fluid={pic05}
      backgroundColor={`#040e18`}
      id="two"
    >
      <section id="two" className="spotlight style2 right inactive">
        <span className="image fit main"></span>
        <Img fluid={pic05} alt={alt} />

        <Fade right big>
          <div className="content">
            <header>
              <h2>Serenatas</h2>
              {/* <p>Nunc commodo accumsan eget id nisi eu col volutpat magna</p> */}
            </header>
            <ul>
              <li>
                Conquista o declararle tu amor a aquella persona tan especial
                que ha marcado la historia de tu vida.
              </li>
              <li>
                Si tienes una novia o esposa no lo pienses más, tomala por
                sorpresa y demuestrale todo el amor que sientes por ella.
              </li>
              <li>
                Junta a tus familiares, amigos de confianza o tu mismo en
                privado para llevarle una gran sorpresa a tu familia que tanto
                quieres.
              </li>
              <li>
                Con mariachis, cantale al pie de su ventana para que sepa que la
                quieres. Y sepas el hermoso cariño que dios te ha mandado nomas
                para ti.
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

export default Four
