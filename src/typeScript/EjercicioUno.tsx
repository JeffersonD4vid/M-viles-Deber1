//1.Crear una función con parámetros que permita calcular el área de un cuadrado.

export const EjercicioUno = () => {

    const calcularArea =(lado:number)=>{
        return lado * lado;
    }
    return(
        <>
            <h3>Ejercicio 1</h3>
            <span>El area del cuadrado es: {(calcularArea(5))} </span>
        </>
    )
}