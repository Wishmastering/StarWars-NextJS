'use client'
import Link from 'next/link';
import "../../styles/globals.css";
import logo from "../../public/logo.png"
import Image from 'next/image';


 export default function Navbar (){
    // Funcion que muestra el MENU o HOME como el boton de where2day
    const mostrar = ()=>{
        let elem = document.getElementById("menu");
        let home = document.getElementById("home");
        if(elem.style.display == "none"){
            elem.style.display = "block"
            home.style.display = "none"

        }else{
            elem.style.display = "none"
            home.style.display = "block"
            }
        }

    return<nav>
   <Link href={"/"}><div><Image src={logo} className="logo"></Image></div></Link>
    {/* <div> Favorite Button</div> */}
    <div onClick={()=> mostrar()}> Favorite Button</div>
</nav>
}