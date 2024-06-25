import { useState } from "react";

const Agregar = ({lista})=>{
    
    const [titulo,setTitulo] = useState("")

    const createPost=async()=>{
        try {
                   const response = await fetch('http://localhost:3000/api/task/', {
                     method: 'POST',
                     headers: {
                       'Content-Type': 'application/json'
                    },
                     body: JSON.stringify({
                       content:titulo,
                     })
                   });
                   if (!response.ok) {
                     throw new Error('Network response was not ok ' + response.statusText);
                   }
                   const data = await response.json();
                   console.log(data); // Procesar la respuesta del servidor
                 } catch (error) {
                   console.error('There has been a problem with your fetch operation:', error);
                 }
               }
    
    return(
        <>
         <>
             <nav>
                <div className="agregar">
                 <input className="tarea" id="input" type="text" onChange={(e)=>setTitulo(e.target.value)} />
                 <button className="btnAgregar" onClick={createPost}>Agregar</button>
                </div>
             </nav>
         </>                
        </>
    )
}
export default Agregar
