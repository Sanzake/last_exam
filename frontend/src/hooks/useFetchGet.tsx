import { useEffect, useState } from "react";

export default function useFetchGet(url: string, headers?: object) {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    

    useEffect(() => {
        if (!url) {
            setData(null)
            setError(null)
            setLoading(false)
            return
        }
        setError(null)
        setLoading(true)

        let params = {}
        if (headers) {
            params = {headers: headers}
        }
        fetch(url, params)
        .then(res => {
            if (!res.ok) {
                throw new Error(`Error!!! response.ok - ${res.ok}`)
            }
            return res.json()
        })
        .then(result => {
            setData(result)
        })
        .catch(error => {
            setError(error)
        }) 
        .finally(() => {
            setLoading(false)
        })
    }, [url])
    return { data, error, loading}
}