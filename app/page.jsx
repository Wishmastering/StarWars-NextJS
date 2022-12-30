'use client'

import "../styles/globals.css"
import Peoplecard from './components/peoplecard';
import Planetcard from './components/planetcard';
import Starshipcard from "./components/starshipcard";
import Vehiclecard from "./components/vehiclecard";
import Image from "next/image";
import logo from "../public/logo.png"
import Link from "next/link";
import { useState, useEffect } from "react";



export default function HomePage () {
    

    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, []);

    return <>
    {isLoading ? (
      <p>Loading...</p>
    ) : (
        <div> 
           {/* Titulo  de Introduccion al proyceto*/}
            <div>
                <h1 className="title">Welcome To The Star Wars Blog By: <Link href="https://github.com/Wishmastering" target="_blank">Carlos Carranza</Link></h1>
            </div>

            {/* Seccion Characters  */}
            <h1> Characters </h1>
            {/* Aca empiezan las cards */}
            <Peoplecard/>

            {/* Seccion Planets  */}
            <h1> Planets </h1>
            <div>
            <Planetcard/>
            </div>

            {/* Seccion Vehicles  */}
            <h1> Vehicles </h1>
             <Vehiclecard/>

            {/* Seccion Starships */}
            <h1> Starships </h1>
            <Starshipcard/>
        </div>
        )}
    </>
}

// const [isLoading, setIsLoading] = useState(true);
// const [people, setPeople] = useState(null);
// const [planets, setPlanets] = useState(null);
// const [vehicles, setVehicles] = useState(null);
// const [starships, setStarships] = useState(null);

// useEffect(() => {
// Promise.all([
// // load people data asynchronously
// fetch("https://www.swapi.tech/api/people")
// .then((res) => res.json())
// .then((data) => setPeople(data))
// .then(() => setIsLoading(false)),
// // load planets data asynchronously
// fetch("https://www.swapi.tech/api/planets")
// .then((res) => res.json())
// .then((data) => setPlanets(data)),
// // load vehicles data asynchronously
// fetch("https://www.swapi.tech/api/vehicles")
// .then((res) => res.json())
// .then((data) => setVehicles(data)),
// // load starships data asynchronously
// fetch("https://www.swapi.tech/api/starships")
// .then((res) => res.json())
// .then((data) => setStarships(data))
// ]);
// }, []);

// if (isLoading) {
// return <p>Loading...</p>;
// }

// return (<>
//     {/* {/* render people data /} */}
//     {people && (
//     <div>
//         <h1>People</h1>
//             <div className='card-container'>    
//                 {people.results.map((item, index) => (
//                 <div key={index}>
//                     <div className="cardi-b" key={index}>
//                         <h5>{item.name}</h5>
//                         <Image src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} 
//                         width={200} height={200} alt={item.name}/>
//                         <div>
//                             <Link href={`/characters/${item.uid}`}><h5>Learn More</h5></Link>
//                             <h5>Read Later</h5>
//                         </div>
//                     </div>
//                 </div>
//                 ))}
//             </div>
//     </div>
//     )}
//     {/* {/ render planets data /} */}
//     {planets && (
//     <div>
//         <h1>Planets</h1>
//         <div className="card-container">
//             {planets.results.map((item, index) => (
//             <div className='cardi-b' key={index}>
//                 <h5>{item.name}</h5>
//                 <Image src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`} width={200} height={200} alt={item.name}/>
//                 <div>
//                     <h5><Link href={`/planets/${item.uid}`}>Learn More</Link></h5>
//                     <h5>Read Later</h5>
//                 </div>
//             </div>
//         ))}
//         </div>
//     </div>
// )}
//     {/* {/ render vehicles data */} 
//     {vehicles && (
//     <div>
//         <h1>Vehicles</h1>
//         <div className="card-container">
//             {vehicles.results.map((item, index) => (
//             <div className="cardi-b" key={index}>
//                 <h5> {item.name}</h5>
//                 <Image src={`https://starwars-visualguide.com/assets/img/vehicles/${item.uid}.jpg`} width={200} height={200} alt={item.name}/>
//                 <div>
//                     <h5><Link href={`/vehicles/${item.uid}`}> Learn More </Link></h5>
//                     <h5>Read Later</h5>
//                 </div>
//             </div>
//             ))}
//         </div>
//     </div>
//     )}
// {/* render starships data */}
// {starships && (
//     <div>
//         <h1>Starships</h1>
//         <div className="card-container">
//             {starships.results.map((item, index) => (
//             <div className="cardi-b" key={index}>
//                 <h5> {item.name}</h5>
//                 <Image src={`https://starwars-visualguide.com/assets/img/starships/${item.uid}.jpg`} width={200} height={200} alt={item.name}/>
//                 <div>
//                     <h5><Link href={`/starships/${item.uid}`}>Learn More </Link></h5>
//                     <h5>Read Later</h5>
//                 </div>
//             </div>
//             ))}
//         </div>
//     </div>
// )}
// </>
// );
// }