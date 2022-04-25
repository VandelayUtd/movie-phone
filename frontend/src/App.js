import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import { getMovies, deleteMovie } from './redux/actions/movieActions';

import Home from './routes/home/home.component';
import MovieIndex from './components/movie-index/movie-index.component';
import Search from './routes/search/search.component';
import Nav from './components/nav/navbar.component';

import './App.css';

class App extends Component {
  
  componentDidMount() {
    this.props.getMovies()
  }
  render(){

    return (
      <div className='App' >
        <Routes>
          <Route path='/' element={<Nav />}>
            <Route index element={<Home/>}/>
            <Route path='/movies' element={<MovieIndex movies={this.props.movies} deleteMovie={this.props.deleteMovie}/>}/>
            <Route path='/movies/new' element={<Search />}/>
          </Route>
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({movies: state.movies.all})

const mapDispatchToProps = {
  getMovies,
  deleteMovie
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
