import { useState } from "react"

export const useFetching = (cb) => {
    const [isLoadong, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const fetching = async (...args) => {
        try {
            setIsLoading(true)
            await cb(...args)
        } catch (error) {
            setError(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    return [fetching, isLoadong, error]
}