//4. Crear un arreglo con objetos "alumno" y sus propiedades son nombre, 
// edad y calificaciones. Luego, escribir una función que calcule el 
// promedio de las calificaciones. 

export const EjercicioCuatro = () => {

    interface Alumnos {
        name: string;
        edad: number;
        calificacion: number;
    }

    const alumnos: Alumnos [] = [
        {
            name: 'Viviana',
            edad: 19,
            calificacion: 10
        },
        {
            name: 'Wendy',
            edad: 20,
            calificacion: 8
        },
        {
            name: 'Gerson',
            edad: 18,
            calificacion: 9
        }
    ];

    const calPromedio = (alumno:Alumnos):number =>{
        const sumaCalificaciones = alumno.calificacion + alumno.calificacion;
        const promedio = sumaCalificaciones / alumno.calificacion;
        return promedio;
    };
    
  return (
    <>
        <h3>Ejercicio 4</h3>
        <span>El promedio de las calificaciones es: {}</span>
    </>

  )
}
