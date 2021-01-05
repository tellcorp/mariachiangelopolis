import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <Layout>
    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <h1>NOT FOUND</h1>
          <p>Esta dirección no existe...</p>
          <Link to="/">
            {' '}
            <h5>Ir a inicio</h5>
          </Link>
        </div>
      </section>
    </div>
  </Layout>
)

export default NotFoundPage
