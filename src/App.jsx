import { useState,useEffect } from 'react'
import Formulario from './components/Formulario'
import DataItem from './components/DataItem'
import styled from '@emotion/styled';
import ardilla from './img/ardilla.jpg'


const Grid = styled.div`
  display: grid;
  
  @media(min-width: 768px){
    grid-template-columns:repeat(2, 1fr);
    gap: 1rem;
  }
  @media(min-width: 990px){
    grid-template-columns:repeat(3, 1fr);
  }
    
`;


const Cabeza = styled.header`
  position: relative;
  background-image: url(${ardilla});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width:100%;
  height: 40rem;
  @media(min-width: 768px){
    height: 50rem;
  }


`;

function App() {
 const [addCategory, setAddACategory] = useState([])



  return (
    <>
      <Cabeza>
         
          <Formulario setAddACategory={setAddACategory} />
      </Cabeza>
      
      <Grid>
          {addCategory.map(elemento=>(
  
         <DataItem key={elemento.id} elemento={elemento}/>
          ))}
      </Grid>
     
   
    </>
  )
}

export default App
