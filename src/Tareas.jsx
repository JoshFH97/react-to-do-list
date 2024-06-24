const Tareas = ({lista}) => {



    return (
        <>
            <nav>
                <ul>
                    <li>{lista = ""}</li>
                </ul>
            </nav>
        </>
    )
}
export default Tareas

// GET request
async function fetchPosts() {
    try {
      const response = await fetch('https://api.example.com/posts');
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      const data = await response.json();
      console.log(data); // Procesar los datos obtenidos
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  }
  
  fetchPosts();