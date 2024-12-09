import React from 'react'
import styles from './Styles/MovieCard.module.css'
const MovieCard = ({ movies }) => {
    const title = movies.Title
    const movieName = title.substring(0, 15)

    return (
        <div className={styles.card}>

            <div className={styles.title}><text>{movieName.length >= 15 ? `${movieName} ....` : `${movieName}`}</text></div>
            <div><img src={movies.Poster} alt="" /></div>
        </div>
    )
}

export default MovieCard
