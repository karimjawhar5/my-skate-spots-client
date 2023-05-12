import { useEffect, useState } from "react"
import getData from '../business/getData.jsx'

export default function Home() {
  const [data, setData] = useState()
  useEffect(() => {
    const fetchData = async () => {
    const URL = 'http://localhost:4000/auth/account';
    const response = await getData(URL);
    if(response){
      setData(response.username)
    }else{
      setData("go Loggin!")
    }
    
    };
  
    fetchData();
  }, []);
  

  return (
   <div>
    <h1>{data}</h1>
   </div>
  )
}
