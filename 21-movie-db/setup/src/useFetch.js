import React, { useEffect, useState } from 'react';
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;
const useFetch = (urlParams) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState({ show: false, msg: '' });
    const [movies, setMovies] = useState(null);

    const fetchMovies = async (urlParams) => {
        setLoading(true);
        try {
            const response = await fetch(urlParams);
            const data = await response.json();
            if (data.Response === 'True') {
                setMovies(data.Search || data);
                setError({ show: false, msg: '' })
                setLoading(false)
            }
        } catch (error) {
            // eslint-disable-next-line no-undef
            setError({ show: true, msg: data.Error });

        }
    }
    useEffect(() => {
        fetchMovies(`${API_ENDPOINT}${urlParams}`);
    }, [urlParams])
    return { loading, error, movies }
};

export default useFetch;