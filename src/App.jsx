
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
    console.log(setData)
  }
   dataFetch()
}
, [])


  return (
    <>
   <div>
   {data.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
   </div>
      </>
      )
}

export default App
