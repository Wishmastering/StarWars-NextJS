'use client'

import "../styles/globals.css"
import Peoplecard from './components/peoplecard';
import Planetcard from './components/planetcard';
import Starshipcard from "./components/starshipcard";
import Vehiclecard from "./components/vehiclecard";



export default function HomePage () {
    
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
    

            

            Hola Mundo
        </div>
    </>
}