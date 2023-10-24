import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Select, Container } from './style'
import { URL, API_KEY } from '../../url'

export const Combobox = ({ titulo, url, setVariable, variable = '' }) => {
  const [datos, setDatos] = useState([])
  useEffect(() => {
    setVariable('');
    axios({
      method: 'get',
      url: URL + url,
      responseType: 'stream'
    })
      .then(function (response) {
        setDatos(JSON.parse(response.data))

      });

  }, [variable])

  return (
    <Container>
      <Select onChange={(event) => setVariable(event.target.value)}>
        <option value={''}>{titulo}</option>
        {

          datos.map(item => (<option value={item.id} key={item.id}>{item.name}</option>))

        }</Select>
    </Container>
  )
}
