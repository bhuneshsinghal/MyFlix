import React, { useContext } from 'react'
import Search from './Search'
import Movies from './Movies'
import styles from './Styles/Home.module.css'
import Loading from './Loading'
import { useGlobalContext } from '../context'
const Home = () => {
    const { isLoading } = useGlobalContext()
    return (
        <div className={styles.container}>
            <div className={styles.search}>
                <Search></Search>
            </div>
            {isLoading ? <Loading /> : <div><Movies></Movies></div>}

        </div>
    )
}

export default Home
