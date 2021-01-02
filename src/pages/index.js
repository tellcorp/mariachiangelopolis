import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import One from '../components/One'
import Two from '../components/Two'
import Three from '../components/Three'
import Four from '../components/Four'
import Five from '../components/Five'
import Six from '../components/Six'
import Six_a from '../components/Six_a'
import Seven from '../components/Seven'

class Home extends React.Component {
  render() {
    return (
      <Layout location="/">
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          title="Mariachi Angelopolis | Mariachis en Puebla"
          meta={[
            { name: 'description', content: 'Sitio de mariachi Angelopolis' },
            {
              name: 'keywords',
              content: 'Mariachis en puebla, serenata,  economico',
            },
          ]}
        ></Helmet>
        <Banner />
        <a id="nosotros">
          <One />
        </a>
        <Two />
        <Three />
        <Four />
        <Five />
        <Six />
        <a id="servicios">
          <Six_a />
        </a>
        <a id="contacto">
          <Seven />
        </a>
      </Layout>
    )
  }
}

export default Home
