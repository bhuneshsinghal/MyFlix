import React from 'react'
import { useGlobalContext } from '../context'
import MovieCard from './MovieCard'
import styles from './Styles/Movies.module.css'
import { NavLink } from 'react-router-dom'
const Movies = () => {
    const { movie } = useGlobalContext()
    return (
        <>
            {console.log(movie)}
            <section>
                <div className={styles.movie_card}>
                    {movie.map((m => {
                        return <NavLink to={`movie/${m.imdbID}`}><MovieCard movies={m} key={m.imdbID}></MovieCard></NavLink>
                    }))}
                </div>
            </section>
        </>
    )
}

export default Movies
