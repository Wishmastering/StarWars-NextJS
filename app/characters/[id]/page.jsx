'use client'
import axios from 'axios';
import { use, useEffect} from 'react';
import { useState } from 'react';
import Image from "next/image"
import Link from 'next/link';
import styles from "../../../styles/globals.css"

export default function CharacterInfo({params}){
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
    return await axios.get(`https://www.swapi.tech/api/people/${params.id}`)
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
    <div className='space'>
        <p>{errorMessage}</p>
    </div>
  ) : isLoading ? (
    <div className='space'>
        <p>Loading...</p>
    </div>
  ) : (
        <>
                <div className='info-container'>
                    <h1>{info.name}</h1>
                    <Image src={`https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`} width={200} height={300} alt={info.name}/>
                    <h2>{info.name} was born in {info.year}</h2>
                    <h2>{info.name} has <span style={{color : `${info.eye_color}`}}>{info.eye_color} </span> eye color</h2>
                    <h2>{info.name} has <span style={{color : `${info.hair_color}`}}>{info.hair_color}</span> hair color</h2>
                    <h2>{info.name} height is {info.height}cm</h2>
                    <h2>{info.name} gender is: {info.gender}</h2>
                </div>
            </>
          )}
                <div className='next-div'>
                    <div className='next-card'> <Link href={`/characters/${parseInt(params.id) + 1}`}> Go To Next Character </Link></div>
                    {parseInt(params.id) > 1 ?
                    <div className='next-card'> <Link href={`/characters/${parseInt(params.id) - 1}`}> Go To Previous Character </Link></div> : null}
                </div>
      </div>
       
       
       
    )}
