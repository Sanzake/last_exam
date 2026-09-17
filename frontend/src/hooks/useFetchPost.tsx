import { useState } from 'react'

export default function useFetchPost(url: string) {
    const [data, setData] = useState(null)
    const [error, setError] = useState<null | unknown>(null)
    const [loading, setLoading] = useState(false)

    
    const execute = async ( body: object) => {
        const fetchParams = {
            method: "post", 
            headers: {"Content-Type": "application/json"}, 
            body: JSON.stringify(body)
        }

        setError(null)
        setLoading(true)

        try {
            const res = await fetch(url, fetchParams)
            const result = await res.json()

            setData(result)
            return result
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
        
    }

    return {execute, data, error, loading}
}
