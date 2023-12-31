import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Th, Td } from './style'
import { URL, API_KEY } from '../../url'

export const Grid = ({ bodega_id, modelo_id, marca_id }) => {
  const [datos, setData] = useState([])
  useEffect(() => {

    axios({
      method: 'get',
      url: URL + 'dispositivos/DispositivosPorBodega?id_bodega=' + bodega_id + '&id_marca=' + marca_id + '&id_modelo=' + modelo_id + '&api_key=' + API_KEY,
      responseType: 'stream'
    })
      .then(function (response) {
        setData(JSON.parse(response.data))

      });

  }, [bodega_id, modelo_id, marca_id])


  return (
    <table>
      <tr>
        <Th>Id</Th>
        <Th>Nombre</Th>
        <Th>Marca</Th>
        <Th>Modelo</Th>
        <Th>Bodega</Th>
      </tr>
      {

        datos.map(item => (<tr>
          <Td>{item.id}</Td>
          <Td>{item.name}</Td>
          <Td>{item.modelo.marca.name}</Td>
          <Td>{item.modelo.name}</Td>
          <Td>{item.bodega.name}</Td>
        </tr>))

      }

    </table>
  )
}
