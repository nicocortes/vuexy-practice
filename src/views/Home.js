import { useState, useEffect } from 'react'
import { Card, CardHeader, CardFooter, CardBody, CardTitle, CardText, CardImg } from 'reactstrap'

import {getCursos} from '../helpers/cursosFetch'

const Home = () => {

const [cursos, setCursos] = useState({
  loading:true,
  datos:[]
})

useEffect(() => {
 getCursos().then(respuesta => {
    console.log(respuesta)
setCursos({
  loading:false,
  datos:respuesta
})

  })
}, [])

  return (
    <div class="row row-cols-1 row-cols-md-2">
    {cursos.loading ? <h3>Cargando...</h3> : cursos.datos.map((curso, index) => (
      <div className="col-12 col-md-4 mb-3" key={index}>
        <Card className="h-100">
        <CardHeader>
          <CardImg src={curso.thumbnail}></CardImg>
          <div className="w-100 d-flex justify-content-between my-2">
          <span className="badge badge-info">{curso.category[0]}</span>
          <span className="badge badge-warning">{curso.original_price}</span>
          </div>
         
          <CardTitle>{curso.title}</CardTitle>
        </CardHeader>
        <CardBody>
         <CardText className="d-none d-md-block">{curso.description}</CardText>
         <CardText>Cupon: {curso.coupon_code}</CardText>
        
        </CardBody>
        <CardFooter>
        <a className="btn btn-primary btn-block" href={curso.url} target='_blank'>Ver mas..</a>
        </CardFooter>
      </Card>
      </ div>
       ))
  }
  
  </div>

    // <div>
    //   <Card>
    //     <CardHeader>
    //       <CardTitle>Kick start your project 🚀</CardTitle>
    //     </CardHeader>
    //     <CardBody>
    //       <CardText>All the best for your new project.</CardText>
    //       <CardText>
    //         Please make sure to read our{' '}
    //         <CardLink
    //           href='https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/documentation/'
    //           target='_blank'
    //         >
    //           Template Documentation
    //         </CardLink>{' '}
    //         to understand where to go from here and how to use our template.
    //       </CardText>
    //     </CardBody>
    //   </Card>

    //   <Card>
    //     <CardHeader>
    //       <CardTitle>Want to integrate JWT? 🔒</CardTitle>
    //     </CardHeader>
    //     <CardBody>
    //       <CardText>
    //         We carefully crafted JWT flow so you can implement JWT with ease and with minimum efforts.
    //       </CardText>
    //       <CardText>
    //         Please read our{' '}
    //         <CardLink
    //           href='https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/documentation/development/auth'
    //           target='_blank'
    //         >
    //           JWT Documentation
    //         </CardLink>{' '}
    //         to get more out of JWT authentication.
    //       </CardText>
    //     </CardBody>
    //   </Card>
    // </div>
  )
}

export default Home
