
import { useEffect ,useState} from 'react';
import './App.css'

function App() {
  
  const [data, setData] = useState([])

useEffect( () => {

  
    const dataFetch = async () => {
      
      const data2 = await fetch('https://jsonplaceholder.typicode.com/todos/1')
   
    const res = await data2.json() ;

    setData(res)
  }
   dataFetch()
}
, [])


  return (
    <>
   <div>
   {data.map((item, index) => (
              <li key={index}>{item.title}</li>
            ))}
   </div>
      </>
      )
}

export default App
