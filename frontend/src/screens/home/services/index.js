import React from 'react'
import * as s from './style'
import Grid from '@material-ui/core/Grid'

const Services = () => {
  return (
    <s.Services>
      <div className="products">
        <Grid container>
          <Grid item xs={12} >
            <h4 className="products__title">Serviços</h4>
            <p className="product__size">Há mais de 30 anos trabalhando no mercado, com total respeito e transparência.</p>
          </Grid >
          <Grid item xs={12} >
            <hr />
          </Grid>
          <Grid item xs={12} sm={12} >
            <div className="products__images">
              <ul className="products__uno">
                <li>
                  <h3 className="">Radiadores</h3>
                  <p>Radiadores novos nacionais e importados</p>
                  <img src="radiator.jpg" className="products__images__list"/>
                </li>
                <li>
                  <h3>Ar Condicionado</h3>
                  <p>A Manutenção do Ar Condicionado garante um  ar mais puro e diminui riscos de infecções respiratórias.</p>
                  <img src="service1.jpg" className="products__images__list" />
                </li>
                <li>
                  <h3>Solda para Radiadores</h3>
                  <p>Serviço de solda</p>
                  <img src="service4.jpg" className="products__images__list"/>
                </li>
              </ul>
              {/* <h4 className="products__store"> Clique aqui e Verifique nosso estoque!</h4> */}
            </div>
          </Grid>
          <Grid xs={12} sm={12}>
            <div className="products__images">
              <ul className="products__uno">
                <li>
                  <h3 className="">Carga de Gás</h3>
                  <p>Carga  de gás  do seu Ar condicionado é com a Bailon radiadores, melhor preço da região.</p>
                  <img src="service2.jpg" className="products__images__list"/>
                </li>
                <li>
                  <h3>Kits Completos</h3>
                  <p>Montamos seus kit de radiador e ar condicionado</p>
                  <img src="service6.png" className="products__images__list" />
                </li>
                <li>
                  <h3>Radiador Preparado</h3>
                  <p>Radiador personalizado  seja de carro ou Moto,  caixa de alumino com maior durabilidade sob medida moto ou carro, Saiba mais!</p>
                  <img src="service7.jpg" className="products__images__list"/>
                </li>
              </ul>
              {/* <h4 className="products__store"> Clique aqui e Verifique nosso estoque!</h4> */}
            </div>
          </Grid>
        </Grid>
      </div>
    </s.Services>
  )
}

export default Services
