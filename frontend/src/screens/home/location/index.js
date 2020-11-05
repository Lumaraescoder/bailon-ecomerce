import React from 'react'
import * as s from './style'
import { Grid } from '@material-ui/core'

const Location = () => {
  return (
    <s.Location>
      <Grid container justify="center">
        <div className="location">
          <Grid >
            <h2 className="location__title">Localização</h2>
            <p className="location__description">Estamos localizados na Rua Pedrália 504 - Vila Gumercindo, São Paulo - CEP 04130-080 </p>
          </Grid>
          <Grid container direction="row" justify="flex-start" alignItems="center">
            <Grid item xs={6}>
              <div className="addres">
                <ul className="location__uno" >
                  <li><strong>Endereço:</strong></li>
                  <li><s.HomeIcons /> <a>Rua pedrália 504</a></li>
                </ul>
                <ul className="location__uno" >
                  <li><strong>Telefone:</strong></li>
                  <li><s.PhoneIcons /> <a>11 9594118997</a></li>
                </ul>
                <ul className="location__uno" >
                  <li><strong>E-mail</strong></li>
                  <li><s.EmailIcons /> <a>radiadoresbailon@terra.com.br</a></li>
                </ul>
              </div>
            </Grid>

            <Grid item xs={6}>
              <div className="frame">
                <iframe
                  className="frame__position" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.924952123555!2d-46.6188846!3d-23.6070243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5bbba72b0e69%3A0x7ecef47fad606e2b!2sRadiadores%20e%20Ar%20Condicionado%20Bailon!5e0!3m2!1spt-BR!2sbr!4v1570138419213!5m2!1spt-BR!2sbr"
                ></iframe>
              </div>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </s.Location>
  )
}
export default Location
