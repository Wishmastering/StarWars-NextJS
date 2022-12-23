

export default function Characterinfo({params}){
// Aca debo usar el params para el NUEVO FETCH y traer la informacion COMPLETA del "personaje/vehicle/starships/planets"

return<>
{/*  
CON ESTE PARAMS ID DEBO HACER EL NUEVO
 FETCH (usando axios) Y ESTE PARAMS SERA LA PARTE FINAL DEL LINK/RUTA  
 `${params.id}` para dinamicamente traer lo que queremos
 */}
    <h1>{params.id}</h1>
</>
}