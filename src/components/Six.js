import React from 'react'
import Fade from 'react-reveal/Fade'

const Six = props => (
  <Fade up>
    <section id="four" className="wrapper style1 special fade-up">
      <div className="container">
        <header className="major">
          <h2>Mariachi Angelopolis</h2>
          <p>
            Los mariachis en Puebla y Cholula, se están esforzando por brindarte
            un mejor servicio y profesionalismo a tus próximos eventos sociales
            que estás planeando.
          </p>
        </header>
        <div className="box alt">
          <div className="row gtr-uniform">
            <section className="col-4 col-6-medium col-12-xsmall">
              <span className="icon solid alt major fa-chart-area"></span>
              <h3>Nosotros</h3>
              <p>
                Mariachi Angelopolis, te ofrece un servicio profesional en
                performance musical, presentación, puntualidad y repertorio.
              </p>
            </section>
            <section className="col-4 col-6-medium col-12-xsmall">
              <span className="icon solid alt major fa-comment"></span>
              <h3>QUIENES SOMOS?</h3>
              <p>
                Mariachi Angelopolis somos una agrupación fundada en el 2019 y
                uno de los últimos proyectos del señor Mario Téllez Morales
                empresario y cofundador del Mariachi 2000 de Puebla con el
                objetivo de brindar una mejor profesionalidad, servicio,
                presentación y performance musical con la colaboración de todos
                los Mariachis en Puebla.
              </p>
            </section>
            <section className="col-4 col-6-medium col-12-xsmall">
              <span className="icon solid alt major fa-flask"></span>
              <h3>MISIÓN</h3>
              <p>
                Llevar un entretenimiento agradable, profesional a su público de
                una manera fácil, seguro y de confianza. Brindarte una
                experiencia única, despertar emociones y gusto por nuestra
                identidad mexicana a través de la música del mariachi.
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  </Fade>
)

export default Six
