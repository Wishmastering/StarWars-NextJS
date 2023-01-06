"use client"
import Link from "next/link";

export default function Menu(){
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

    return<>
      {/* <div className="menu">
        <div onClick={()=>{mostrar()}}>Close</div>
        <h2><Link href={'https://github.com/Charlytoc'} >Github</Link></h2>
        <h2><Link href={'https://www.instagram.com/charlytoc/'} >Instagram</Link></h2>
        <h2><Link href={'https://www.linkedin.com/in/charlytoc/'} >Linkedin</Link></h2>
        <h2><Link href={'/contact'} >Contact</Link></h2>
        </div> */}
        <div className="menu">
            <div className="op"> Hello </div>
            <div onClick={()=> mostrar()} className="close"> Exit</div>
        </div>
        <div className="links">
        <Link href="https://www.linkedin.com/in/carlos-i-carranza" target={"_blank"}><h1 className="hover">Linkedin</h1></Link>
        <Link href="https://github.com/Wishmastering" target={"_blank"}><h1 className="hover">Github</h1></Link>
        <Link href={"/characters/1"} onClick={()=>mostrar()}><h1 className="hover">Characters</h1></Link>
        <Link href={"/planets/2"} onClick={()=>mostrar()}><h1 className="hover">Planets</h1></Link>
        <Link href={"/starships/5"} onClick={()=>mostrar()}><h1 className="hover">Starships</h1></Link>
        <Link href={"/vehicles/4"} onClick={()=>mostrar()}><h1 className="hover">Vehicles</h1></Link>
        </div>
    </>   
}