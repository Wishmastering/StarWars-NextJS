'use client'
import axios from 'axios';
import { use, useEffect} from 'react';
import { useState } from 'react';
import Image from "next/image"
import Link from 'next/link';
import styles from "../../../styles/globals.css"

export default function VehiclesInfo({params}){
// Aca debo usar el params para el NUEVO FETCH y traer la informacion COMPLETA del "personaje/vehicle/starships/planets"

{/*  
CON ESTE PARAMS ID DEBO HACER EL NUEVO
 FETCH (usando axios) Y ESTE PARAMS SERA LA PARTE FINAL DEL LINK/RUTA  
 `${params.id}` para dinamicamente traer lo que queremos
 */}

 const [info,setInfo] = useState([]);
 const [isLoading, setIsLoading] = useState(true);
 const [errorMessage, setErrorMessage] = useState('');

 const fetchData = async () =>{
    return await axios.get(`https://www.swapi.dev/api/vehicles/${params.id}`)
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
    }, 7000);
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
        <h2>{info.name} population is: {info.population}</h2>
        <h2>{info.name} climate is: {info.climate} </h2>
        <h2>{info.name} gravity is: {info.gravity} </h2>
        <h2>{info.name} terrain is: {info.terrain} </h2>
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