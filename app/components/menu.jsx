"use client"

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
        <div onClick={()=> mostrar()} className=""><h1>Hola</h1></div>
    </>

   
}