import React from "react";
import { useState } from "react";
import { Buttones } from "./Buttones";
import { BotonCusHook } from "./BotonCusHook";

export const Api_GoogleMap = (nombre,evento) => {
  
    const {
        counter,
        Oninscreate,
        Ondiscreate,
        Onreset
    } = BotonCusHook(5);

    const contadorleft = BotonCusHook(5);
    const contadorRight = BotonCusHook(5);

     return (
        <> 
             <p>{counter }</p>

        <div className="counter-container">
            <Buttones 
                nombre='+'
                    evento={Oninscreate} />
            <Buttones
                nombre='-'
                    evento={Ondiscreate}/>
          
            <Buttones
                nombre='reset'
                    evento={Onreset}/>
             </div>
             

             {/* contador left*/}

             <p>{contadorleft.counter}</p>

             <div className="counter-container">
                 <Buttones
                     nombre='+'
                     evento={contadorleft.Oninscreate} />
                 <Buttones
                     nombre='-'
                     evento={contadorleft.Ondiscreate} />

                 <Buttones
                     nombre='reset'
                     evento={contadorleft.Onreset} />
             </div>






        </>  
  )
}
