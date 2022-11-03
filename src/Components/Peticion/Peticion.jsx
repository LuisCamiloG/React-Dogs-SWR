import useSWR from 'swr'

const fetcher = (...url) => {
    return fetch(...url).then(res => res.json())
}

const Peticion = (urlDog) => {
    const { data, error } = useSWR(urlDog, fetcher)

    return {
        dog: data,
        isLoading: !error && !data,
        isError: error
    }
}
export default Peticion;