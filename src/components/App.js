import { useState, useEffect } from 'react'

// create your App component here
function App() {
    const [dogsFetch, setDogsFetch] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(res => res.json())
            .then((dogs) => {
                setDogsFetch(dogs.message)
                setIsLoaded(true)
            })
    }, [])

    return (
        <>
        {isLoaded ? <img src={dogsFetch} alt="A Random Dog"></img> : <p>Loading...</p>}
        </>
    )
}

export default App;