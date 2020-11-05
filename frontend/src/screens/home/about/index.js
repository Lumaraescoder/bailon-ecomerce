import React from 'react'
import * as s from './style'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

const About = () => {
  return (
    <s.About>
      {/* <Container fluid >
        <div className="about">
          <div>
            <h1 className="about__title">
                 Sobre
            </h1>
          </div>
          <Grid container justify="center">
            <Grid item xs={12} sm={12}>
              <div className="description">
                <Grid item xs={6} s>
                  <img src="bg_slider_5.jpg" className="description__image" />
                </Grid>
                <Grid item xs={4} >
                  <div className="about__container">
                    <h2 className="about__title2">
                      <strong>Trabalhamos com a venda de produtos nacionais e importados.</strong>
                    </h2>
                    <hr />
                    <p className="description__text">
                Bailon radiadores e Ar condicionado comercializa Peças <br /> para Veículos Nacionais e Importados. Nossos funcionários são <br /> especializados para realizar a troca e manutenção de peças<br /> para o melhor funcionamento da refrigeração do motor e ar <br />condcionado de seu veículo e também para esclarecer<br /> qualquer dúvida referente a manutenção do sistema.
                    </p>
                  </div>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container> */}
    </s.About>
  )
}
export default About
