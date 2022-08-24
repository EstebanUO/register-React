import React,{useState,useEffect} from 'react'
import { Header } from '../../layouts/Header/Header'

export const Home = () => {

  //Metodo GET con axios
  const [apiList, setapiList] = useState("")

  useEffect(() => {
    const apiURL = "https://backend-edw.herokuapp.com/usuarios"

    const asyncFetchData = async() =>{
      const res = await fetch(apiURL)
      const data = await res.json()
      console.log(data);
    }
    asyncFetchData();

  }, [])
  
  




  return (
    <div>
        <Header/>
            <div className="contHome">
                <h2>Bienvenido al formulario de registro y login</h2><br /><br />
                  <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Tempore, porro. Soluta veniam voluptatem quisquam! 
                      Optio quibusdam dolores magnam dolore qui odit 
                      cum voluptatem eos incidunt eligendi velit, 
                      labore ullam veritatis!
                  </p>
                  <p className="lista"></p>
            </div>    
    </div>
  )
}
