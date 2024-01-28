import { useState } from "react"

export const EjercicioQuinto = () => {

  const [valor, setValor] = useState (0);

  const contador = (num : number) =>{
    setValor(valor + num);
  }

  return (
    <>
        <h3>Ejercicio 5</h3>
        <h2>Contador: <small>{valor}</small></h2>
        <br />
        <button className="btn btn-primary"
        onClick={()=>contador(+5)}>+5</button>
        &nbsp;
        <button className="btn btn-primary" 
        onClick={() => contador(-5)}>-5</button>
    </>
  )
}
