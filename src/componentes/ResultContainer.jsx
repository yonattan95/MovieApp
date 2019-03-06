import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components';


const ResultContainer = styled.div`
    display: flex;
    flex-wrap : wrap;
    justify-content: space-evenly;
`;

export default (props) => {
    return(
        <ResultContainer>
            {props.movies.map(m=> <Link to={`/detalle/${m.id}`}><img src={`https://image.tmdb.org/t/p/w342${m.poster_path}`} alt="xd" key={m.id}/></Link>)}
          </ResultContainer>
    );
}



