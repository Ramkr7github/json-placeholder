
import { useEffect ,useState} from 'react';
import './App.css'

function App() {
  
  const [data, setData] = useState([])

useEffect( () => {

  
    const dataFetch = async () => {
      
      const data2 = await fetch('https://jsonplaceholder.typicode.com/todos/1')
   
    const res = await data2.json() ;

    setData(res)
    console.log(res)
  }
   dataFetch()
}
, [])


  return (
    <>
   <div className='card'>
   <h1>Title : {data.title}</h1>
   <h1>ID's: {data.id}</h1>

   </div>
      </>
      )
}

export default App
