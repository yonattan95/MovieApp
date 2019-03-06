import React from 'react';
import Destacado from '../componentes/Destacado';
import Estrenos from '../componentes/Estrenos';
import { connect } from 'react-redux';
import Titulo from '../componentes/Titulo';
import { getEstrenos, getProximosEstrenos } from './../redux/actions/movies';
import ResultContainer from '../componentes/ResultContainer';
import Header from '../componentes/Header';
import Search from '../componentes/Search';
import { searchMovies, cleanSearch } from '../redux/actions/search';

class Home extends React.Component {

    state = {
        titleMovie:""
    }

    componentDidMount() {
        this.props.getEstrenos();
        this.props.getProximosEstrenos();
    }

    searchMovies = (e) => {
        e.preventDefault();
        const titleMovie = e.target.value;
        this.setState({titleMovie})
        this.props.searchMovies(titleMovie);
    }

    cleanSearch = (e)=>{
        e.preventDefault();
        this.setState({titleMovie:""});
        this.props.cleanSearch();
    }

    render() {
        const movies = this.props.search.movies;
        if (movies.length == 0) {
            return (
                <div>
                    <Header>
                        <div>Hola que hace .net</div>
                        <Search titleMovie={this.state.titleMovie} searchMovies={this.searchMovies} />
                        <div>{this.props.test.fecha}</div>
                    </Header>
                    <Destacado pelicula={this.props.movies.destacado} />
                    <Titulo>En cartelera</Titulo>
                    <Estrenos peliculas={this.props.movies.estrenos ? this.props.movies.estrenos : []} />
                    <Titulo>Proximamente</Titulo>
                    <Estrenos peliculas={this.props.movies.proximos_estrenos ? this.props.movies.proximos_estrenos : []} />
                </div>
            );
        } else {
            return (
                <div>
                    <Header>
                        <div>Hola que hace .net</div>
                        <Search titleMovie={this.state.titleMovie} clean={this.cleanSearch} searchMovies={this.searchMovies} />
                        <div>{this.props.test.fecha}</div>
                    </Header>
                    <ResultContainer movies={movies} />
                </div>
            )
        }
    }

}

function mapStateToProps(store) {
    return {
        movies: store.movies,
        search: store.search,
        test: store.test
    }
}

export default connect(mapStateToProps, { getEstrenos, getProximosEstrenos, searchMovies, cleanSearch })(Home);