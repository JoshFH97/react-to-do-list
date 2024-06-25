import React, { useEffect, useState } from 'react';

const Tareas = () => {
  const [tasks, setTasks] = useState([]); // Definir el estado para almacenar las tareas

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:3000/api/task/');
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        console.log('Datos recibidos:', data); // Agregar console.log para depuración
        setTasks(data); // Actualizar el estado con los datos obtenidos
      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
      }
    }
    fetchData(); // Llamar a fetchData dentro de useEffect
  }, [tasks]); // Cada vez que cambien va  ejecutar el useefect

  // DELETE request
  const deletePost = async (postId) => {
    try {
      const response = await fetch(`http://localhost:3000/api/task/${postId}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      const data = await response.json();
      console.log(data); // Procesar la respuesta del servidor

      // Actualizar el estado para eliminar la tarea borrada
      setTasks(prevTasks => prevTasks.filter(task => task.id !== postId));
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  }

  return (
    <>
      <nav>
        <div className='tareas'>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task.content}
              <button onClick={() => deletePost(task.id)}>🗑️</button> {/* Botón para eliminar */}
            </li>
          ))}
        </ul>
        </div>
      </nav>
    </>
  );
}

export default Tareas;




//   // DELETE request
// async function deletePost(postId) {
//   try {
//     const response = await fetch(`http://localhost:3000/api/task/`, {
//       method: 'DELETE'
//     });
//     if (!response.ok) {
//       throw new Error('Network response was not ok ' + response.statusText);
//     }
//     const data = await response.json();
//     console.log(data); // Procesar la respuesta del servidor
//   } catch (error) {
//     console.error('There has been a problem with your fetch operation:', error);
//   }
// }

// deletePost(1);
