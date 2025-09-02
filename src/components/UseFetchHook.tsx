import { useEffect } from "react"

export default function useFetch (url) {
    useEffect(() => {
        fetch(url).then(res => res.json()).then(data => console.log(data))
    })
}