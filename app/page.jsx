'use client'
import axios from 'axios';
import "../styles/globals.css"
import Image from "next/image"
import luke from  "../public/Luke.webp"
import { useEffect, useState } from 'react';
import Peoplecard from './components/peoplecard';
import Planetcard from './components/planetcard';


export default function HomePage () {
    const [people, setPeople] = useState([]);
    const [planet, setPlanet] = useState([]);

    const fetch = async () => {
       return await axios.get("https://swapi.dev/api/people")
        .then( (response) => {
            setPeople(response.data.results);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    };

    useEffect(() => {fetch()}, [] );
    console.log(people);

   

    return <>
        <div> 
            {/* Este es el Navbar */}
            <nav>
                <div> Star Wars Logo</div>
                <div> Favorite Button</div>
            </nav>
            
            {/* Titulo  de Introduccion al proyceto*/}
            <div>
                <h1 className="title">Welcome To The Star Wars Blog - By Carlos Carranza </h1>
            </div>

            {/* Seccion Characters  */}
            <h1> Characters </h1>
            {/* Aca empiezan las cards */}
            <div className="card-container">
                {people.map((item,index) => <div key={index}> <Peoplecard name={item.name} /> </div> )}
            </div>

            {/* Seccion Planets  */}
            <h1> People </h1>
            <div>
                {planet.map((item, index) => <div key={index}> <Planetcard name={item.name}/></div>)}
            </div>
            {/* Seccion Vehicles  */}
            <h1> Vehicles </h1>


            

            Hola Mundo
        </div>
    </>
}