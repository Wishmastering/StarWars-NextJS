"use client"
import axios from "axios"
import { useState, useEffect } from "react";

export default function VehicleInfo({params}){

    // const [vehicleInfo, setVehicleInfo] = useState(null)  // Initialize the state with a null value

    // const getInfo = async () => {
        
    //     return await axios.get('https://swapi.tech/api/vehicle/'.concat(params))
    //     .then ((response) => {
    //         // setVehicleInfo(response.data);
    //         console.log(response.data);
    //     }) 
        
    //     .catch (function (error) {
    //       console.log(error);
    //     })
    //   }

    //   useEffect(() => {
    //     getInfo()
    // }, []) // The empty array ensures that the effect is only run on mount

    // return<>

    // </>
    const [info,setInfo] = useState([]);
 const [isLoading, setIsLoading] = useState(true);
 const [errorMessage, setErrorMessage] = useState('');

 const fetchData = async () =>{
    return await axios.get(`https://www.swapi.tech/api/starships/${params.id}`)
    .then( (response) => {
        setInfo(response.data.result.properties);
        setIsLoading(false);
        console.log(response.data.result.properties);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
 }

useEffect(()=> {fetchData()},[])

useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (isLoading) {
        setErrorMessage('Seems Like There Is No Results For Your Search, Please Try Again');
      }
    }, 4500);
    return () => clearTimeout(timeoutId);
  }, [isLoading]);

return(
    <div>
      {errorMessage ? (
        <p>{errorMessage}</p>
      ) : isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
        <div className='info-container'>
            <h1>{info.name}</h1>
            <Image src={`https://starwars-visualguide.com/assets/img/starships/${params.id}.jpg`} width={200} height={300} alt={info.name}/>
            <h2>{info.name} cargo capacity is: {info.cargo_capacity}</h2>
            <h2>{info.name} supplies last fot: {info.consumables} </h2>
            <h2>{info.name} needs a crew of: {info.crew} </h2>
            <h2>{info.name} maximum passengers is: {info.passengers} </h2>
        </div>
        <div className='next-div'>
            <div className='next-card'> <Link href={`/starships/${parseInt(params.id) + 1}`}> Go To Next Planet </Link></div>
            
            {parseInt(params.id) > 1 ?
            <div className='next-card'> <Link href={`/starships/${parseInt(params.id) - 1}`}> Go To Previous Planet </Link></div> : null}
        </div>
    </>
      )}
    </div>
    );
}