import styled from '@emotion/styled';
import { useState } from 'react';

const Parrafo = styled.h2`
    text-align: center;
`;

const Imagen = styled.img`
    max-width: 100%;
    display:block;
    margin: 0 auto;
    border-radius: 10px;
   
`;
const Contenedor = styled.div`
    position: relative;
`;

const DataItem = ({elemento}) => {
    const {largeImageURL, tags    } = elemento;

    const [modal, setModal] = useState(false)

    const ImagenGrande = ()=>{
        console.log('haciendo grande')
        setModal(true)
        
    }
    
    
    
  return (
            <Contenedor>
                <Parrafo>{tags}</Parrafo>
                <Imagen onClick={ImagenGrande}  src={`${largeImageURL}`} alt="imagen_pexels" />

              
            </Contenedor>
  )
}

export default DataItem