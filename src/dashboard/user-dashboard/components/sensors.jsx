import {  useState, useEffect } from "react"

const Sensors = () => {
    const [fetchedData, setFetchedData] = useState({});

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(d => d.json())
        .then(data => {
            setFetchedData(data)
            console.log(data)
        })
         }, [])

    return(
        <>
        <h1>this is sensors main data</h1>
        <br />
        {fetchedData.id}
        {fetchedData.title}
        </>
    )
}

export default Sensors;