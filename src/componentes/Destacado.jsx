import React from 'react';
import styled from 'styled-components';


const Contenedor = styled.div`
    height:720px;
    background: url(${props => `https://image.tmdb.org/t/p/w1280${props.url_imagen}`});
    background-size: cover;
`;

const ContenedorInfo = styled.div`
    background : rgba(0,0,0,.5);
    width: 500px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const TituloInfo = styled.p`
    font-size: 4rem;
    color : white;
    padding: 0 1rem;
    text-align: center;
    margin-bottom : 4rem;
`;
const SipnosisInfo = styled.p`
    color : white;
    padding: 1rem;
    text-align: justify;
`;
const PuntuacionInfo = styled.p`
    color : white;
    margin-top : 4rem;
`;

export default (props) => {
    if(props.pelicula){
        return(
            <Contenedor url_imagen={props.pelicula.backdrop_path}>
                <ContenedorInfo>
                    <TituloInfo>{props.pelicula.title}</TituloInfo>
                    <SipnosisInfo>{props.pelicula.overview}</SipnosisInfo>
                    <PuntuacionInfo>{props.pelicula.vote_average}/10</PuntuacionInfo>
                </ContenedorInfo>
            </Contenedor>
        );
    }else{
        return <div>Cargando</div>
    }
}