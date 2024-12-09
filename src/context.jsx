import { createContext, useEffect, useState } from "react";
import { useContext } from "react";
const AppContext = createContext();
const URL = `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}`
const AppProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(true)
    const [movie, setMovie] = useState([])
    const [isError, setIsError] = useState({ show: "false", msg: "" })
    const [query, setQuery] = useState("titanic")
    const getMovies = async (URL) => {
        try {
            const res = await fetch(URL)
            const data = await res.json()
            if (data.Response === "True") {
                setIsLoading(false)
                setMovie(data.Search)
                setIsError({ show: "false", msg: "" })
            }
            else {
                setIsError({
                    show: true,
                    msg: data.Error
                })
                setMovie([])
            }
        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        const timerOut = setTimeout(() => {
            getMovies(`${URL}&s=${query}`);
        }, 1000);
        return () => clearTimeout(timerOut)

    }, [query, isError.show == false])

    return <AppContext.Provider value={{ isLoading, isError, movie, query, setQuery }}>
        {children}
    </AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobalContext };