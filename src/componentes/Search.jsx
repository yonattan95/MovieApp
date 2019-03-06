import React from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
    border: 1px solid white;
    width: 300px;
    padding: .5rem;
    display: flex;
    align-content: center;
`;

const SearchInput = styled.input`
    border: none;
    margin: 0 1rem;
    color:yellow;
    flex: 1 0 auto;
    background: rgba(0,0,0,0);
    &::placeholder{
      color:yellow;
    }
    &:focus{
      outline: 0;
    }
`;

export default (props) => {
    return (
        < SearchContainer >
            <i className="fas fa-search" ></i>
            <SearchInput type="text" placeholder="buscar" onChange={props.searchMovies} value={props.titleMovie}/>
            <a href="#" onClick={props.clean}><i className="fas fa-times" ></i></a>
        </SearchContainer >
    )
}
