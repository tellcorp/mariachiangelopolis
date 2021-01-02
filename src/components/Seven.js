import React from 'react'
import Fade from 'react-reveal/Fade'

const Seven = props => (
  <section id="five" className="wrapper style2 special fade inactive">
    <Fade duration={2500}>
      <div className="container">
        <div className="row align-items-start">
          <div className="col-6">
            <a href="">
              <h3>Celular</h3>
              <h5>(52)2226768956</h5>
            </a>
            <a href="">
              <h3>Email</h3>
              <h5>informes@mariachiangelopolis.com</h5>
            </a>

            <a href="">
              <h3>Dirección</h3>
              <h5>
                Villa Escondida 5D. Fraccionamiento, cuarta sección, Villas de
                Atlixco, 72197 San Andrés Cholula Pue. En la zona de ANGELOPOLIS
              </h5>
            </a>
          </div>
          <div className="col-6">
            <form method="post" action="#" className="cta">
              <div className="row gtr-uniform gtr-50">
                <div className="col-8 col-12-xsmall">
                  <input
                    aria-label="Your name"
                    type="text"
                    name="name"
                    id="email"
                    placeholder="Nombre completo"
                  />
                </div>

                <div className="col-8 col-12-xsmall">
                  <input
                    aria-label="Your phone"
                    type="text"
                    name="phone"
                    id="email"
                    placeholder="Teléfono"
                  />
                </div>

                <div className="col-8 col-12-xsmall">
                  <input
                    aria-label="Your email"
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Correo electrónico"
                  />
                </div>

                <div className="col-8 col-12-xsmall">
                  <textarea
                    aria-label="Your email"
                    name="message"
                    id="email"
                    row="3"
                    placeholder="Mensaje"
                  />
                </div>

                <div className="col-8 col-12-xsmall">
                  <input
                    aria-label="Submit the form"
                    id="submitForm"
                    type="submit"
                    value="Informes"
                    className="fit primary"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fade>
  </section>
)
export default Seven
