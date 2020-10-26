import React, { useState, useEffect} from 'react'
import './App.css'


function App(){
  
  useEffect(() => {
    obtemMakeup()
  },[])

  const [makeUp , setMakeUp] = useState([])

  async function obtemMakeup(){ 
    let url = `http://makeup-api.herokuapp.com/api/v1/products.json`
    await fetch(url)
    .then(Response => Response.json())
    .then(data => {
      setMakeUp(data)
      console.log(data)
    })
    .catch(function (error){
      console.error(error.message)
    })
  }

 

  const dior = makeUp => makeUp.brand === "dior"

  const listaDior = makeUp.filter(dior)

  const listaMake = listaDior.map((dior)=>
      <tr key = {dior.id} >
    <td>{dior.brand}</td>
    <td>{dior.name}</td>
    <td>U${dior.price}</td>
    <td><img src={dior.image_link} alt= {dior.nome} title= {dior.nome} /></td>
  </tr>
  )

  return(

  <div>
      <h1>Lista Dior</h1>
      <table border="1" className="tabela">
        <thead className="Cabeçalho">
        <tr>
           <th>Marca</th>
           <th>Nome</th>
           <th>Preço</th>
           <th>Imagem</th>
         </tr>
        </thead>
        <tbody className="Corpo">
          {listaMake}
        </tbody>
      </table>
  </div>
  
  )
}

export default App