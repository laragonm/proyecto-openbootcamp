/**
 * Ejemplo de uso del Hook useState
 * 
 * Idea: Crear un componente del tipo funcion y acceder a su estado
 * privado a través de un hook y, además, poder modificarlo
 */

import React, { useState } from 'react';

const Ejemplo1 = () => {

    //Valos inicial para un contador
    const valorInicial = 0;

    //Valor inicial para una persona
    const personaInicial = {
        nombre: 'Martin',
        email: 'martin@gmail.com'
    }

    /**
     * Queremos que el valorInicial y personaInicial sean parte
     * del estado del componete para asi poder gestionar su cambio
     * y que este se vea reflejado en la vista del componente
     * 
     * const [nombreVariable, funcionParaCambiar] = useState(valorInicial);
     */

    const [contador, setcontador] = useState(valorInicial);
    const [persona, setpersona] = useState(personaInicial);

    /**
     * Funcion para actualizar elke stado privado que contiene el contador
     */
    function incrementarContador(){
        // ? funcionParaCambiar(nuevoValor);
        setcontador(contador+1);
    }

    /**
     * Funcion para actualizar el estado de persona en el componente
     */
    function actualizarPersona(){
        setpersona(
            {
                nombre: 'Luis',
                email: 'pepemojica@gmail.com'
            }
        )
    }

    return (
        <div>
            <h1>
                Ejemplo de useState() ***
            </h1>
            <h2>
                Contador: { contador }
            </h2>
            <h3>
                DATOS DE LA PERSONA:
            </h3>
            <h4>NOMBRE: {persona.nombre} </h4>
            <h4>EMAIL: {persona.email} </h4>
            {/**Bloque de botones para actualizar el estado del componente */}
            <button onClick={ incrementarContador }>
                Incrementar Contador
            </button>
            <button onClick={ actualizarPersona }>
                Actualizar Persona
            </button>
        </div>
    );
}

export default Ejemplo1;


