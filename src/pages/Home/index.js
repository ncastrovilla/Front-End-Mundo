import React, { useState } from 'react'
import { Combobox } from '../../components/Combobox'
import { Grid } from '../../components/Grid'
import { Filtros, Background, Container, Table, Titulo } from './style'

export const Home = () => {
    const [bodega, setBodega] = useState('')
    const [marca, setMarca] = useState('')
    const [modelo, setModelo] = useState('')
  
    return (
      <div>
        <Background>
        <Container>
        <Filtros>
            <Titulo>Filtros</Titulo>
        <Combobox titulo='Seleccione Bodega' url='bodegas/ObtenerBodega' setVariable = {setBodega}/>
        <Combobox titulo='Seleccione Marca' url='marcas/ObtenerMarcas' setVariable = {setMarca}/>
        {
          marca&&
        <>
        <Combobox titulo='Seleccione Modelo' url={'modelos/ObtenerModelosPorMarca?id_marca='+marca} setVariable = {setModelo} variable={marca}/>
        
        </>
        }
          </Filtros>
          <Table>
        {
          (bodega||marca||modelo)?<Grid bodega_id={bodega} modelo_id={modelo} marca_id={marca}/> : <h1>Sin Datos, Seleccione Filtros</h1>
        }
        </Table>
        </Container>
        </Background>
      </div>
    );
}
