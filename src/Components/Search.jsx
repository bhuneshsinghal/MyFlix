import React from 'react'
import styles from './Styles/Search.module.css'
import { useGlobalContext } from '../context'
const Search = () => {
    const { query, setQuery, isError } = useGlobalContext();
    return (
        <div className={styles.search_container}>
            <div className={styles.app_name}>
                <h2>MyFlix Movies</h2>
            </div>
            <form action="#" onSubmit={(e) => e.preventDefault()}>
                <div className={styles.search_bar}>
                    <input
                        type="text"
                        placeholder='Search Movie................'
                        className={styles.search_bar}
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>
            </form>
            {isError.show && (
                <div className={`${isError.show ? styles.show : styles.no_show}`}>
                    <p>{isError.show && isError.msg}</p>
                </div>
            )}


        </div>
    )
}

export default Search
