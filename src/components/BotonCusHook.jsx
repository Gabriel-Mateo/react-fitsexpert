
import React from 'react'
import { useState } from 'react';

export const BotonCusHook = (value) => {
    const [counter, setcounter] = useState(value);

    const Oninscreate = () => setcounter(counter + 1);
    const Ondiscreate = () => setcounter(counter - 1);
    const Onreset = () => setcounter(value);
   
    return {
        counter,
        Oninscreate,
        Ondiscreate,
        Onreset
    };
};
