import { useState, useEffect } from 'react'
import { Card, CardHeader, CardFooter, CardBody, CardTitle, CardText, CardImg } from 'reactstrap'
import {getUsuarios} from '../helpers/usuariosFetch'

const Usuarios = () => {
const [usuarios, setUsuarios] = useState({
  loading: true,
  datos: []
})

useEffect(() => {
  getUsuarios().then(response => {
    console.log(response)
    setUsuarios({
      loading: false,
      datos: response
    })
  })
}, [])

  return (
    <div className="row row-cols-1 row-cols-md-2">
    {usuarios.loading ? <h3>Cargando...</h3> : usuarios.datos.data.map((usuario, index) => (
      <div className="col-12 col-md-4 mb-3" key={index}>
        <Card className="h-100 text-center">
        <CardHeader>
          <CardImg className = ' mx-auto rounded-circle w-75' src={usuario.avatar}></CardImg>
         <CardTitle className = 'mx-auto mt-3'>{usuario.first_name} {usuario.last_name}</CardTitle>
        </CardHeader>
        <CardBody >
         <CardText>{usuario.email}</CardText>
        </CardBody>
      </Card>
      </ div>
       ))
  }
  
  </div>
  )
}

export default Usuarios
