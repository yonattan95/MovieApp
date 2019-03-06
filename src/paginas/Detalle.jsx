import React from 'react';
import Destacado from '../componentes/Destacado';
import styled from 'styled-components';
import { getCastPelicula, getPelicula } from '../redux/actions/movies';
import { connect } from 'react-redux';
import Header from '../componentes/Header';

const ListaCast = styled.ul`
    display: flex;
    overflow-x: scroll; 
    list-style: none;
    margin: 0;

    >li{
        padding: .5rem;
        text-align: center;
    }
`;


const ImagenCast = styled.img`

`;

class Detalle extends React.Component {

    componentDidMount() {
        this.props.getPelicula(this.props.match.params.idPelicula);
        this.props.getCastPelicula(this.props.match.params.idPelicula);
    }

    render() {
        return (
            <div>
                <Header>
                    <div>Hola que hace .net</div>
                    <div>{this.props.test.fecha}</div>
                </Header>
                <Destacado pelicula={this.props.movies.pelicula} />
                <ListaCast >
                    {this.props.movies.cast.map(p => {
                        return (
                            <li key={p.cast_id}>
                                <ImagenCast src={p.profile_path ? `https://image.tmdb.org/t/p/w185/${p.profile_path}` : `https://dummyimage.com/185x278/000000/ffffff&text=not+found`} alt="" />
                                <p>{p.character}</p>
                                <p>({p.name})</p>
                            </li>
                        )
                    })}
                </ListaCast>
            </div>
        );
    }

}

function mapStateToProps(store) {
    return {
        movies: store.movies,
        test: store.test
    }
}


export default connect(mapStateToProps, { getCastPelicula, getPelicula })(Detalle);