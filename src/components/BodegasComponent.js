import React, {useEffect, useState} from 'react'
import axios from 'axios'

export const BodegasComponent = ({titulo,url,setVariable,variable = ''}) => {
  
    const [datos, setDatos] = useState([])
    useEffect(() => {

        axios({
          method: 'get',
          url: 'http://127.0.0.1:8000/api/'+url,
          responseType: 'stream'
        })
          .then(function (response) {
            setDatos(JSON.parse(response.data))
            console.log(typeof datos)
            
          });
  
      }, variable)

    return (
    <div>
        <select onChange={(event)=>setVariable(event.target.value)}>
      <option defaultValue hidden>{titulo}</option>
      {
        
        datos.map(item=>(<option value={item.id} key={item.id}>{item.name}</option>))

        }</select>
    </div>
  )
}
