//3. Del siguiente arreglo devolver un nuevo arreglo con los valores divididos para 5.
// const arreglo = [5,10,15,20,25,30,35,40,45,50]

export const EjercicioTres = () => {

    const arregloNumeros = [5,10,15,20,25,30,35,40,45,50];
    
    const multArreglo  = arregloNumeros.map(x => x * 5);
    
  return (
    <>
        <h3>Ejercicio 3</h3>
        <span>El nuevo arreglo multiplicado por 5 es: {multArreglo.join(', ')}</span>
    </>
  )
}
