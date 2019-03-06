import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Contenedor = styled.div`    
    background: red;
`;

const Lista = styled.ul`
    overflow: scroll;
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
`;

const Item = styled(Link)`
    flex: 1 0 auto;
    width: 350px;
    height: 500px;
    background: url(${props=> `https://image.tmdb.org/t/p/w342${props.url_imagen}`});
    background-size: cover;
    margin: 1rem;
    &:hover{
        >span{
            display: flex;
        }
    }
    >span{
        display:none;
        background: rgba(0,0,0,.7);        
        height: 100%;
        justify-content: center;
        align-items: center;
        color: white;
        font-weight: bold;
        font-size: 1.5rem;
        font-family: cursive;
        text-align:center;
    }

`;

export default (props) => {
    return (
        <Contenedor>
            <Lista>
                {props.peliculas.map(p => <Item url_imagen={p.poster_path} key={p.id} to={`/detalle/${p.id}`}> <span>{p.title}</span> </Item>)}
            </Lista>
        </Contenedor>
    );
}