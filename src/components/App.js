// create your App component here
import React,{useState,useEffect} from "react";
const App = () => {
    
    const[dogImage,SetDogImage]=useState(null)
    const[isLoaded,SetisLoaded]=useState(false)
    useEffect(() => {

        fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => res.json())
        .then((data) => {

            SetDogImage(data.message)
            SetisLoaded(true)
        })
    },[])


        if (!isLoaded) {
            return  <p>Loading...</p>
        }else{
            return  <img src={dogImage} alt='A Random Dog'></img>
        }
         
        



}
export default App;