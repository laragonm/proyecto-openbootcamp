/**
 * Ejemplo de uso de:
 * - useState() : controla el estado del componente
 * - useRef() : Para identificar elementos dentro de la vista
 * - useEffect() : Para controlar cambios en la vista
 */

import React, { useState, useRef, useEffect } from 'react'

function Ejemplo2() {

    //Vamos a crear dos contadores distintos
    //Cada uno en un estado diferente

    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    //Vamos crear una referencia con useRef() para asociar una variable
    //con un elemento del DOM del componente (vista HTML)

    const miRef = useRef();

    function incrementar1(){
        setContador1(
            contador1 + 1
        )
    }

    function incrementar2(){
        setContador2(
            contador2 + 1 
        )
    }

    /**
     * Trabajando con useEffect()
     */

    /**
     * ? Caso 1: Ejecutar SIEMPRE un snippet de código
     * Cada vez que haya un cambio en el estado del componente
     * se ejecuta aquello que esté dentro del useEffect()
     */

    //useEffect(() => {
    //   console.log('Cambio en el estado del componente');
    //   console.log('Mostrando Referencia a elemento del DOM');
    //   console.log(miRef);
    //});

    /**
     * ? Caso 2: Ejecutar solo cuando cambie contador 1
     * Cada vez que haya un cambio en contador 1, se ejecuta lo que diga en useEffect()
     * Encaso de que cambie contador 2, no cambia ejecución
     */

    //useEffect(() => {
    //    console.log('Cambio en el estado del CONTADOR 1');
    //    console.log('Mostrando Referencia a elemento del DOM');
    //    console.log(miRef);
    //}, [contador1]);

    /**
     * ? Caso 2: Ejecutar solo cuando cambie contador 1 O CONTADOR 2
     * Cada vez que haya un cambio en contador 1, se ejecuta lo que diga en useEffect()
     * Cada vez que haya un cambio en contador 1, se ejecuta lo que diga en useEffect()
     */

    useEffect(() => {
        console.log('Cambio en el estado del CONTADOR 1 / CONTADOR 2');
        console.log('Mostrando Referencia a elemento del DOM');
        console.log(miRef);
    }, [contador1, contador2]);

  return (
    <div>
        <h1>Ejemplo de useState(), useRef() y useEffect() ***</h1>
        <h2>Contador 1: { contador1 }</h2>
        <h2>Contador 2: { contador2 }</h2>
        {/** Elemento referenciado */}
        <h4 ref={miRef}>
            Ejemplo de elemento referenciado
        </h4>
        {/** Botones para cambiar los contadores */}
        <button onClick={ incrementar1 }>Incrementar Contador 1</button>
        <button onClick={ incrementar2 }>Incrementar Contador 2</button>
    </div>
  )
}

export default Ejemplo2
