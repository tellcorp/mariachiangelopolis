import React, { useState } from 'react'
import Fade from 'react-reveal/Fade'
import emailjs from 'emailjs-com'

const Seven = props => {
  const [state, setState] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    loading: false,
    sendOk: '',
  })

  const handleState = (name, value) => {
    setState({
      ...state,
      [name]: value,
    })
  }

  const handleSubmit = e => {
    setState({ loading: true })
    e.preventDefault()
    sendEmail(state)
  }

  const sendEmail = e => {
    emailjs
      .send(
        'service_zbxgr0m',
        'informes_mangelopolis',
        e,
        'user_qgzGY81K2NoloDw1UgMGr'
      )
      .then(
        result => {
          console.log(result.text)
          setState({
            name: '',
            phone: '',
            email: '',
            message: '',
            loading: false,
            sendOk: result.text,
          })
        },
        error => {
          console.log(error.text)
        }
      )
  }

  return (
    <section id="five" className="wrapper style2 special fade inactive">
      <Fade duration={1000}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6">
              <a href="tel:+522226768956">
                <h3>Celular</h3>
                <h5>(52)2226768956</h5>
              </a>
              <a href="mailto:informes@mariachiangelopolis.com">
                <h3>Email</h3>
                <h5>informes@mariachiangelopolis.com</h5>
              </a>

              <h3>Dirección</h3>
              <h5>
                Villa Escondida 5D. Fraccionamiento, cuarta sección, Villas de
                Atlixco, 72197 San Andrés Cholula Pue. En la zona de ANGELOPOLIS
              </h5>
            </div>

            <div className="col-6">
              <form className="cta">
                <div className="row gtr-uniform gtr-50">
                  <div className="col-8 col-12-xsmall">
                    <input
                      type="text"
                      name="name"
                      value={state.name || ''}
                      placeholder="Nombre completo"
                      onChange={e => handleState(e.target.name, e.target.value)}
                      required
                    />
                  </div>

                  <div className="col-8 col-12-xsmall">
                    <input
                      type="text"
                      name="phone"
                      value={state.phone || ''}
                      placeholder="Teléfono"
                      onChange={e => handleState(e.target.name, e.target.value)}
                      required
                    />
                  </div>

                  <div className="col-8 col-12-xsmall">
                    <input
                      type="text"
                      name="email"
                      value={state.email || ''}
                      placeholder="Correo electrónico"
                      onChange={e => handleState(e.target.name, e.target.value)}
                      required
                    />
                  </div>

                  <div className="col-8 col-12-xsmall">
                    <textarea
                      name="message"
                      value={state.message || ''}
                      row="3"
                      placeholder="Mensaje"
                      onChange={e => handleState(e.target.name, e.target.value)}
                    />
                  </div>

                  <div className="col-8 col-12-xsmall">
                    <input
                      aria-label="Submit the form"
                      type="submit"
                      value="Informes"
                      className="fit primary"
                      onClick={handleSubmit}
                    />
                  </div>
                  <div className="col-8 col-12-xsmall">
                    {state.loading ? (
                      <div className="lds-facebook">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                    ) : null}
                    {state.sendOk === 'OK' ? (
                      <h4>Su mensaje ha sido enviado correctamente.</h4>
                    ) : null}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  )
}

export default Seven
