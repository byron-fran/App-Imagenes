import styled from '@emotion/styled'
import React, { useState } from 'react'
import getData from '../api/api'

const Formualrio = styled.form`
    position: relative;
    margin: 0 auto;


`;
const Absoluto = styled.div`
    position: absolute;
    margin-top: 20rem;
    width: 80%;
    display:flex;
    flex-direction: column;
    @media(min-width: 768px){
        flex-direction: row;

    }


`;
const InputTexto = styled.input`
    position:absolute:
    margin-top: 15rem;
    display: block;
    height: 1.7rem;
    border-radius: 10px;
    width: 100%;
    margin: 0 auto;
`;
const InputButton = styled.input`
    height: 2rem;
    width:100%:
    margin: 0 auto;
    border-radius: 10px;
    background: #167CE2;
    color: white;
    border: none;
    font-size:1.5rem;
    font-weigth: bold;
    @media(min-width: 768px){
        width: 20%;
    }

`;

const Titulo = styled.h1`
    text-align:center;
    margin: 0;
    color: white;
    font-size: 4rem;
    font-weigth: bold;
`;

const Formulario = ({setAddACategory}) => {
    const [nombre, setNombre] = useState('')
  
    const handleSubmit = (e)=>{
        e.preventDefault()

        if(nombre.trim().length<=1) return;
 
       setNombre('')
       //setAddACategory([nombre, ...addCategory])
        //console.log(addCategory)
  
       getInfo(nombre)
   
      
    }

    async function getInfo(nombre){
        const info = await getData(nombre);
        const newData = info.hits
   
        setAddACategory(newData)
    }
  return (
    <Formualrio action="" onSubmit={handleSubmit}>
          <Titulo>Buscador de imagenes</Titulo>
        <Absoluto>
            <InputTexto type="text"  value={nombre} onChange={(e)=>setNombre(e.target.value)} placeholder='Buscar Imagenes'/>
            <InputButton type="submit" value="Buscar"  />
        </Absoluto>
      
    </Formualrio>
  )
}

export default Formulario