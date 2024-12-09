import React, { useEffect, useState } from 'react'
import Styles from './Styles/MovieInfo.module.css'
import { NavLink, useParams } from 'react-router-dom'
import Loading from './Loading'
const MovieInfo = () => {
    const { id } = useParams();
    const url = `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}`
    const [info, setInfo] = useState([])
    const [isLoad, setIsLoad] = useState(true)
    const [error, setError] = useState({ "Show": false, "Msg": "" })
    const getInfo = async (url) => {
        try {
            const res = await fetch(url)
            const data = await res.json()
            console.log(data)
            if (data.Response === "True") {
                setIsLoad(false)
                setInfo(data)
            }
            else {
                setError({
                    "Show": true,
                    "Msg": data.Error
                })
                setInfo({})
            }
        } catch (error) {
            console.log(error)
        }

    }
    useEffect(() => {
        getInfo(`${url}&i=${id}`)
    }, [])
    return (
        <>{isLoad ? <div className={Styles.loading_container}><Loading /></div> : < div className={Styles.container} >
            <div className={Styles.info_container}>
                <div className={Styles.poster}>
                    <img src={info.Poster} alt="" />
                </div>
                <div className={Styles.movieDetails}>
                    <h2>{info.Title}</h2>
                    <p>{info.Released}</p>
                    <p>{info.Genre}</p>
                    <p>{info.imdbRating}/10</p>
                    <p>{info.Country}</p>
                    <NavLink to="/" className={Styles.navl}>Go Back</NavLink>
                </div>
            </div>
        </div >}
        </>
    )
}

export default MovieInfo
