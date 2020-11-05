import React, { Component } from 'react'
import * as s from './style.js'
import Grid from '@material-ui/core/Grid'

const Products = (props) => {
  return (
    <s.Products>
      <div className="products">
            <h4 className="products__title">Produtos em destaque</h4>
            <hr />
      <Grid container justify="center">
          <div className="products__images">
            <ul className="products__uno">
              <li>
                <h3 className="">Radiadores</h3>
                <img src="radiator.jpg" className="products__images__list"/>
              </li>
              <li>
                <h3>Ventoinhas</h3>
                <img src="radiator.jpg" className="products__images__list" />
              </li>
              <li>
                <h3>Condensadores</h3>
                <img src="radiator.jpg" className="products__images__list"/>
              </li>
            </ul>
            <h4 className="products__store"> Clique aqui e Verifique nosso estoque!</h4>
          </div>
          </Grid>
      </div>
    </s.Products>
  )
}

export default Products
